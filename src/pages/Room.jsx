import { useParams } from "react-router-dom"
import { getCategory, getCategoryId } from "../api/category"
import { useContext, useEffect, useMemo } from "react"
import { useState } from "react"
import { AuthContext } from "../context/context"
import AdminPowers from "../components/AdminPowers/AdminEditDeleteRooms.jsx"
import { teacherReq } from "../components/TeacherPowers/TeacherReqs.jsx"
import { request } from "../components/TeacherPowers/Requests.jsx"
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
import { DoorOpen, SquareChartGantt } from 'lucide-react'
import { getTeacher } from "../api/teacher.js"
import { getSection } from "../api/section.js"
import { StoreRoom } from "../api/room.js"
import { storeCategory } from "../api/category.js"
import { toast } from "react-toastify"
import $ from "jquery"

export default function Room() {
  const rooms = [
    "Room 111", "Room 112", "Room 143", "Room 145", "Room 147", "Room 201", "Room 202",
    "Room 206", "Room 207", "Room 209", "Room 212", "Room 315", "Room 317", "Room 323",
    "Room 324", "Room 335", "Room 336"
  ]
  const [Sections, setSections] = useState([])
  const [Teachers, setTeachers] = useState([])
  const [open, setOpen] = useState(false)
  const [cookies] = useCookies()
  const token = cookies.token
  const { id } = useParams()
  const { user } = useContext(AuthContext)
  const [categories, setCategories] = useState([])
  const [show, setShow] = useState(false)
  const [showAddCategory, setShowAddCategory] = useState(false)
  const [category, setCategory] = useState([])
  const [roomCategory, setRoomCategory] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    refreshCategory()
    refreshCategoryById()
    getSections()
    getTeachers()
    document.body.style.background = "white"
  }, [id])

  const getTeachers = () => {
    getTeacher().then(res => {
      if (res?.ok) {
        setTeachers(res.data)
      }
    })
  }
  const refreshCategory = () => {
    getCategory().then(res => {
      if (res?.ok) {
        setCategories(res.data)

      }
    })
  }
  const getSections = () => {
    getSection().then(res => {
      if (res?.ok) {
        setSections(res.data)
      }
    })
  }
  const refreshCategoryById = () => {
    if (id) {
      getCategoryId(id, "GET").then(res => {
        if (res?.ok) {
          setCategory([res.data])
        }
      })
    }
  }
  const storeRoom = () => {
    const name = $("#name").val()
    const category_id = roomCategory
    StoreRoom(token, { name, category_id }).then(res => {
      if (res.ok) {
        toast.success(res?.message, "room has been added!")
        refreshCategory()
        setShow(false)
      }
    })
  }
  const storeCategories = () => {
    const category = $("#category").val()
    storeCategory(token, { category }).then(res => {
      if (res.ok) {
        toast.success(res?.message, "room has been added!")
        refreshCategory()
        setShow(false)
      }
    })
  }
  const buttonSubmit = () => {
    setIsOpen(false)
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
      <Button onClick={open == true ? () => setOpen(false) : () => setOpen(true)} className="fixed z-20 top-[90px] right-2 font-extralight h-[65px] w-[65px] bg-[#0F1A42] font-[NiramitReg] text-[18px] text-white rounded-[25px] shadow-lg hover:bg-[#57c6f2] hover:text-[#0F1A42] flex items-center justify-center">
        <SquareChartGantt className=" text-white size-80" />
      </Button>
      {open ? <>
        <div className=" flex flex-col items-center w-full max-h-screen p-6 rounded-2xl shadow-lg overflow-auto sticky z-10 top-20 bg-[#11172E] text-white">
          <h2 className="text-2xl font-semibold">Schedule Overview</h2>
        </div>
        <Table className="ml-2 overflow-auto text-[12px] w-full font-[NiramitReg] text-[#11172E] ">
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
                  <>
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
                  </>
                ))))}
          </TableBody>
        </Table>
      </>
        : <>
          <div className="mt-[10px] min-w-screen ">
            <div className="ml-3 mr-3 sm:ml-2 sm:mr-0 flex flex-col items-start">
              {cat.map(r =>
                <div className="mb-7 sm:mb-3">
                  <p className="text-[40px] font-[100] mt-[40px] mb-4">{r.category}</p>
                  <div className={`mr-[40px] text-[#fff] ml-[50px] min-w-screen overflow-y-auto flex flex-col items-start flex-wrap h-[205px] no-scrollbar gap-[20px] ${r.room != "" ? "border-r-[2px] border-l-[2px] border-gray-600/20 " : ""}`}>
                    {r.room ? r.room != "" ? <>
                      {r.room.map(room => (
                        <div className=" border relative hover:scale-95 rounded-[20px]">
                          {user?.map(user =>
                            <div>
                              {user.role_id == "admin" ?
                                <AdminPowers input={room} admin={token} room={room} category={r.category} />
                                : ""
                              }
                            </div>
                          )}
                          <div className="z-10 absolute  justify-items-center grid h-[60px] w-full rounded-b-[20px] bg-[#0F172A]/70 bottom-0">
                            <div className=" mt-1 ">
                              {room.name}
                            </div>
                            <div className="mb-2">
                              {room.schedules ? room.schedules == "" ? "Available" : "Unavailable" : "Unavailable"}
                            </div >
                          </div >
                          <div className="z-0">
                            <img src={`../src/assets/images/rooms/${room.name}.jpg`} className="w-[300px] border-[1px] border-[#0F172A]/80 h-[200px] rounded-[20px] z-0 " alt="" />
                          </div>
                        </div >
                      ))}</> : <p className="text-3xl text-center mt-11 text-gray-500">No Rooms Yet</p> : <p className="text-3xl mt-11 text-gray-500">No Rooms Yet</p>}
                  </div >
                </div >
              )}
            </div >
          </div >
        </>}
      {
        user?.map(r =>
          <div className="flex">
            {r.role_id == "teacher" ?
              teacherReq(isOpen, setIsOpen, rooms, buttonSubmit)
              : ""
            }
          </div>
        )
      }
      {
        user?.map(r =>
          <div className="">
            {r.role_id == "admin" ?
              <>
                {request("", r)}
                <Dialog open={show} onOpenChange={setShow}>
                  <DialogTrigger className="">
                    <DoorOpen className=" text-[#ffffff] fixed bottom-20 right-1 p-4 font-extralight h-[60px] w-[60px] bg-[#0F1A42] font-[NiramitReg] text-[18px] rounded-[25px]  hover:bg-[#57c6f2] hover:text-[#0F1A42]" />
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
                                <SelectItem className="hover:bg-cyan-200" value={cr.id}>{cr.category}</SelectItem>
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
                      <Button onClick={showAddCategory ? () => setShowAddCategory(false) : () => setShowAddCategory(true)} className="text-[18px] w-auto bg-transparent border-none hover:bg-transparent hover:font-bold" type="submit">{showAddCategory ? "Add Category" : "Choose A Category"}</Button>
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
