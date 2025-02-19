
import { React, useContext, useEffect, useState } from "react"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../components/ui/card.jsx"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../components/ui/table.jsx"
import AdminPowers from "../components/AdminPowers/AdminEditDeleteRooms copy.jsx"
import PopUpCalendar from "../components/popUpCalendar.jsx"
import { useCookies } from "react-cookie"
import { getTeacher, getTeacherById } from "../api/teacher.js";
import dayjs from "dayjs";
import { AuthContext } from "../context/context.jsx";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogDescription,
} from "@/components/ui/dialog"
import Add from "../assets/images/add.svg"
import { Label } from "@radix-ui/react-label";
import { Input } from "../components/ui/input.jsx";
import { DialogTitle } from "@mui/material";
import { Button } from '../components/ui/button.jsx'
import { toast } from 'react-toastify';
import $ from "jquery"


function Teacher() {
    const { user } = useContext(AuthContext)
    const [cookies] = useCookies()
    const token = cookies.token
    const [teachers, setTeachers] = useState([])
    const [teacherSched, setTeacherSched] = useState([])
    const [show, setshow] = useState(false)
    const [open, setopen] = useState(false)
    const [days, setDays] = useState("")
    const [room, setRoom] = useState("")

    const addTeacher = () => {
        const name = $("#name").val().toUpperCase()
        const tech_Course = $("#techCourse").val().toUpperCase()
        getTeacherById(token, "POST", { name: name, technology_course: tech_Course }).then(res => {
            if (res?.ok) {
                setTeacherSched(res.data)
                toast.success("Added a Teacher!")
                setopen(false)
            }
        }
        )
    }
    const replaceSchedule = () => {
        const id = $("#id").val()
        const teacher1 = teacher.toString()
        const room1 = room.toString()
        const subject = $("#subject").val()
        const day = days.toString()
        const endTime = $("#endTime").val()
        const startTime = $("#strTime").val()
        const endDate = $("#endDate").val()
        const startDate = $("#strDate").val()
        const section = $("#section")

        postSched(id, token, { day: day, subject: subject, start_time: startTime, end_time: endTime, start_date: startDate, end_date: endDate, teacher_id: teacher1, section_id: section, room_id: room1 }, "PATCH").then(res => {
            console.log(res)
            if (res?.ok) {
                toast.success("Schedule has been changed!")
            }
        })
    }
    const [date, setDate] = useState({
        from: dayjs("2025-01-20").toDate(),
        to: dayjs("2025-01-20").add(20, "days").toDate(),
    })

    useEffect(() => {
        getTeacher([token]).then(res => {
            if (res?.ok) {
                setTeachers(res.data)
            }
        }
        )

    }, [])

    return (

        <div className=" justify-center items-center flex flex-1 flex-wrap gap-5 py-20 ">
            {teachers.map(t => (
                <div>
                    <Card key={t.id}>
                        <div className="relative top-0">
                            <AdminPowers teacher={t.id} admin={token} Teacher={t} />
                        </div>
                        <CardHeader className="border-[#BFAC88] border-2 rounded-t-lg w-100 h-[80px] bg-[#BFAC88]">
                            <CardTitle className="font-normal text-[22px] font-[NiramitReg] text-[#0F1A42] text-center">{t.name}</CardTitle>
                            <CardDescription className="font-[NiramitReg]  text-center text-[#0F1A42]">{t.technology_course}</CardDescription>
                        </CardHeader>

                        <CardContent style={{ maxHeight: "175px" }} className="border-[#BFAC88] border-2 w-90 bg-[#ffffff] rounded-b-lg overflow-scroll no-scrollbar">
                            <Table className="text-[12px] w-[300px] font-[NiramitReg] text-[#11172E]">
                                {t?.schedules?.map(q => (
                                    <>
                                        <TableHeader>
                                            <TableHead className=" font-semibold text-[12px]">{q.day}</TableHead>
                                            <TableRow>
                                                <TableHead className="font-semibold text-[12px] w-[180px]">Subject</TableHead>
                                                <TableHead className="font-semibold text-[12px] w-[180px]">{q.date}</TableHead>
                                                <TableHead className="font-semibold text-[12px] w-[180px]">Section</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody key={q.id}>
                                            <TableRow>
                                                <TableCell className="w-[20px]">{q.subject}</TableCell>
                                                <TableCell className="w-[300px]">{q.start_time}-{q.end_time}</TableCell>
                                                <TableCell>{q.section.name}</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </>)
                                )
                                }
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            ))}

            {user != null ? <>
                {user.map(u =>
                    <>
                        {u.role_id == "admin" ? <>
                            <div>
                                <Dialog open={open} onOpenChange={setopen} className="rounded-full w-[500px] z-0" >
                                    <DialogTrigger>
                                        <img src={Add} className="w-[50px] mt-2 h-[50px] mr-[10px] mb-[10px] fixed bottom-0 right-0" />
                                    </DialogTrigger>

                                    <DialogContent className="bg-[#11172E] font-[NiramitReg] text-[#fff]">
                                        {show == 1 ? <>
                                            <DialogTitle className="font-thin p-0 h-[40px] w-[300px]  ml-[30px]">Edit Schedule</DialogTitle>
                                            <DialogDescription>
                                                Replace a Schedule
                                            </DialogDescription>

                                            <div className="grid w-full max-w-sm items-center gap-1.5">
                                                <Label htmlFor="picture">Update a Teacher's Schedule:</Label>
                                                <Input id="picture" type="text" className="bg-white text-[#000] placeholder:hello " />
                                            </div>
                                            <PopUpCalendar />
                                        </>
                                            : <>
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
                                            </>}

                                        <div className=" mt-[15px] flex flex-wrap gap-[60px] border-t-[1px] border-[#fff]/40">
                                            <Button onClick={() => addTeacher()} className=" w-[200px]  font-[NiramitReg] hover:text-[15px] border-white bg-transparent hover:bg-transparent hover:font-bold">Save</Button>
                                            {show ? <Button onClick={() => setshow(0)} className=" w-[200px]  font-[NiramitReg] hover:text-[15px] border-white bg-transparent hover:bg-transparent hover:font-bold"> Add Schedule</Button> : <Button onClick={() => setshow(1)} className=" w-[200px]  font-[NiramitReg] hover:text-[15px] border-white bg-transparent hover:bg-transparent hover:font-bold"> Add Teacher</Button>}
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </> : ""}
                    </>
                )}</> : ""}
        </div>
    )
}
export default Teacher