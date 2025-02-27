
import { React, useContext, useState } from "react"
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
import { AddSection, getSection, getSectionId } from "../api/section"
import { useCookies } from "react-cookie"
import $ from "jquery"
import { getTeacher } from "../api/teacher"
import { getRoom } from "../api/room"
import { postSched } from "../api/sched"
import PopUpCalendar from "../components/popUpCalendar"
import { toast } from "react-toastify"
import { DialogHeader } from "../components/ui/dialog"
import { DialogDescription } from "@radix-ui/react-dialog"
import { AuthContext } from "../context/context"

export default function section() {
  const { id } = useParams()
  const reload = () => {
    getSectionbyId(id)
  }
  const AddSections = () => {
    const name = $("#name").val()
    AddSection(token, { name }).then(res => {
      if (res?.ok) {
        toast.success(name + res.message)
        setOpen(false)
        getSections()
      }
    })
  }
  useEffect(() => {
    reload()
    getSections()
    getTeachers()
    refreshRooms()
  }, [id])
  const [date, setDate] = useState([])
  const [open, setOpen] = useState(false)
  const [show, setShow] = useState(0)
  const [cookies] = useCookies()
  const token = cookies.token
  const { user, Sections, getSections, SectionbyId, getSectionbyId, Teachers, getTeachers, Rooms, refreshRooms } = useContext(AuthContext)
  const [room, setRoom] = useState("")
  const [teacher, setTeacher] = useState("")
  const [section, setSection] = useState("")
  const [sectionId, setSectionId] = useState("")
  const DelSectionById = () => {
    const id = sectionId
    AddSection(id).then(res => {
      if (res?.ok) {
        toast.success(res.message)
      }
    })
  }
  const schedule = () => {
    const teacher_id = teacher
    const room_id = room
    const subject = $("#subject").val()
    const end_time = $("#endTime").val()
    const start_time = $("#strTime").val()
    const endDate = $("#endDate").val()
    const startDate = $("#strDate").val()
    const section_id = section

    postSched(token, {
      subject: subject,
      start_time: start_time,
      end_time: end_time,
      start_date: startDate,
      end_date: endDate,
      teacher_id: teacher_id,
      section_id: section_id,
      room_id: room_id
    }).then(res => {
      if (res?.ok) {
        toast.success("Schedule Added!")
        reload()
        setOpen(false)
      }
    })
  }

  const selectForAll = (label, inputs, setvalue, input) => {
    return (<>
      <div key={label} className="font-[NiramitReg] text-sm mt-2">{label}</div>

      <Select onValueChange={setvalue} id="room" className="font-[NiramitReg] ">
        <SelectTrigger className="h-9  text-[#11124f] bg-white text-sm ">
          <SelectValue placeholder={`Select a ${input}`} />
        </SelectTrigger>
        <SelectContent id="room" className=" font-[NiramitReg] " >
          {inputs.map(room =>
            <SelectItem key={room.id} className="text-sm text-[#242F5B]  hover:bg-[#bce9fc]" value={room.id}> {inputs == Teachers ? `${room.name} - ${room.subject} ` : inputs == Sections ? room.name : `${room.name} - ${room.category?.category}`} </SelectItem>
          )}
        </SelectContent>
      </Select>
    </>
    )
  }
  return (
    <>
      <div className="justify-center items-center flex">
        <div className=" max-h-screen">
          <Cal
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md font-[NiramitReg] scroll-auto text-[#242F5B] border-none"
            schedules={SectionbyId?.schedules}
          />
        </div>
        <Dialog open={open} onOpenChange={setOpen} className="rounded-full w-[500px] h-auto text-sm" >
          {user ? user.map(u => u.role_id == "admin" ? <div> <DialogTrigger className="flex flex-col-reverse">
            <img src={Add} className="w-[50px] h-[50px] fixed right-5 bottom-8" />
          </DialogTrigger>
            <DialogContent className="bg-slate-900 border-none text-[#fff] pb-2">
              <DialogHeader className="text-[20px]">Add Event</DialogHeader>
              <DialogDescription className="text-[#fff]/80">Add an event for the sections schedule</DialogDescription>
              <div >
                {!show ? <>
                  {selectForAll("Room No.", Rooms, setRoom, "Room")}
                  {selectForAll("Teacher", Teachers, setTeacher, "Teacher")}
                  {selectForAll("Section", Sections, setSection, "Sections")}

                  <div className="pt-3 ">
                    <Label>Subject</Label>
                    <Input autofocus e={false}
                      className="   bg-white  text-[#0F172A]"
                      id="subject"
                      placeholder="Input Subject" />
                  </div>
                  <PopUpCalendar className="pt-3"/>
                  <div className="flex flex-row w-[450px] ">
                    <div>
                      <div className=" w-[465px] border-b-[1px] border-[#fff]/50 pb-2">
                        <Label className="text-[17px] ">Time</Label>
                      </div>
                      <div className="flex justify-around">
                        <div className="pt-2">
                          <Label className="" >From:</Label>
                          <Input id="strTime" className="border-none focus:outline-white " type="time" />
                        </div>

                        <div className="pt-2">
                          <Label>To:</Label>
                          <Input id="endTime" className="border-none text-slate-50" type="time" />
                        </div>
                      </div>
                    </div>
                  </div>
                </> : <div className="pt-2">
                  <Label>Section's Name:</Label>
                  <Input id="name" className=" bg-white  text-[#0F172A]" type="text" />
                </div>}
                <Button onClick={!show ? () => schedule() : () => AddSections()} className="mt-4 justify-center flex w-full flex-row border border-green-100 items-center hover:font-extrabold hover:bg-transparent font-[10] font-[NiramitReg] bg-transparent text-[20px]"> Save </Button>
                <Button onClick={!show ? () => setShow(1) : () => setShow(0)} className="mt-4 justify-center flex w-full flex-row border border-green-100 items-center hover:font-extrabold hover:bg-transparent font-[10] font-[NiramitReg] bg-transparent text-[20px]">{show ? "Add Schedule" : "Add a Section"}</Button>
              </div>

            </DialogContent></div> : "") : ""}
        </Dialog>

      </div>

    </>
  )
}


