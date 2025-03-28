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
        return (setSearchInfo(Teachers.filter(teacher => teacher.name.toLowerCase().includes(keyword))))
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
        getTeachers()
        getSections()
        refreshRooms()
        document.body.style.background = "white"
    }, [id])
    const dayOfweeks = (day) => {
        return (<>
            <TableRow className="text-[23px] bg-[#90E0FF]/50">
                <TableHead >{day}</TableHead>
                <TableHead ></TableHead>
                <TableHead ></TableHead>
                <TableHead ></TableHead>
                <TableHead ></TableHead>
            </TableRow>
            <TableRow>
                <TableHead className="w-[200px] text-[20px]  text-black/40" >Subject</TableHead>
                <TableHead className="w-[200px] text-[20px]  text-black/40 indent-2">Room</TableHead>
                <TableHead className="w-[200px] text-[20px] text-black/40">Date</TableHead>
                <TableHead className="w-[250px] text-[20px]  text-black/40">Time</TableHead>
                <TableHead className="w-[200px] text-[20px]  text-black/40">Section</TableHead>
            </TableRow>
        </>

        )
    }
    const Filter = (t, input) => {
        return (
            t?.schedules?.filter(sc => sc.day === `${input}`).map(sc =>
                sc.date >= dayjs().weekday(1).format("YYYY-MM-DD") && sc.date <= dayjs().weekday(6).format("YYYY-MM-DD") ?
                    <TableRow>
                        <TableCell className="w-[250px] text-[18px]">{sc.subject}</TableCell>
                        <TableCell className="w-[250px] text-[15px] indent-2">{[sc.room].filter(rc => rc.id == sc.room_id).map(rc => rc.name)}</TableCell>
                        <TableCell className="w-[250px] text-[15px]">{sc.date}</TableCell>
                        <TableCell className="w-[250px] text-[15px]">{sc.start_time}-{sc.end_time}</TableCell>
                        <TableCell className="w-[250px] text-[18px]">{sc.section.name}</TableCell>
                    </TableRow>
                    : ""
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
        <div className="fixed top-24 left-60 z-10 ">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="w-[150px] text-[20px] border bg-[#1f2950] text-[#fff]">
                            Teachers
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div className="w-auto flex flex-col overflow-y-auto no-scrollbar justify-center items-start p-2 gap-2">
                                <div className="hover:bg-[#90E0FF]/30 p-2">
                                    <Input id="input" symbol2={true} type="text" placeholder="Search teacher"
                                        className="h-[25px] relative left-4 border-transparent py-2  w-[200px] focus-visible:ring-0 shadow-transparent " onChange={() => onHandleClick()} />
                                </div>
                                {searchInfo?.map(sc => Teachers.filter(t => t.id === sc.id).map(t =>
                                    <Link to={`./${t.id}`}>
                                        <div className="h-auto p-2 w-[210px] break-words hover:bg-[#90E0FF]/40">
                                            {t.name}
                                        </div>
                                    </Link >
                                ))}
                            </div>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>

        <div className="relative h-[80vh] top-14 px-2 pt-5">
            {id ? Teachers.filter(t => t.id == id).map(t => (
                <Table>
                    <>
                        <TableHeader>
                            <TableRow className="bg-[#242F5B] font-light text-[#fff] text-[18px] ">
                                <TableHead>
                                    {t.name}
                                </TableHead>
                                <TableHead>
                                    {t.subject}
                                </TableHead>
                                <TableHead></TableHead>
                                <TableHead></TableHead>
                                <TableHead></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
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
                        </TableBody>
                    </>
                </Table>
            )
            ) : Teachers.map(t => (
                <Table>
                    <TableHeader>
                        <TableRow className="bg-[#242F5B] font-light text-[#fff] text-[18px] ">
                            <TableHead>
                                {t.name}
                            </TableHead>
                            <TableHead>
                                {t.subject}
                            </TableHead>
                            <TableHead></TableHead>
                            <TableHead></TableHead>
                            <TableHead></TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
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
                        <TableRow>
                            <TableCell className="opacity-0">space</TableCell>
                        </TableRow>
                    </TableBody>
                    {user?.map(u =>
                        u.role_id == "admin" ?
                            
                                [t].map(t => t.schedules.filter(tc => tc.date >= dayjs().weekday(1).format("YYYY-MM-DD") && tc.date <= dayjs().weekday(6).format("YYYY-MM-DD")).map(tc =>
                                    <AdminPowers teacher={t.id} admin={token} Teacher={t} UpdSched={replaceSchedule} setShow={setshow} Show={show} SelectForSections={selectForAll("Sections", Sections, setSection, "Select a Section")} SelectForRooms={selectForAll("Rooms", Rooms, setRoom, "Select a Room")} SelectForSched={selectForAll("Schedule", t.schedules, setSched, "Select a Schedule")} />
                                ))
                            : ""
                    )}
                </Table>
            )
            )}
        </div >
    </>
    )
}
export default Teacher