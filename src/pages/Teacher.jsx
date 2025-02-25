import { React, useContext, useEffect, useState } from "react"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../components/ui/card.jsx"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../components/ui/table.jsx"
import AdminPowers from "../components/AdminPowers/AdminEditDeleteRooms copy.jsx"
import { useCookies } from "react-cookie"
import { getTeacher, getTeacherById } from "../api/teacher.js"
import { AuthContext } from "../context/context.jsx"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogDescription,
} from "@/components/ui/dialog"
import Add from "../assets/images/add.svg"
import { Label } from "@radix-ui/react-label"
import { Input } from "../components/ui/input.jsx"
import { DialogTitle } from "@mui/material"
import { Button } from '../components/ui/button.jsx'
import { toast } from 'react-toastify'
import $ from "jquery"
import { getSection } from "../api/section.js"
import { getRoom } from "../api/room.js"
import { UpdSched } from "../api/sched.js"
import dayjs from "dayjs"
import weekday from 'dayjs/plugin/weekday'

function Teacher() {
    dayjs.extend(weekday);
    const { user } = useContext(AuthContext)
    const [cookies] = useCookies()
    const token = cookies.token
    const [teachers, setTeachers] = useState([])
    const [rooms, setRooms] = useState([])
    const [show, setshow] = useState(false)
    const [open, setopen] = useState(false)
    const [sections, setSections] = useState([])
    const [room, setRoom] = useState("")
    const [section, setSection] = useState("")
    const [schedule, setSched] = useState("")
    const reload = () => {
        getTeacher().then(res => {
            if (res?.ok) {
                setTeachers(res.data)
            }
        })
    }

    const addTeacher = () => {
        const name = $("#name").val().toUpperCase()
        const tech_Course = $("#techCourse").val().toUpperCase()
        getTeacherById(token, "POST", { name: name, subject: tech_Course }).then(res => {
            if (res?.ok) {
                toast.success("Added a Teacher!")
                setopen(false)
                reload()
            }
        }
        )
    }
    const replaceSchedule = () => {
        const id = schedule
        const teacher = $("#teacher").val()
        const room1 = room
        const subject = $("#subject").val()
        const endTime = $("#endTime").val()
        const startTime = $("#strTime").val()
        const endDate = $("#endDate").val()
        const startDate = $("#strDate").val()
        const section1 = section

        UpdSched(token, id, { subject: subject, start_time: startTime, end_time: endTime, start_date: startDate, end_date: endDate, teacher_id: teacher, section_id: section1, room_id: room1 }).then(res => {
            if (res?.ok) {
                toast.success("Schedule has been changed!")
                reload()
            }
        })
    }

    useEffect(() => {
        reload()
        getSection().then(res => {
            if (res?.ok) {
                setSections(res.data)
            }
        })
        getRoom().then(res => {
            if (res?.ok) {
                setRooms([res.data])
            }
        })
        document.body.style.background = "white"
    }, [])
    const Filter = (t, input) => {

        return (
            t?.schedules?.filter(sc => sc.day === `${input}`).map(sc =>
                <>
                    {sc.date >= dayjs().weekday(1).format("YYYY-MM-DD") && sc.date <= dayjs().weekday(6).format("YYYY-MM-DD") ?
                    <TableBody key={sc.id}>
                        <TableRow>
                            <TableCell className="w-auto ">{sc.subject}</TableCell>
                            <TableCell className="w-auto  text-[11px]">{sc.date}</TableCell>
                            <TableCell className="w-auto  text-[11px]">{sc.start_time}-{sc.end_time}</TableCell>
                            <TableCell>{sc.section.name}</TableCell>
                        </TableRow>
                    </TableBody>
                    :""} 
                </>
            )
        )
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
                        <SelectItem className="text-sm text-[#242F5B] hover:bg-[#bce9fc]" value={room.id}> {inputs == sections ? room.name : inputs == rooms ? `${room.name} - ${room.category?.category}` : `Schedule[${room.id}] - ${room.date}`} </SelectItem>
                    )}
                </SelectContent>
            </Select>
        </>
        )
    }
    return (

        <div className=" justify-center items-center flex flex-1 flex-wrap gap-5 py-20 ">
            {teachers.map(t => (
                <div>
                    <Card key={t.id}>
                        {user?.map(u => u.role_id == "admin" ? <div className="relative top-0">
                            <AdminPowers teacherId={t.id} admin={token} Teacher={t} Show={show} UpdSched={() => replaceSchedule()} setShow={setshow}
                                SelectForSections={selectForAll("Section:", sections, setSection, "Section")}
                                SelectForRooms={selectForAll("Room:", rooms, setRoom, "Room")}
                                SelectForSched={selectForAll("Schedule:", t.schedules, setSched, "Schedule")}
                            />
                        </div> : "")}
                        <CardHeader className="border-[#242F5B] border-2 rounded-t-lg w-100 h-[80px] bg-[#242F5B]">
                            <CardTitle className="font-normal text-[22px] font-[NiramitReg] text-[#ffffff] text-center">{t.name}</CardTitle>
                            <CardDescription className="font-[NiramitReg]  text-center text-[#0F1A42]">{t.subject}</CardDescription>
                        </CardHeader>

                        <CardContent style={{ maxHeight: "175px" }} className="border-[#242F5B] border-2 w-90 h-[400px] bg-[#ffffff] rounded-b-lg overflow-scroll no-scrollbar">
                            {t.schedules != "" ?
                                <>
                                    <Table className="text-[12px] w-[400px] font-[NiramitReg] text-[#11172E]">
                                        <TableRow>
                                            <TableHead>Monday</TableHead>
                                        </TableRow>
                                        {Filter(t, "Monday")}
                                        <TableRow>
                                            <TableHead>Tuesday</TableHead>
                                        </TableRow>
                                        {Filter(t, "Tuesday")}
                                        <TableRow>
                                            <TableHead>Wednesday</TableHead>
                                        </TableRow>
                                        {Filter(t, "Wednesday")}
                                        <TableRow>
                                            <TableHead>Thursday</TableHead>
                                        </TableRow>
                                        {Filter(t, "Thursday")}
                                        <TableRow>
                                            <TableHead>Friday</TableHead>
                                        </TableRow>
                                        {Filter(t, "Friday")}
                                        <TableRow>
                                            <TableHead>Saturday</TableHead>
                                        </TableRow>
                                        {Filter(t, "Saturday")}
                                    </Table>
                                </> :
                                <div className="w-[400px] h-1 font-[NiramitReg] text-5xl text-[#11172E]/30">
                                    <p className="flex justify-center items-center pt-12">No Schedule</p>
                                </div>
                            }
                        </CardContent>
                    </Card>
                </div>
            ))}

            {user ? user.map(u => u.role_id == "admin" ?
                <div>
                    <Dialog open={open} onOpenChange={setopen} className="rounded-full w-[500px] z-0" >
                        <DialogTrigger>
                            <img src={Add} className="w-[50px] mt-2 h-[50px] mr-[10px] mb-[10px] fixed bottom-0 right-0" />
                        </DialogTrigger>
                        <DialogContent className="bg-[#11172E] font-[NiramitReg] text-[#fff]">
                            <DialogTitle className="font-thin  p-0 h-[40px] w-[300px]  ml-[30px]">Edit Room Name</DialogTitle>
                            <DialogDescription>
                                Add a Teacher
                            </DialogDescription>

                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label>Add a Teacher by Name:</Label>
                                <Input type="text" id="name" className="bg-white text-[#000]" />
                                <Label>Add their Courses/Major:</Label>
                                <Input type="text" id="techCourse" className="bg-white text-[#000]" />
                            </div>

                            <div className=" mt-[15px] flex flex-wrap gap-[60px] border-t-[1px] border-[#fff]/40">
                                <Button onClick={() => setopen(false)} className=" w-[200px]  font-[NiramitReg] hover:text-[15px] border-white bg-transparent hover:bg-transparent hover:font-bold">Cancel</Button>
                                <Button onClick={() => addTeacher()} className=" w-[200px]  font-[NiramitReg] hover:text-[15px] border-white bg-transparent hover:bg-transparent hover:font-bold"> Add Teacher</Button>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
                : "") : ""}
        </div>
    )
}
export default Teacher