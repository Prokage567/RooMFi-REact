
import { React, useMemo, useState } from "react"
import { Calendar as Cal } from "../components/ui/calendar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Add from "../assets/images/add.svg"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Button } from "../components/ui/button"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { getSection} from "../api/section"
import { useCookies } from "react-cookie"
import $ from "jquery"
import { getTeacher } from "../api/teacher"
import { getRoom } from "../api/room"
import { postSched } from "../api/sched"
import PopUpCalendar from "../components/popUpCalendar"
import { toast } from "react-toastify"
import { DialogHeader } from "../components/ui/dialog"
import { DialogDescription } from "@radix-ui/react-dialog"

export default function section() {
  const { id } = useParams()
  useEffect(() => {
    getSection(id, "GET").then(res => {
      if (res?.ok) {
        setSections(res.data)
      }
    })
    getTeacher().then(res => {
      if (res?.ok) {
        setTeachers(res.data)
      }
    })
    getRoom().then(res => {
      if (res?.ok) {
        setRooms([res.data])
      }
    })
  }, [])
  const [Section, setSections] = useState([])
  const [Teachers, setTeachers] = useState([])
  const [Rooms, setRooms] = useState([])
  const [cookies, setCookie, removeCookie] = useCookies()
  const token = cookies.token
  const [days, setDays] = useState("")
  const [room, setRoom] = useState("")
  const [teacher, setTeacher] = useState("")
  const [section, setSection] = useState("")
  const index = [0, 1, 2, 3, 4, 5, 6]
  const weekdays =
    [
      { day: "Monday" },
      { day: "Tuesday" },
      { day: "Wednesday" },
      { day: "Thursday" },
      { day: "Friday" },
      { day: "Saturday" },
      { day: "Sunday" },
    ]

  const [date, setDate] = useState({})

  const schedule = () => {
    const teacher_id = teacher
    const room_id = room
    const subject = $("#subject").val()
    const day = days
    const end_time = $("#endTime").val()
    const start_time = $("#strTime").val()
    const endDate = $("#endDate").val()
    const startDate = $("#strDate").val()
    const section_id = section

    postSched(token, {
      day: day,
      subject: subject,
      start_time: start_time,
      end_time: end_time,
      start_date: startDate,
      end_date: endDate,
      teacher_id: teacher_id,
      section_id: section_id,
      room_id: room_id
    }).then(res => {
      console.log(res)
      if (res?.ok) {
        toast.success("Schedule Added!")
      }
    })
  }
  const selectForAll = (label, inputs, setvalue, input) => {
    return (<>
      <div className="font-[NiramitReg] text-sm mt-2">{label}</div>

      <Select onValueChange={setvalue} id="room" className="font-[NiramitReg] ">
        <SelectTrigger className="h-10  text-[#11124f] bg-white text-sm ">
          <SelectValue placeholder={`Select a ${input}`} />
        </SelectTrigger>
        <SelectContent id="room" className=" font-[NiramitReg]" >
          {inputs.map(room =>
            <SelectItem className="text-sm text-[#242F5B] hover:bg-[#bce9fc]" value={inputs == weekdays ? room.day : room.id}> {inputs == weekdays ? room.day : inputs == Teachers ? `${room.name} - ${room.technology_course} ` : inputs == Section ? room.name :`${room.name} - ${room.category?.category}`  } </SelectItem>
          )}
        </SelectContent>
      </Select>
    </>
    )
  }

  return (

    <>
      <div className="justify-center flex">
        <div className=" max-h-screen">
          <Cal
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md font-[NiramitReg] scroll-auto text-[#242F5B] border-none"
            schedules={Section?.schedules}
          />
        </div>
        

        <Dialog className="rounded-full w-[450px] text-sm sm:scale-95 " >
          <DialogTrigger className="flex flex-col-reverse">
            <img src={Add} className="w-[50px] h-[50px] fixed right-5 bottom-8" />
          </DialogTrigger>

          <DialogContent className="bg-slate-900 border-none  h-[680px] text-[#fff] pb-2">

            <DialogHeader className="text-[20px]">Add Event</DialogHeader>
            <DialogDescription className="text-[#fff]/80  -mb-6 -mt-4 ">Add an event for the sections schedule</DialogDescription>
            <div >
              {selectForAll("Room No.", Rooms, setRoom, "Room")}
              {selectForAll("Teacher", Teachers, setTeacher, "Teacher")}
              {selectForAll("Day", weekdays, setDays, "Weekdays")}
              {selectForAll("Section", Section, setSection, "Sections")}
            
              <div className="pt-3 ">
                <Label>Subject</Label>
                <Input autofocus e={false}
                  className="   bg-white  text-[#0F172A]"
                  id="subject"
                  placeholder="Input Subject" />
              </div>
              
              <PopUpCalendar className="pt-3" />
              <div className="flex flex-row w-[450px] ">
                <div>
                  <div className=" w-[465px] border-b-[1px] -mt-3 border-[#fff]/50 pb-2">
                    <Label className="text-[17px] ">Time</Label>
                  </div>
                  <div className="flex justify-around">
                    <div className="pt-2">
                      <Label className="" >From:</Label>
                      <Input id="strTime" className="border-none focus:outline-white " type="time" />
                    </div>

                    <div className="pt-2">
                      <Label className="]">To:</Label>
                      <Input id="endTime" className="border-none text-slate-50" type="time" />
                    </div>
                  </div>
                </div>
              </div>
              <Button onClick={() => schedule()} className="mt-4 justify-center flex w-full flex-row border border-green-100 items-center hover:font-extrabold hover:bg-transparent font-[10] font-[NiramitReg] bg-transparent text-[20px]"> Save </Button>
            </div>

          </DialogContent>
        </Dialog>
      
       </div>
    
    </>
  )
}


