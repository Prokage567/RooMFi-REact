import { Link, useParams } from "react-router-dom"
import { useContext, useEffect, useMemo } from "react"
import { useState } from "react"
import { AuthContext } from "../context/context"
import AdminPowers from "../components/AdminPowers/AdminEditDeleteRooms.jsx"
import AdminPowers1 from "../components/AdminPowers/AdminEditDeleteCategory.jsx"
import { TeacherReq } from "../components/TeacherPowers/TeacherReqs.jsx"
import { Request } from "../components/TeacherPowers/Requests.jsx"
import { useCookies } from "react-cookie"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table.jsx"
import { CirclePlus, SquareChartGantt, X } from 'lucide-react'
import { StoreRoom } from "../api/room.js"
import { storeCategory } from "../api/category.js"
import { toast } from "react-toastify"
import $ from "jquery"
import dayjs from "dayjs"
import weekday from 'dayjs/plugin/weekday'
import { StoreRequest } from "../api/TeacherRequests.js"
import { Popover, PopoverAnchor } from "../components/ui/popover.jsx"
import { DialogClose } from "@radix-ui/react-dialog"

export default function Room() {
  const weekdays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
  dayjs.extend(weekday);
  const refreshCategoryId = () => {
    refreshCategoryById(id)
  }
  const [Pop, setPop] = useState(0)
  const [searchInfo, setSearchInfo] = useState([])
  const keyword = $("#input").val()
  const onHandleClick = () => {
    if (keyword == "") {
      setPop(0)
    } else (
      setPop(1)
    )
    return (setSearchInfo(Rooms.filter(room => room.name.includes(keyword))))
  }
  const [cookies] = useCookies()
  const token = cookies.token
  const { id } = useParams()
  const { user, Teachers, Sections, categories, refreshCategoryById, refreshCategory, category, refreshRooms, Rooms } = useContext(AuthContext)
  const [open, setOpen] = useState(false)
  const [show, setShow] = useState(false)
  const [ShowDialogue, setShowDialogue] = useState(false)
  const [showAddCategory, setShowAddCategory] = useState(false)
  const [roomCategory, setRoomCategory] = useState("")
  const [roomID, setRoomID] = useState("")
  useEffect(() => {
    refreshCategory()
    refreshCategoryId()
    refreshRooms()
    document.body.style.background = "white"
  }, [id])
  const onHandleClickDialog = (e) => {
    setRoomID(e)
    setShowDialogue(true)
  }
  const storeRoom = () => {
    const name = $("#name").val()
    const category_id = roomCategory
    StoreRoom(token, { name, category_id }).then(res => {
      if (res.ok) {
        toast.success(res?.message, "room has been added!")
        refreshCategory
        setShow(false)
      }
    })
  }
  const storeCategories = () => {
    const category = $("#category").val()
    storeCategory(token, { category }).then(res => {
      if (res.ok) {
        toast.success(res?.message, "room has been added!")
        refreshCategory
        setShow(false)
      }
    })
  }
  const suggestion = (input) => {
    return (
      input.map(rooms => (rooms.room.map(room => (
        <div>
          <Link to={`../room/${room.category_id}`}>
            <div key={room.id} className="flex justify-between rounded p-1 hover:bg-[#3F9DC1]/10">
              <p className="pt-1">Room: {room.name}</p>
              {room.schedules == "" ? room.schedules
                ? <p className="border border-[#3F9DC1]/70 p-1 rounded-[10px] text-white  bg-green-500">Available</p>
                : <p className="border border-[#3F9DC1]/70 p-1 rounded-[10px] text-white bg-red-500">Unavailable</p>
                : <p className="border border-[#3F9DC1]/70 p-1 rounded-[10px] text-white bg-red-500">Unavailable</p>}
            </div>
          </Link>
        </div>
      ))))
    )
  }
  const buttonSubmit = () => {
    const user_id = $("#user_id").val()
    const room_id = $("#roomID").val()
    const start_time = $("#strTime").val()
    const end_time = $("#endTime").val()
    const reason = $("#reason").val()
    StoreRequest(token, { user_id: user_id, room_id: room_id, reason: reason, start_time: start_time, end_time: end_time }).then(res => {
      if (res.ok) {
        toast.success(res.message)
      }
    }
    )
  }
  const cat = useMemo(() => {
    if (categories.length != 0) {
      if (id) {
        return category.filter(x => x.room.map(x => x.category_id === id))
      } else {
        return categories
      }
    }
    else {
      return categories
    }
  }, [categories, category])


  return (
    <>
      <div className=" p-2 py-3  border-l-white  z-20 fixed bg-[#11172E] rounded-l-[18px] w-[430px] flex justify-end right-0 mt-[15px]">
        <Input id="input" symbol2={true} type="text" placeholder="Search Room"
          className="border-[#11172E] bg-white h-[40px] border-[2px] -ml-3 pl-8 mr-[53px] py-2  w-[350px] rounded-full focus-visible:ring-0 shadow-transparent " onChange={() => onHandleClick()} />
        <div className="sticky top-[86px] ">
          <Popover>
            <PopoverAnchor className="flex justify-center items-center flex-col">
              <div className={`absolute w-96 min-h-auto top-[56px] ${Pop == 1 ? "bg-white z-20 border-gray-800/30 border" : ""} p-2 transition-all`}>
                {Pop == 1 ?
                  <div>
                    {searchInfo?.map(sc => (
                      <Link key={sc.id} to={`../room/${sc.category_id}`}>
                        <div key={sc.id} className="my-1 rounded p-1  hover:bg-[#3F9DC1]/10">Room: {sc.name}</div>
                      </Link>
                    )
                    )}
                    <div>
                      {searchInfo != ""
                        ? keyword.length != null && !searchInfo
                          ? <p className="text-gray-500/40">Loading...</p>
                          : searchInfo
                            ? <div className=" h-auto overflow-scroll no-scrollbar">
                              <p className="sticky top-0 bg-white text-gray-500/40">Suggestion... </p>
                              {suggestion(categories)}
                            </div>
                            : <p className="text-gray-500/40">Loading...</p>
                        : <p className="text-gray-500/40">No result... </p>
                      }
                    </div>
                  </div> : ""}
              </div>
            </PopoverAnchor>
          </Popover>
        </div>
      </div>
      <SquareChartGantt onClick={open == true ? () => setOpen(false) : () => setOpen(true)} className=" hover:h-[53px] hover:w-[53px] p-[8px] size-6 fixed z-20 top-[98px] right-1 font-extralight h-[55px] w-[55px]  font-[NiramitReg] text-[18px] text-[#5bc8ff]  flex items-center justify-center" />

      {open ? <>
        <div className=" text-center min-w-[85.8vw] p-6 rounded-b-2xl shadow-lg overflow-auto sticky z-10 top-20 bg-[#11172E] text-white">
          <h2 className="text-2xl font-semibold">Schedule Overview</h2>
        </div>
        <Table className=" overflow-auto text-[12px] w-full font-[NiramitReg] text-[#11172E] ">
          <TableHeader>
            <TableHead className="font-semibold text-[12px] w-[180px] pr-5 pl-5">Room</TableHead>
            <TableHead className="font-semibold text-[12px] w-[180px] pr-5 pl-5">Day</TableHead>
            <TableHead className="font-semibold text-[12px] w-[180px] pr-5 pl-5">Teacher</TableHead>
            <TableHead className="font-semibold text-[12px] w-[180px] pr-5 pl-5">Time</TableHead>
            <TableHead className="font-semibold text-[12px] w-[180px] pr-5 pl-5">Section</TableHead>
            <TableHead className="font-semibold text-[12px] w-[180px] pr-5 pl-5">Subject</TableHead>
            <TableHead className="font-semibold text-[12px] w-[180px] pr-5 pl-5">Date</TableHead>
          </TableHeader>
          <TableBody>
            {categories?.map(q => (
              q.room.map(r =>
                r.schedules.map(sc =>
                  <>{sc.date >= dayjs().weekday(1).format("YYYY-MM-DD") && sc.date <= dayjs().weekday(6).format("YYYY-MM-DD") ? <>
                    <TableRow className=" no-scrollbar" key={r.id}>
                      <TableCell className="w-[20px] pr-5 pl-5">{r.name}</TableCell>
                      <TableCell className="w-[20px] pr-5 pl-5">{sc.day}</TableCell>
                      {Teachers.filter(x => x.id === sc.teacher_id).map(t =>
                        <TableCell className="w-[20px] pr-5 pl-5">{t.name}</TableCell>
                      )}
                      <TableCell className="w-[20px] pr-5 pl-5">{sc.start_time}-{sc.end_time}</TableCell>
                      {Sections.filter(x => x.id === sc.section_id).map(s =>
                        <TableCell className="w-[20px] pr-5 pl-5">{s.name}</TableCell>
                      )}
                      <TableCell className="w-[20px] pr-5 pl-5">{sc.subject}</TableCell>
                      <TableCell className="w-[20px] pr-5 pl-5">{sc.date}</TableCell>
                    </TableRow>
                  </> : ""}
                  </>
                ))))}
          </TableBody>
        </Table>
      </>
        : <>
          <div className="mt-[10px] min-w-screen z-0 absolute ">
            <div className="ml-3 mr-3 sm:ml-2 sm:mr-0 flex flex-col items-start">
              {cat.map(r =>
                <div key={r.id} className="mb-7 sm:mb-3">
                  {user?.map(user =>
                    <div key={r.id} className="">
                      {user.role_id == "admin" ?
                        <AdminPowers1 input={r.id} admin={token} reload={refreshCategory} />
                        : ""}
                    </div>
                  )}
                  <p className="text-[40px] font-[100] ml-20 mt-[20px] mb-4">{r.category}</p>

                  <div>
                    {user?.map(u =>
                      u.role_id == "teacher" ?
                        r.room.map(rsc =>
                          <TeacherReq rooms={r.room} user_id={r.id} buttonSubmit={() => buttonSubmit()} />
                        )
                        : "")}
                  </div>
                  <div className={`mr-[40px] text-[#fff] ml-[50px] min-w-screen overflow-y-auto flex flex-col items-start flex-wrap h-[205px] no-scrollbar gap-[20px] ${r.room != "" ? "border-r-[2px] border-l-[2px] border-gray-600/20 " : ""}`}>
                    {r.room ? r.room != "" ? <>
                      {r.room.map(room => (
                        <div key={room.id} className=" border relative hover:scale-95 rounded-[20px]">
                          <div className="z-10 absolute  justify-items-center grid h-[60px]  w-full rounded-b-[20px] bg-[#0F172A]/70 bottom-0">
                            <div className=" mt-1 ">
                              Room {room.name}
                            </div>
                            <div className="mb-2">
                              {room.schedules ? room.schedules == "" ? "Available" : room.schedules.map(src => src.day === weekdays[dayjs().day()]) || r.schedules != "" ? "Unavailable" : "Available" : "Unavailable"}
                            </div>
                          </div>
                          <div className="z-0 text-9xl text-black">
                            <img src={`../src/assets/images/rooms/${room.name}.jpg`} onClick={() => onHandleClickDialog(room.id)} className="w-[300px] border-[0.5px] border-[#0F172A]/80 h-[200px] rounded-[20px] z-0 " alt="" />
                          </div>
                          {user?.map(user =>
                            <div key={user.id}>
                              {user.role_id == "admin" ?
                                <AdminPowers input={room} admin={token} category={categories} reload={refreshCategory} />
                                : ""
                              }
                            </div>
                          )}
                        </div>
                      ))}
                    </> : <p className="text-3xl text-center mt-11 text-gray-500">No Rooms Yet</p> : <p className="text-3xl mt-11 text-gray-500">No Rooms Yet</p>}
                  </div>
                </div >
              )}
              <Dialog open={ShowDialogue} onOpenChange={setShowDialogue}>
                <DialogContent className="bg-[#11172E] h-[600px] w-[850px]  font-[NiramitReg] ">
                 
                  {/* {categories.map(ct => ct.room.filter(r => r.id == roomID).map(r => r.schedules == "" ? <div className="text-[56px] text-black/35">No Schedule</div> : r.schedules.map(rc => <li>{rc.date}</li>)
                  )
                  )} */}
                  <div className=" h-[500px] border-b-[3px] border-[#fff]  overflow-auto  no-scrollbar">

                  <Table className="  mt-[20px] text-white">

                <TableHeader className=" h-[10px] text-[18px] text-white  bg-[#2c4f7c]  ">
                    <TableRow >
                    <TableHead> 202</TableHead>
                    <TableHead></TableHead>
                    <TableHead></TableHead>
                    <TableHead className=" text-right">11/12/23</TableHead>
                    </TableRow>
                </TableHeader>

                <TableHeader className=" h-[10px] text-black bg-[#fff]  ">
                    <TableRow >
                    <TableHead className=" ">Monday</TableHead>
                    <TableHead></TableHead>
                    <TableHead></TableHead>
                    <TableHead></TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow className="text-white/60 "> 
                    <TableCell className="text-center border-b-[2px] w-[110px] ">Section</TableCell>
                    <TableCell className="text-center border-b-[2px] w-[110px]  ">Subject</TableCell>
                    <TableCell className="text-center border-b-[2px] w-[90px]">Time</TableCell>
                    <TableCell className="text-center border-b-[2px] ">Teacher</TableCell>
                    </TableRow>
                </TableBody>

                <TableBody>
                    <TableRow > 
                    <TableCell className="text-center   break-normal  ">Komunikasyon at Pananaliksik sa Wika at Kulturang Pilipino</TableCell>
                    <TableCell className="text-center break-normal ">Araling khergies iruhisuhdrf oerhfouer sofdhiudshrfu Panlipunan</TableCell>
                    <TableCell className="text-center">11:00am-11:00pm</TableCell>
                    <TableCell className="text-center">Aladin P. Silvestre</TableCell>
                    </TableRow>
                    <TableRow > 
                    <TableCell className="text-center ">1H1</TableCell>
                    <TableCell className="text-center">Araling Panlipunan</TableCell>
                    <TableCell className="text-center">11:00am-11:00pm</TableCell>
                    <TableCell className="text-center">Aladin P. Silvestre</TableCell>
                    </TableRow>
                    <TableRow > 
                    <TableCell className="text-center">DRF</TableCell>
                    <TableCell className="text-center">Araling Panlipunan</TableCell>
                    <TableCell className="text-center">11:00am-11:00pm</TableCell>
                    <TableCell className="text-center">Aladin P. Silvestre</TableCell>
                    </TableRow>
                </TableBody>

                <TableHeader className=" h-[10px] text-black bg-[#FFF]  ">
                    <TableRow >
                    <TableHead className=" ">Tuesday</TableHead>
                    <TableHead></TableHead>
                    <TableHead></TableHead>
                    <TableHead></TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow className="text-white/60 "> 
                    <TableCell className="text-center border-b-[2px]  w-[90px]">Section</TableCell>
                    <TableCell className="text-center border-b-[2px] w-[110px]  ">Subject</TableCell>
                    <TableCell className="text-center border-b-[2px] w-[90px]">Time</TableCell>
                    <TableCell className="text-center border-b-[2px] ">Teacher</TableCell>
                    </TableRow>
                </TableBody>

                <TableHeader className=" h-[10px] text-black bg-[#FFF]  ">
                    <TableRow >
                    <TableHead className=" ">Wednesday</TableHead>
                    <TableHead></TableHead>
                    <TableHead></TableHead>
                    <TableHead></TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow className="text-white/60 "> 
                    <TableCell className="text-center border-b-[2px]  w-[90px]">Section</TableCell>
                    <TableCell className="text-center border-b-[2px] w-[110px]  ">Subject</TableCell>
                    <TableCell className="text-center border-b-[2px] w-[90px]">Time</TableCell>
                    <TableCell className="text-center border-b-[2px] ">Teacher</TableCell>
                    </TableRow>
                </TableBody>

                <TableHeader className=" h-[10px] text-black bg-[#FFF]  ">
                    <TableRow >
                    <TableHead className=" ">Thursday</TableHead>
                    <TableHead></TableHead>
                    <TableHead></TableHead>
                    <TableHead></TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow className="text-white/60 "> 
                    <TableCell className="text-center border-b-[2px]  w-[90px]">Section</TableCell>
                    <TableCell className="text-center border-b-[2px] w-[110px]  ">Subject</TableCell>
                    <TableCell className="text-center border-b-[2px] w-[90px]">Time</TableCell>
                    <TableCell className="text-center border-b-[2px] ">Teacher</TableCell>
                    </TableRow>
                </TableBody>

                <TableHeader className=" h-[10px] text-black bg-[#FFF]  ">
                    <TableRow >
                    <TableHead className=" ">Friday</TableHead>
                    <TableHead></TableHead>
                    <TableHead></TableHead>
                    <TableHead></TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow className="text-white/60 "> 
                    <TableCell className="text-center border-b-[2px]  w-[90px]">Section</TableCell>
                    <TableCell className="text-center border-b-[2px] w-[110px]  ">Subject</TableCell>
                    <TableCell className="text-center border-b-[2px] w-[90px]">Time</TableCell>
                    <TableCell className="text-center border-b-[2px] ">Teacher</TableCell>
                    </TableRow>
                </TableBody>

                <TableHeader className=" h-[10px] text-black bg-[#FFF]  ">
                    <TableRow >
                    <TableHead className=" ">Saturday</TableHead>
                    <TableHead></TableHead>
                    <TableHead></TableHead>
                    <TableHead></TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow className="text-white/60 "> 
                    <TableCell className="text-center border-b-[2px]  w-[90px]">Section</TableCell>
                    <TableCell className="text-center border-b-[2px] w-[110px]  ">Subject</TableCell>
                    <TableCell className="text-center border-b-[2px] w-[90px]">Time</TableCell>
                    <TableCell className="text-center border-b-[2px] ">Teacher</TableCell>
                    </TableRow>
                </TableBody>
                  </Table>
                  </div>

                  <DialogClose className=" h-[20px] text-[#fff] text-[20px] hover:font-bold text-right mr-4">Close</DialogClose>
                </DialogContent>
              </Dialog>
            </div >
          </div >
        </>}
      {
        user?.map(r =>
          <div>
            {r.role_id == "admin" ?
              <>
                <Request reload={refreshCategory} token={token} />
                <Dialog open={show} onOpenChange={setShow}>
                  <DialogTrigger>
                    <CirclePlus className=" text-[#ffffff] fixed bottom-5 right-1 p-4 font-extralight h-[60px] w-[60px] bg-[#0F1A42] font-[NiramitReg] text-[18px] rounded-[25px]  hover:bg-[#57c6f2] hover:text-[#0F1A42]" />
                  </DialogTrigger>
                  <DialogContent className="w-auto bg-[#11172E] text-white">
                    <DialogHeader>
                      <DialogTitle className="text-white">{showAddCategory ? "Add Room and Category" : "Add Category"}</DialogTitle>
                      <DialogDescription>
                        Add Room and select a Category.
                      </DialogDescription>
                    </DialogHeader>
                    {showAddCategory ?
                      <>
                        <Label>
                          Add room number
                        </Label>
                        <Input id="name" className="bg-white text-[#11172E]" placeholder="Add Room" />
                        <Label>
                          Select Room category
                        </Label>
                        <Select onValueChange={setRoomCategory}>
                          <SelectTrigger className="w-[380px] bg-white text-[#11172E]">
                            <SelectValue placeholder="Select room category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup className="w-[380px] text-[#11172E]">
                              {categories.map(cr =>
                                <SelectItem key={cr.id} className="hover:bg-cyan-200" value={cr.id}>{cr.category}</SelectItem>
                              )}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </>
                      : <>
                        <Label>Add Category</Label>
                        <div className="w-[380px]">
                          <Input id="category" className="bg-white text-[#11172E] w-[380px] text-[20px]" placeholder="Type here!" />
                        </div>
                      </>
                    }
                    <div className="border-t-[1px] h-[20px]">
                      <Button onClick={showAddCategory ? () => setShowAddCategory(false) : () => setShowAddCategory(true)} className="text-[18px] w-auto bg-transparent border-none hover:bg-transparent hover:font-bold" type="submit">{showAddCategory ? "Add Category" : "Add Room"}</Button>
                      <Button onClick={showAddCategory ? () => storeRoom() : () => storeCategories()} className=" fixed right-3 bottom-3 text-[18px]  bg-transparent border-none hover:bg-transparent hover:font-bold" type="submit">Add</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </>
              : ""
            }
          </div>
        )
      }
    </>
  )
}
