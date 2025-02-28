import { React, useContext, useEffect, useState } from "react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../components/ui/accordion.jsx"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "../components/ui/navigation-menu.jsx"
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
import AdminPowers from "../components/AdminPowers/AdminEditDeleteTeacher.jsx"
import { useCookies } from "react-cookie"
import { getTeacher, getTeacherById, searchTeacher } from "../api/teacher.js"
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
import { Link, useParams } from "react-router-dom"

function Teacher() {
    dayjs.extend(weekday);
    const { id } = useParams()
    const { user, Teachers, getTeachers, Sections, getSections, Rooms, refreshRooms } = useContext(AuthContext)
    const [cookies] = useCookies()
    const token = cookies.token
    const [show, setshow] = useState(false)
    const [open, setopen] = useState(false)
    const [room, setRoom] = useState("")
    const [section, setSection] = useState("")
    const [schedule, setSched] = useState("")
    const [searchInfo, setSearchInfo] = useState([])

    const onHandleClick = () => {
        const keyword = $("#input").val()
        searchTeacher(keyword).then(res => {
            setSearchInfo(res.data)
        })
    }
    const addTeacher = () => {
        const name = $("#name").val().toUpperCase()
        const tech_Course = $("#techCourse").val().toUpperCase()
        getTeacherById(token, "POST", { name: name, subject: tech_Course }).then(res => {
            if (res?.ok) {
                toast.success("Added a Teacher!")
                setopen(false)
                getTeachers
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
                getTeachers
            }
        })
    }

    useEffect(() => {
        getTeachers
        getSections
        refreshRooms
        document.body.style.background = "white"
    }, [id])
    const dayOfweeks = (day) => {
        return (<>
            <TableHeader className="text-[23px] bg-[#90E0FF]/50">
                <TableHead >{day}</TableHead>
                <TableHead ></TableHead>
                <TableHead ></TableHead>
                <TableHead ></TableHead>
                <TableHead ></TableHead>
            </TableHeader>
            <TableHeader>
                <TableRow>
                    <TableCell className="w-[250px] text-[20px]  text-black/40" >Subject</TableCell>
                    <TableCell className="w-[200px] text-[20px]  text-black/40 indent-2">Room</TableCell>
                    <TableCell className="w-[200px] text-[20px] text-black/40">Date</TableCell>
                    <TableCell className="w-[250px] text-[20px]  text-black/40">Time</TableCell>
                    <TableCell className="w-[200px] text-[20px]  text-black/40">Section</TableCell>
                </TableRow>
            </TableHeader>
        </>

        )
    }
    const Filter = (t, input) => {
        return (
            t?.schedules?.filter(sc => sc.day === `${input}`).map(sc =>
                <>
                    {sc.date >= dayjs().weekday(1).format("YYYY-MM-DD") && sc.date <= dayjs().weekday(6).format("YYYY-MM-DD") ?
                        < >
                            <TableRow>
                                <TableCell className="w-auto text-[15px]">{sc.subject}</TableCell>
                                <TableCell className="w-auto text-[15px] indent-2">{[sc.room].filter(rc=> rc.id==sc.room_id).map(rc=>rc.name)}</TableCell>
                                <TableCell className="w-auto text-[15px]">{sc.date}</TableCell>
                                <TableCell className="w-auto  text-[15px]">{sc.start_time}-{sc.end_time}</TableCell>
                                <TableCell className="w-auto text-[15px]">{sc.section.name}</TableCell>
                            </TableRow>
                        </>
                        : ""}
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
                        <SelectItem className="text-sm text-[#242F5B] hover:bg-[#bce9fc]" value={room.id}> {inputs == Sections ? room.name : inputs == Rooms ? `${room.name} - ${room.category?.category}` : `Schedule[${room.id}] - ${room.date}`} </SelectItem>
                    )}
                </SelectContent>
            </Select>
        </>
        )
    }
    return (<>
        {user ? user.map(u => u.role_id == "admin" ?
            <div>
                <Dialog open={open} onOpenChange={setopen} className="rounded-full w-[500px] z-0" >
                    <DialogTrigger>
                        <img src={Add} className="w-[50px] mt-2 h-[50px] mr-[10px] mb-[10px] fixed bottom-0 z-50 right-0" />
                    </DialogTrigger>
                    <DialogContent className="bg-[#11172E] font-[NiramitReg] text-[#fff]">
                        <DialogTitle className="font-thin h-4 w-[250px] border">Edit Room Name</DialogTitle>
                        <DialogDescription>
                            Add a Teacher
                        </DialogDescription>

                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label>Add a Teacher by Name:</Label>
                            <Input type="text" id="name" className="bg-white text-[#000]" />
                            <Label>Add their Courses/Major:</Label>
                            <Input type="text" id="techCourse" className="bg-white text-[#000]" />
                        </div>

                        <div className=" mt-[15px] flex border w-[350px] flex-wrap  border-t-[1px] border-[#fff]/40">
                            <Button onClick={() => setopen(false)} className=" w-[200px]  font-[NiramitReg] hover:text-[15px] border-white bg-transparent hover:bg-transparent hover:font-bold">Cancel</Button>
                            <Button onClick={() => addTeacher()} className=" w-[200px]  font-[NiramitReg] hover:text-[15px] border-white bg-transparent hover:bg-transparent hover:font-bold"> Add Teacher</Button>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
            : "") : ""}

        <div className="relative">
            <div className="sticky top-24 z-10 ml-10 ">

                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>

                            <NavigationMenuTrigger className="w-[150px] text-[20px] border bg-[#1f2950] text-[#fff]">
                                Teachers
                            </NavigationMenuTrigger>

                            <NavigationMenuContent >

                                <div className="">
                                    <div className="w-auto flex flex-col overflow-y-auto no-scrollbar justify-center items-start p-2 gap-2">

                                        <div className="hover:bg-[#90E0FF]/30 p-2">
                                            <Input id="input" symbol2={true} type="text" placeholder="Search teacher"
                                                className="h-[25px] relative left-4 border-transparent py-2  w-[200px] focus-visible:ring-0 shadow-transparent " onChange={() => onHandleClick()} />
                                        </div>

                                        {searchInfo?.map(sc => Teachers.filter(t => t.id === sc.id).map(t =>
                                        <div className="h-auto p-2 w-[210px] break-words hover:bg-[#90E0FF]/40">
                                            <Link to={`./${t.id}`}>
                                                    {t.name}
                                            </Link >
                                                </div>
                                        ))}
                                    </div>
                                </div>
                            </NavigationMenuContent>

                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            <div className="border  mr-4 mt-4 ml-10">
                <Table>
                    {Teachers.filter(t => t.id == id)?.map(t => (
                        <>
                            <TableHeader>
                                <TableRow className="bg-[#242F5B] font-light text-[#fff] text-[18px] ">
                                    <TableCell className="w-auto">
                                        {t.name}
                                    </TableCell>
                                    <TableHead className="">
                                        {t.subject}
                                    </TableHead>
                                    <TableHead></TableHead>
                                    <TableHead></TableHead>
                                    <TableHead></TableHead>
                                </TableRow>
                            </TableHeader>
                            {dayOfweeks("Monday")}
                            {Filter(t, "Monday")}
                            {dayOfweeks("Tuesday")}
                            {Filter(t, "Tuesday")}
                            {dayOfweeks("Wednesday")}
                            {Filter(t, "Wednesday")}
                            {dayOfweeks("Thursday")}
                            {Filter(t, "Thursday")}
                            {dayOfweeks("Friday")}
                            {Filter(t, "Friday")}
                            {dayOfweeks("Saturday")}
                            {Filter(t, "Saturday")}
                        </>
                    )
                    )}
                </Table>
            </div>
        </div >
    </>
    )
}
export default Teacher