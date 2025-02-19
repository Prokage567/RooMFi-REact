
import { useParams } from "react-router-dom"
import { getCategory, getCategoryId } from "../api/category"
import { useContext, useEffect, useMemo } from "react"
import { useState } from "react"
import { AuthContext } from "../context/context"
import  AdminPowers  from "../components/AdminPowers/AdminEditDeleteRooms.jsx"
import { teacherReq } from "../components/TeacherPowers/TeacherReqs.jsx"
import { request } from "../components/TeacherPowers/Requests.jsx"
import { useCookies } from "react-cookie"
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
 } from "@/components/ui/dialog"
 import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { ChartBarStacked, DoorOpen, SquareChartGantt, Plus } from 'lucide-react'


export default function Room() {
  const rooms = [
    "Room 111", "Room 112", "Room 143", "Room 145", "Room 147", "Room 201", "Room 202",
    "Room 206", "Room 207", "Room 209", "Room 212", "Room 315", "Room 317", "Room 323",
    "Room 324", "Room 335", "Room 336"
  ]

  const overview = [
    { tName: "Ms. Ruffa Mae Santos", section: "12-STEM", subject: "Math", schedule: "8:00 AM - 12:00 PM", room: "201" },
    { tName: "Mr. Aladin P. Silvestre", section: "12-CPROG/AUTO", subject: "English", schedule: "8:00 AM - 12:00 PM", room: "202" },
  ];
  
  const [Rooms, setRooms] = useState([])
  const [Room, setRoom] = useState()
  const [cookies] = useCookies()
  const token = cookies.token
  const { id } = useParams()
  const { user } = useContext(AuthContext)
  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState([])
  const getRoom = () => {
    getRoom().then(res => {
      console.log(res)
      if (res?.ok) {
        setRooms(res.data) 
      }
    })
  }
  useEffect(() => {
    refreshCategory()
    refreshCategoryById()
  }, [id, categories, category])
  const [isOpen, setIsOpen] = useState(false)
  const refreshCategoryById = () => {
    if (id) {
      getCategoryId(id, "GET").then(res => {
        if (res?.ok) {
          setCategory([res.data])
        }
      })
    }
  }
  const buttonSubmit = () => {
    setIsOpen(false)
    const roomNumber = $("#roomNum")
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
  
  const refreshCategory = () => {
    getCategory().then(res => {
      console.log(res)
      if (res?.ok) {
        setCategories(res.data)
        
      }
    })
  }
  
  const [open, setOpen] = useState(false)

  return (
    <>
    <div className="flex justify-end">
      <Popover open={open} onOpenChange={setOpen} >
        <PopoverTrigger asChild>
          <Button className="fixed top-[13.8vh] right-[2.5vh] font-extralight h-[65px] w-[65px] bg-[#0F1A42] font-[NiramitReg] text-[18px] text-white rounded-[25px] shadow-lg hover:bg-[#57c6f2] hover:text-[#0F1A42] flex items-center justify-center">
          <SquareChartGantt className="text-white w-[30px] h-[30px] z-0"/>
          </Button>
        </PopoverTrigger>
        <PopoverContent 
          side="left" 
          align="start" 
          className="w-[1000px] h-[500px] p-6 rounded-2xl shadow-lg overflow-auto bg-[#11172E] text-white"
        >
          <h2 className="text-2xl font-semibold mb-6">Schedule Overview</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#0F1A42]">
                  <th className="border px-4 py-3 text-left">Teacher's Name</th>
                  <th className="border px-4 py-3 text-left">Section</th>
                  <th className="border px-4 py-3 text-left">Subject</th>
                  <th className="border px-4 py-3 text-left">Time Schedule</th>
                  <th className="border px-4 py-3 text-left">Room</th>
                </tr>
              </thead>
              <tbody>
                {overview.map((view, index) => (
                  <tr key={index} className="even:bg-[#11172E]">
                    <td className="border px-4 py-2">{view.tName}</td>
                    <td className="border px-4 py-2">{view.section}</td>
                    <td className="border px-4 py-2">{view.subject}</td>
                    <td className="border px-4 py-2">{view.schedule}</td>
                    <td className="border px-4 py-2">{view.room}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </PopoverContent>
      </Popover>
    </div>

    <Dialog>
      <DialogTrigger>
    <Button className="fixed top-[75vh] right-[2.5vh] font-extralight h-[65px] w-[65px] bg-[#0F1A42] font-[NiramitReg] text-[18px] text-white rounded-[25px] shadow-lg hover:bg-[#57c6f2] hover:text-[#0F1A42] flex items-center justify-center">
      <DoorOpen className="text-white w-[30px] h-[30px] z-0"/>
    </Button>
      </DialogTrigger>
      <DialogContent className="w-auto bg-[#11172E] text-white">
        <DialogHeader>
          <DialogTitle className="text-white">Add Room</DialogTitle>
          <DialogDescription>
            Add room and select what categories you inputed. Click save when you're done.
          </DialogDescription>
        </DialogHeader> 
        <div className="grid gap-4 text-white">
          <div className="grid items-center gap-4">
              <Label>
              Add room number
            </Label>
            <Input className="bg-white text-[#11172E]" value="Type here!"/>
            <Label>
              Select room category
            </Label>
            <Select>
              <SelectTrigger className="w-auto bg-white text-[#11172E]">
                <SelectValue placeholder="Select room category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup className="text-[#11172E]">
                  <SelectItem value="lecture room">Lecture Rooms</SelectItem>
                  <SelectItem value="science room">Science Rooms</SelectItem>
                  <SelectItem value="computer laboratories">Computer Laboratories</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button className="bg-transparent border-none hover:bg-transparent hover:font-bold" type="submit">Add</Button>
          <Button className="bg-transparent border-none hover:bg-transparent hover:font-bold" type="cancel">Cancel</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>


    <Dialog>
      <DialogTrigger>
    <Button className="fixed top-[63.8vh] right-[2.5vh] font-extralight h-[65px] w-[65px] bg-[#0F1A42] font-[NiramitReg] text-[18px] text-white rounded-[25px] shadow-lg hover:bg-[#57c6f2] hover:text-[#0F1A42] flex items-center justify-center">
      <ChartBarStacked className="text-white w-[30px] h-[30px] z-0"/>
    </Button>
      </DialogTrigger>
      <DialogContent className="w-auto bg-[#11172E] text-white">
        <DialogHeader>
          <DialogTitle>Add Room Category</DialogTitle>
          <DialogDescription>
            Add room category for each room number. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid items-center gap-4">
            <Input  className="bg-white text-[#11172E]" value="Type here!"/>
          </div>
        </div>
        <DialogFooter>
          <Button className="bg-transparent border-none hover:bg-transparent hover:font-bold" type="submit">Add</Button>
          <Button className="bg-transparent border-none hover:bg-transparent hover:font-bold" type="cancel">Cancel</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>


      <div className="mt-[10px] ml-[15px] min-w-screen ">
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
                            <AdminPowers input={room} admin={token} room={room} category={r.category}/>
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
              </>
              : ""
            }
          </div>
        )
      }

<Dialog>
      <DialogTrigger className="">
    {/* <Button className="fixed bottom-20 right-1  font-extralight h-[100px] w-[100px] bg-[#0F1A42] font-[NiramitReg] text-[18px] text-white rounded-[25px]  hover:bg-[#57c6f2] hover:text-[#0F1A42]"> */}
    <div >
      <DoorOpen className= " text-[#ffffff] fixed bottom-20 right-1 p-4 font-extralight h-[60px] w-[60px] bg-[#0F1A42] font-[NiramitReg] text-[18px] rounded-[25px]  hover:bg-[#57c6f2] hover:text-[#0F1A42]"/>
    </div>
    {/* </Button> */}
      </DialogTrigger>
      <DialogContent className="w-auto bg-[#11172E] text-white">
        <DialogHeader>
          <DialogTitle className="text-white">Add Room</DialogTitle>
          <DialogDescription>
            Add room and select what categories you inputed. 
          </DialogDescription>
        </DialogHeader> 
   
              <Label>
              Add room number
            </Label>
            <Input className="bg-white text-[#11172E]" value="Type here!"/>
            <Label>
              Select room category
            </Label>
            <Select>
              <SelectTrigger className="w-auto bg-white text-[#11172E]">
                <SelectValue placeholder="Select room category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup className="text-[#11172E]">
                  <SelectItem value="lecture room">Lecture Rooms</SelectItem>
                  <SelectItem value="science room">Science Rooms</SelectItem>
                  <SelectItem value="computer laboratories">Computer Laboratories</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

          <div className="border-t-[1px] h-[20px]">
          <Button className=" fixed right-3 bottom-3 text-[18px]  bg-transparent border-none hover:bg-transparent hover:font-bold" type="submit">Add</Button>
          </div>

      </DialogContent>
    </Dialog>


    <Dialog>
      <DialogTrigger>
    {/* <Button className="fixed bottom-3 right-1 font-extralight h-[65px] w-[65px] bg-[#0F1A42] font-[NiramitReg] text-[18px] text-white rounded-[25px] shadow-lg hover:bg-[#57c6f2] hover:text-[#0F1A42] "> */}
      <ChartBarStacked className=" text-[#ffffff] fixed bottom-2 right-1 p-4 font-extralight h-[60px] w-[60px] bg-[#0F1A42] font-[NiramitReg] text-[18px] rounded-[25px]  hover:bg-[#57c6f2] hover:text-[#0F1A42]"/>
    {/* </Button> */}
      </DialogTrigger>
      <DialogContent className="w-auto bg-[#11172E] text-white">
        <DialogHeader>
          <DialogTitle>Add Room Category</DialogTitle>
          <DialogDescription>
            Add room category for each room number. 
          </DialogDescription>
        </DialogHeader>
            <Label>Room NO.</Label>
            <Input  className="bg-white text-[#11172E] w-[350px] text-[20px]" placeholder="Type here!"/>
         
          <div className="border-t-[1px] h-[20px]">
          <Button className="fixed bottom-3 right-2 text-[18px] bg-transparent border-none hover:bg-transparent hover:font-bold" type="submit">Add</Button>
         
          </div>

      </DialogContent>
    </Dialog>
    </>
  )
}
