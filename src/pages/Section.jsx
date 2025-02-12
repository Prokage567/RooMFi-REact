
import { React, useState } from "react"
import { Calendar as Cal } from "../components/ui/calendar"
import { Cal as Kal } from "../components/ui/popCalendar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import './index.css'
import Add from "../assets/images/add.svg"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Checkbox } from "../components/ui/checkbox"
import { Button } from "../components/ui/button"
import { format } from "date-fns"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import '../pages/index.css'
import { Calendar, CalendarIcon } from 'lucide-react'
import dayjs from 'dayjs'
import { cn } from "@/lib/utils"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { getSection, getSectionId } from "../api/section"
import { useCookies } from "react-cookie"
import $ from "jquery"
import { getTeacher } from "../api/teacher"
import { getRoom } from "../api/room"
import { getSched, postSched } from "../api/sched"


export default function section({
  className,
}) {
  const [Section, setSection] = useState([])
  const [Teachers, setTeachers] = useState([])
  const [Rooms, setRooms] = useState([])
  const [cookies, setCookie, removeCookie] = useCookies()
  const token = cookies.token
  const { id } = useParams() // this id comes from the mainlayout where it indicates the id of the section 
  const [days, setDays] = useState("")
  const [room, setRoom] = useState("")
  const [teacher, setTeacher] = useState("")


  const [date, setDate] = useState({
    from: dayjs("2025-01-20").toDate(),
    to: dayjs("2025-01-20").add(20, "days").toDate(),
  })

  

  const schedule = () => {

    const teacher1 = teacher.toString()
    const room1 = room.toString()
    const subject = $("#subject").val()
    const day = days.toString()
    const endTime = $("#endTime").val()
    const startTime = $("#strTime").val()
    const endDate = $("#endDate").val()
    const startDate = $("#strDate").val()
    const section = "1"
    console.log(day)
    console.log(room1)
    console.log(startDate)
    console.log(startTime)
    console.log(teacher1)
    console.log(endTime)
    console.log(endDate)
    console.log(subject)

    postSched(token, {day:day, subect:subject, start_time:startTime, end_time:endTime, start_date:startDate, end_date:endDate, teacher_id:teacher1,section_id:section, room_id:room1}).then(res => {
      console.log(res)
      if (res?.ok) {
        toast.success("Event added!")
      }
    })
  }
  useEffect(() => {
    //the id then will be thrown to the backend so that we can differentiate what it sched it has
    getSectionId(id, "GET").then(res => {
      if (res?.ok) {
        setSection(res.data)
      }
    },[])

   
    getTeacher().then(res => {
      if (res?.ok) {
        setTeachers(res.data)
      }
    })

    getRoom().then(res => {
      if (res?.ok) {
        setRooms(res.data)
      }
    })

    //solution for the delayed data's getting thorugh is by making a function where once the page loaded it gets the data
  }, [])
  return (

    <>
      {/* NOTE: bbugs out and makes the page cut it's header as it closes, 
    solution that might help remove this file and merge it*/}

      <script src="https://static.elfsight.com/platform/platform.js" async></script>
      <div class="elfsight-app-efd5a1d4-de48-498d-b1a9-2c77f46ecc1a" data-elfsight-app-lazy></div>

      <div className="flex mt-[20px] ">
        <div className="justify-end h-auto max-h-screen">
          <Cal
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md font-[NiramitReg] scroll-auto text-[#242F5B] border-none"
            schedules={Section?.schedules}
          />
        </div>

        <Dialog className="rounded-full w-[500px]" >
          <DialogTrigger>
            <img src={Add} className="w-[50px] h-[50px] mr-[10px] mb-[10px] fixed bottom-0 right-0" />
          </DialogTrigger>

          <DialogContent className="bg-slate-900 border-none text-[#fff]">
          
              <div className="mt-2 z-10 ">
                <div className="font-[NiramitReg] text-[20px] mb-1">Room No.</div>

                <div className="grid ml-0 max-w-sm items-center gap-1.5 w-[400px] font-[NiramitReg]">
                  <Select onValueChange={setRoom} id="room" className="font-[NiramitReg]">
                    <SelectTrigger className="h-10  text-[#11124f] bg-white text-[18px] ">
                      <SelectValue placeholder="Select a Room" />
                    </SelectTrigger>
                    <SelectContent id="room" className=" font-[NiramitReg]" >
                      {Rooms.map(room =>
                        <SelectItem className="text-[18px] text-[#242F5B] hover:bg-[#bce9fc]" value={room.id}> {room.name} - {room.type}</SelectItem>
                      )}
                    </SelectContent>
                  </Select>
                </div>


                <div className="mt-2 z-10 ">
                  <div className="font-[NiramitReg] text-[20px] mb-1">Teacher</div>

                  <Select onValueChange={setTeacher} className="font-[NiramitReg]">
                    <SelectTrigger className="h-10 w-[450px] text-[#11124f] bg-white text-[18px] ">
                      <SelectValue placeholder="Select a Teacher" />
                    </SelectTrigger>
                    <SelectContent id="teacher" className=" font-[NiramitReg]" >
                      {Teachers.map(teacher =>
                        <div id="teacher">
                          <input type="hidden" id="teacher" value={teacher.id} ></input>
                          <SelectItem id="teacher" className="text-[18px] text-[#242F5B] hover:bg-[#bce9fc]" value={teacher.id} >{teacher.name} - {teacher.technology_course}</SelectItem>
                        </div>
                      )}
                    </SelectContent>
                  </Select>
                </div>


                <Label className="mt-2 text-[20px]">Subject</Label>
                <Input autofocus e={false}
                  className="h-10 placeholder:text-[20px]  md:text-[20px] bg-white text-[18px] text-[#0F172A]"
                  id="subject"
                  placeholder="Input Subject" />

                <div className="mt-2 z-10 ">
                  <div className="font-[NiramitReg] text-[20px] mb-1">Select Weekday</div>
       
                  <Select onValueChange={setDays}  className="font-[NiramitReg]">
                    <SelectTrigger className="h-10 w-[450px] text-[#11124f] bg-white text-[18px] ">
                      <SelectValue   placeholder="Select a Teacher" />
                    </SelectTrigger>
                    <SelectContent className=" font-[NiramitReg]" >
                      <SelectItem className="text-[18px] text-[#242F5B] hover:bg-[#bce9fc]" value="1">Monday</SelectItem>
                      <SelectItem className="text-[18px] text-[#242F5B] hover:bg-[#bce9fc]" value="2">Tuesday</SelectItem>
                      <SelectItem className="text-[18px] text-[#242F5B] hover:bg-[#bce9fc]" value="3">Wednesday</SelectItem>
                      <SelectItem className="text-[18px] text-[#242F5B] hover:bg-[#bce9fc]" value="4">Thursday</SelectItem>
                      <SelectItem className="text-[18px] text-[#242F5B] hover:bg-[#bce9fc]" value="5">Friday</SelectItem>
                      <SelectItem className="text-[18px] text-[#242F5B] hover:bg-[#bce9fc]" value="6">Saturday</SelectItem>
                      <SelectItem className="text-[18px] text-[#242F5B] hover:bg-[#bce9fc]" value="7">Sunday</SelectItem>
                    </SelectContent>
                  </Select>
                  
                </div>

                <div className={cn("grid gap-2 mt-3", className)}>
                  <Popover className="">
                    <PopoverTrigger asChild>
                      <Button
                        id=""
                        variant={"outline"}
                        className={cn(
                          "w-[450px] justify-center text-center  text-[18px] font-normal hover:border-white hover:border hover:line bg-transparent",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon />
                        {date?.from ? (
                          date.to ? (
                            <>
                              {format(date.from, "LLL dd, y")}- {" "}
                              {format(date.to, "LLL dd, y")}
                            </>
                          ) : (
                            format(date.from, "LLL dd, y")
                          )
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[315px] h-[335px] border-[3px] line border-white bg-[#BFAC88] " align="start">
                      <Kal
                        initialFocus
                        mode="range"
                        defaultMonth={date?.from}
                        selected={date}
                        onSelect={setDate}
                        numberOfMonths={1}
                        className="text-[#fff]  font-[NiramitReg]"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <Input id="strDate" type="hidden" value={format(date.from, "yyyy-MM-dd")}></Input>
                <Input id="endDate" type="hidden" value={format(date.to, "yyyy-MM-dd")}></Input>



                <div className="grid grid-flow-col w-[450px] mt-[10px] h-[150px] gap-2 ">

                  <div className=" w-[150px] row-span-3" >
                    <Label className="ml-10 text-[20px]">Time</Label><br />
                    <Label className="text-[18px]" >From:</Label>
                    <Input id="strTime" className="border-none focus:outline-white" type="time" />
                    <Label className="text-[18px]">To:</Label>
                    <Input id="endTime" className="border-none text-slate-50" type="time" />
                  </div>

                  <div className="col-span-2 w-[270px]  h-[110px]  mt-2 ">
                    <div className="items-top flex space-x-2">
                      <Checkbox id="application" className="border-white hover:bg-slate-500/80" />
                      <div className="grid gap-1.5 leading-none">
                        <label
                          htmlFor="application"
                          className="font-medium leading-none peer-disabled:cursor-not-allowed text-[16px] peer-disabled:opacity-70">
                          Apply to all week days? (monday)
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="col-span-2 row-span-2 ml-[210px]">
                    <Button onClick={() => schedule()} className="hover:font-extrabold hover:bg-transparent font-[10] font-[NiramitReg] bg-transparent text-[20px]"> Save </Button>
                  </div>

                </div>

              </div>
          
          </DialogContent>
        </Dialog>
      </div>
    </>
  )
}

function newFunction() {
  try { } finally { }
}

