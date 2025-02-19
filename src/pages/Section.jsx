
import { React, useState } from "react"
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
import { getSectionId } from "../api/section"
import { useCookies } from "react-cookie"
import $ from "jquery"
import { getTeacher } from "../api/teacher"
import { getRoom } from "../api/room"
import { postSched } from "../api/sched"
import PopUpCalendar from "../components/popUpCalendar"
import { toast } from "react-toastify"

export default function section() {
  const { id } = useParams()
  useEffect(() => {
    getSectionId(id, "GET").then(res => {
      if (res?.ok) {
        setSection(res.data)
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
  const [Section, setSection] = useState([])
  const [Teachers, setTeachers] = useState([])
  const [Rooms, setRooms] = useState([])
  const [cookies, setCookie, removeCookie] = useCookies()
  const token = cookies.token
  const [days, setDays] = useState("")
  const [room, setRoom] = useState("")
  const [teacher, setTeacher] = useState("")
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
    const section_id = "1"

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

  const hehe = (label, inputs, setvalue, input) => {
    return (<>
      <div className="font-[NiramitReg] text-[20px] pb-1">{label}</div>
      <div className="grid ml-0 max-w-sm items-center gap-1.5 w-[400px] font-[NiramitReg]"></div>
      <Select onValueChange={setvalue} id="room" className="font-[NiramitReg]">
        <SelectTrigger className="h-10  text-[#11124f] bg-white text-[18px] ">
          <SelectValue placeholder={`Select a ${input}`} />
        </SelectTrigger>
        <SelectContent id="room" className=" font-[NiramitReg]" >
          {inputs.map(room =>
            <SelectItem className="text-[18px] text-[#242F5B] hover:bg-[#bce9fc]" value={inputs == weekdays ? room.day : room.id}> {inputs == weekdays ? room.day : inputs == Teachers ? `${room.name} - ${room.technology_course} ` : `${room.name} - ${room.category?.category}`} </SelectItem>
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
        <Dialog className="rounded-full w-[500px] h-auto" >
          <DialogTrigger className="flex flex-col-reverse">
            <img src={Add} className="w-[50px] h-[50px] fixed right-5 bottom-8" />
          </DialogTrigger>
          <DialogContent className="bg-slate-900 border-none text-[#fff] pb-2">
            <div>
              {hehe("Room No.", Rooms, setRoom, "Room")}
              {hehe("Teacher", Teachers, setTeacher, "Teacher")}
              {hehe("Day", weekdays, setDays, "Weekdays")}
              <Label className="mt-2 text-[20px]">Subject</Label>
              <Input autofocus e={false}
                className="h-10 placeholder:text-[20px]  md:text-[20px] bg-white text-[18px] text-[#0F172A]"
                id="subject"
                placeholder="Input Subject" />
              <PopUpCalendar className="pt-3" />
              <div className="flex flex-row w-[450px] h-[80px]">
                <div>
                  <Label className="text-[20px]">Time</Label>
                  <div className="flex">
                    <Label className="text-[18px]" >From:</Label>
                    <Input id="strTime" className="border-none focus:outline-white " type="time" />
                    <Label className="text-[18px]">To:</Label>
                    <Input id="endTime" className="border-none text-slate-50" type="time" />
                  </div>
                </div>
              </div>
                  <Button onClick={() => schedule()} className="justify-center flex w-full flex-row border border-green-100 items-center hover:font-extrabold hover:bg-transparent font-[10] font-[NiramitReg] bg-transparent text-[20px]"> Save </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  )
}


