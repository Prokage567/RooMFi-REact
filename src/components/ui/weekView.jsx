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
export default function WeekView({ schedules, sectionName }) {
    dayjs.extend(weekday)
    const dayOfweeks = (input, date) => {
        return (<>
            <TableHeader className="bg-[#242F5B] text-white text-[18px] ">
                <TableRow >
                    <TableHead></TableHead>
                    <TableHead></TableHead>
                    <TableHead></TableHead>
                    <TableHead>{date}</TableHead>
                </TableRow>
            </TableHeader>
            <TableHeader className=" h-[10px] bg-[#C7EFFF]  ">
                <TableRow >
                    <TableHead>{input}</TableHead>
                    <TableHead></TableHead>
                    <TableHead></TableHead>
                    <TableHead></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow className="text-black/60 ">
                    <TableCell className="text-center border-b-[2px] w-[150px]">Room NO.</TableCell>
                    <TableCell className="text-center border-b-[2px]">Subject</TableCell>
                    <TableCell className="text-center border-b-[2px] w-[150px]">Time</TableCell>
                    <TableCell className="text-center border-b-[2px] ">Teacher</TableCell>
                </TableRow>
            </TableBody>
            {schedules?.filter(x => x.date >= dayjs().weekday(1).format("YYYY-MM-DD") && x.date <= dayjs().weekday(6).format("YYYY-MM-DD"))?.map(x =>
                x.day === input && x.date === date ?
                    <TableBody>
                        <TableRow>
                            <TableCell className="text-center ">{x.room.name}</TableCell>
                            <TableCell className="text-center">{x.subject}</TableCell>
                            <TableCell className="text-center">{x.time}</TableCell>
                            <TableCell className="text-center">{x.teacher.name}</TableCell>
                        </TableRow>
                    </TableBody>
                    : ""
            )}
        </>

        )
    }
    const Filter = (t, input) => {
        return (
            t?.schedules?.filter(sc => sc.day === `${input}`).map(sc => {
                sc.date >= dayjs().weekday(1).format("YYYY-MM-DD") && sc.date <= dayjs().weekday(6).format("YYYY-MM-DD") ?
                    <TableRow>
                        <TableCell className="w-[250px] text-[15px]">{sc.subject}</TableCell>
                        <TableCell className="w-[250px] text-[15px] indent-2">{[sc.room].filter(rc => rc.id == sc.room_id).map(rc => rc.name)}</TableCell>
                        <TableCell className="w-[250px] text-[15px]">{sc.date}</TableCell>
                        <TableCell className="w-[250px] text-[15px]">{sc.start_time}-{sc.end_time}</TableCell>
                        <TableCell className="w-[250px] text-[15px]">{sc.section.name}</TableCell>
                    </TableRow>
                    : ""
            }
            )
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

