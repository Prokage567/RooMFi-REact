import dayjs from "dayjs"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "./table.jsx"
import weekday from 'dayjs/plugin/weekday'
import { AuthContext } from "../../context/context.jsx"
import { useContext } from "react"
import { Input } from "./input.jsx"
import $ from "jquery"
export default function WeekView({ schedules, showDialogue }) {
    dayjs.extend(weekday)
    const { Sections, Rooms, Teachers } = useContext(AuthContext)
    const scId = $("#name").val()
    console.log()
    const dayOfweeks = (input, date) => {
        return (<>
            <TableHeader className={`${showDialogue ? "bg-[#2c4f7c]" : "bg-[#242F5B]"} text-white text-[18px]`}>
                <TableRow >
                    <TableHead>{Rooms.filter(r => r.id == scId).map(rc => rc.name)}</TableHead>
                    <TableHead></TableHead>
                    <TableHead></TableHead>
                    <TableHead>{date}</TableHead>
                </TableRow>
            </TableHeader>
            <TableHeader className={`${showDialogue ? "bg-[#fff] " : "bg-[#C7EFFF]"} h-[10px]  `}>
                <TableRow >
                    <TableHead>{input}</TableHead>
                    <TableHead></TableHead>
                    <TableHead></TableHead>
                    <TableHead></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow className={`${showDialogue ? "text-white/60" : "text-black/60 "}`}>
                    <TableCell className="text-center border-b-[2px] w-[150px]">{showDialogue ? "Section" : "Room NO."}</TableCell>
                    <TableCell className="text-center border-b-[2px]">Subject</TableCell>
                    <TableCell className="text-center border-b-[2px] w-[150px]">Time</TableCell>
                    <TableCell className="text-center border-b-[2px] ">Teacher</TableCell>
                </TableRow>
            </TableBody>
            {schedules?.filter(x => x.date >= dayjs().weekday(1).format("YYYY-MM-DD") && x.date <= dayjs().weekday(6).format("YYYY-MM-DD"))?.map(x =>
                x.day === input && x.date === date ?
                    <TableBody>
                        <TableRow className={`${showDialogue ? "text-white " : "text-black"}`}>
                            {x.room?.name ?
                                <>
                                    <TableCell className="text-center ">{x.room.name}</TableCell>
                                    <TableCell className="text-center">{x.subject}</TableCell>
                                    <TableCell className="text-center">{`${x.start_time} - ${x.end_time}`}</TableCell>
                                    <TableCell className="text-center">{x.teacher.name}</TableCell>
                                </>
                                : <>
                                    <TableCell className="text-center ">{Sections.filter(s => x.section_id === s.id).map(s => s.name)}</TableCell>
                                    <TableCell className="text-center">{x.subject}</TableCell>
                                    <TableCell className="text-center">{`${x.start_time} - ${x.end_time}`}</TableCell>
                                    <TableCell className="text-center">{Teachers.filter(t => x.teacher_id === t.id).map(t => t.name)}</TableCell>
                                </>}
                            <Input type="hidden" id="name" value={x.room_id} />
                        </TableRow>
                    </TableBody>
                    : ""
            )}
        </>

        )
    }
    return (
        <div className="mt-14 overflow-auto no-scrollbar">

            <Table>
                {dayOfweeks("Monday", dayjs().weekday(1).format("YYYY-MM-DD"))}
                {dayOfweeks("Tuesday", dayjs().weekday(2).format("YYYY-MM-DD"))}
                {dayOfweeks("Wednesday", dayjs().weekday(3).format("YYYY-MM-DD"))}
                {dayOfweeks("Thursday", dayjs().weekday(4).format("YYYY-MM-DD"))}
                {dayOfweeks("Friday", dayjs().weekday(5).format("YYYY-MM-DD"))}
                {dayOfweeks("Saturday", dayjs().weekday(6).format("YYYY-MM-DD"))}
            </Table>

        </div>
    )
}

