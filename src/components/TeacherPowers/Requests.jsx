import { Dialog, DialogContent, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog";
import {
  AC,
  AI,
  AT,
  ACC
} from "../ui/AC"
import Add from "../../assets/images/add.svg"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover.jsx";
import { Pencil, SquareCheck, SquareLibrary, SquareX, X } from 'lucide-react';
import { Label } from "../ui/label.jsx";
import { Input } from "../ui/input.jsx";
import { Button } from "../ui/button.jsx";
import { DelRequestId, getRequest } from "../../api/TeacherRequests.js";
import { useContext, useEffect, useState } from "react";
import { getCategory } from "../../api/category.js";
import { toast } from "react-toastify";
import $ from "jquery"
import { DialogHeader } from "../ui/dialog.jsx";
import PopUpCalendar from "../popUpCalendar.jsx";
import { getTeacher } from "../../api/teacher.js";
import { getRoom } from "../../api/room.js";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { postSched } from "../../api/sched.js";
import { AuthContext } from "../../context/context.jsx";

export function Request({ reload, token }) {
  const { refreshCategory, categories,getSections, Sections, getTeachers, Teachers, refreshRooms, refreshRequests, Requests } = useContext(AuthContext)
  useEffect(() => {
    const interval = setInterval(() => {
      refreshRequests()
      getSections()
      refreshCategory()
      getTeachers()
      refreshRooms()
    }, 5000)
    refreshCategory()
    return () => clearInterval(interval)
  }, [])
  console.log(Requests)
  const [All, setAll] = useState([])
  const [open, setOpen] = useState(false)
  const [reqid, setreqid] = useState("")
  const deleteRequest = () => {
    const id = reqid
    DelRequestId(id, token).then(res => {
      if (res.ok) {
        toast.success("deleted succesfully")
        refreshRequests()
      }
      setreqid("")
    }
    )
  }
  const [roomid, setroomid] = useState("")
  const schedule = () => {
    const teacher_id = teacher
    const room_id = roomid
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
        reload
        setOpen(false)
        deleteRequest()
        setreqid("")
        refreshRequests()
      }
    })
  }
  const dialogue = (r, i) => {
    setOpen(true)
    setroomid(r)
    setreqid(i)
  }
  const delDialogue = (i) => {
    deleteRequest()
    setreqid(i)
  }
  const [show, setShow] = useState(0)
  const [room, setRoom] = useState("")
  const [teacher, setTeacher] = useState("")
  const [section, setSection] = useState("")
  const [sectionId, setSectionId] = useState("")
  const selectForAll = (label, inputs, setvalue, input) => {
    return (<>
      <div key={label} className="font-[NiramitReg] text-sm mt-2">{label}</div>

      <Select onValueChange={setvalue} id="room" className="font-[NiramitReg] ">
        <SelectTrigger className="h-9  text-[#11124f] bg-white text-sm ">
          <SelectValue placeholder={`Select a ${input}`} />
        </SelectTrigger>
        <SelectContent id="room" className=" font-[NiramitReg] " >
          {inputs.map(room =>
            <SelectItem key={room.id} className="text-sm text-[#242F5B] hover:bg-[#bce9fc]" value={room.id}> {inputs == Teachers ? `${room.name} - ${room.subject} ` : inputs == Sections ? room.name : ""} </SelectItem>
          )}
        </SelectContent>
      </Select>
    </>
    )
  }

  return (
    <div className="overflow-auto no-scrollbar">
      {/* <Dialog>
          <DialogTrigger>
            <img src={Add} className="w-[50px] h-[50px] mr-[10px] mb-[10px]  bottom-0 right-1" />
          </DialogTrigger>

          <DialogContent className="bg-[#11172E] font-[NiramitReg] text-[#fff]">
            <DialogTitle className="font-thin">Edit Room Name</DialogTitle>

            <DialogDescription>
              Replace the room name: {room.name}
            </DialogDescription>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="picture">Replace Room Name</Label>
              <Input id="picture" type="text" className="bg-white text-[#000] placeholder:hello " maxlength={4} />
            </div>

            <Button className="border font-[NiramitReg] hover:text-[15px] border-white bg-transparent hover:bg-transparent hover:font-bold"> Save</Button>
          </DialogContent>
        </Dialog> */}
      <Popover className="h-[350px]">
        <div className=" fixed bottom-[132px] text-[14px] right-[2px] z-10 grid justify-items-center border-[2px] border-[#fff] bg-[#c3f8ff] h-[28px] w-[28px] rounded-[50px]">
          <div className="mt-[2px]">{Requests.length}</div>
        </div>
        <PopoverTrigger className="fixed bottom-[90px] right-1 font-extralight h-[60px] w-[60px] bg-[#0F1A42] font-[NiramitReg] text-[18px] text-white rounded-[25px] shadow-lg hover:bg-[#57c6f2] hover:text-[#0F1A42] flex items-center justify-center">
          <SquareLibrary className="w-[30px] h-[30px] z-0" />
        </PopoverTrigger>
        <PopoverContent className=" border-[2px] border-[#ffffff] bg-[#0F1A42] shadow-none mr-8 mb-3 h-[350px] rounded-[20px]">

          <AC type="single" collapsible className="w-[250px] text-[14px]  font-[NiramitReg] bg-[#0F1A42] border-b-[1px] border-[#fff]/90 text-[#fff]">
            <div className="overflow-auto no-scrollbar  h-[300px] ">

              {Requests.map(req => (<>
                <AI value={req.id} key={req}>
                  <AT className="border-b-[1px]  border-[#fff]/30">
                    <div>
                      {
                        [req.user].map(u => u?.name)
                      }
                    </div>
                  </AT>
                  <ACC className="h-[90px] overflow-auto no-scrollbar">
                    {categories.map(ct => ct.room.filter(r => r.id === req?.room_id).map(r => <>
                      <div className="mr-[30px] border-b-[1px] border-[#fff]/30 w-[70px]">
                        {r?.name}
                      </div>
                      <div className="mt-2">
                        {req?.reason}
                      </div>
                      <div className=" mt-2  justify-end flex  flex-wrap h-[20px]" >
                        <div className=" mr-2 hover:text-[#fff]/50 text-[#ffffff]">
                          <SquareCheck onClick={() => dialogue(r.id, req.id)} />
                        </div>
                        <div className="  hover:text-[#fff]/50 text-[#ffffff]">
                          <SquareX onClick={() => delDialogue(req.id)} />
                        </div>
                      </div>
                    </>))}
                  </ACC>
                </AI>
                <Input id="id" type="hidden" value={req?.id} />
              </>)
              )}
            </div>
          </AC>
        </PopoverContent>
      </Popover>
      <Dialog open={open} onOpenChange={setOpen} className="rounded-full w-[500px] h-auto text-sm" >
        <DialogContent className="bg-slate-900 border-none text-[#fff] pb-2">
          <DialogHeader className="text-[20px]">Add Event</DialogHeader>
          <DialogDescription className="text-[#fff]/80">Add an event for the sections schedule</DialogDescription>
          <div >
            {selectForAll("Teacher", Teachers, setTeacher, "Teacher")}
            {selectForAll("Section", Sections, setSection, "Sections")}

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
            <Button onClick={() => schedule()} className="mt-4 justify-center flex w-full flex-row border border-green-100 items-center hover:font-extrabold hover:bg-transparent font-[10] font-[NiramitReg] bg-transparent text-[20px]">Add Schedule</Button>
          </div>

        </DialogContent>
      </Dialog>
    </div >
  )
}