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
export default function WeekView({ schedules }) {
    dayjs.extend(weekday)
    return (
        <div className="mt-10 border border-e-red-200  h-96 w-96">
            {schedules?.filter(x => x.date >= dayjs().weekday(1).format("YYYY-MM-DD") && x.date <= dayjs().weekday(6).format("YYYY-MM-DD"))?.map(x => (
                <div key={x.id} className=" ml-1 w-[140px]   text-secondary mb-1 text-[11px] font-[NiramitReg]  ">
                    <div className="w-[140px] bg-[#90E0FF]  hover:rounded-sm  relative">
                        <div className=" -ml-[6px] w-[140px] text-[#0c146e]">
                            <div className="z-20 absolute ml-[6px] -mt-[12px]">


                            </div>
                            {x.room.name} | {x.start_time} - {x.end_time}
                        </div>
                    </div>


                    <div className="flex flex-wrap italic  w-[130px] text-[#0c146e] ml-1">
                        <div> {x.teacher.name} | </div>
                        <div className="ml-1"> {x.subject}</div>
                    </div>

                </div>
            ))}
        <div className="mt-14   overflow-auto no-scrollbar  h-[530px] w-[1200px]">
            <Table>
                <TableHeader className="bg-[#242F5B] text-white text-[18px] ">
                    <TableRow >

                        <TableHead>CPROG</TableHead>
                        <TableHead></TableHead>
                        <TableHead></TableHead>
                        <TableHead className=" text-right  ">11/2/25</TableHead>
                        
                    </TableRow>
                </TableHeader>

                <TableHeader className=" h-[10px] bg-[#C7EFFF]  ">
                    <TableRow >
                    <TableHead className=" ">Monday</TableHead>
                    <TableHead></TableHead>
                    <TableHead></TableHead>
                    <TableHead></TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow className="text-black/60 "> 
                    <TableCell className="text-center border-b-[2px]  w-[150px]">Room NO.</TableCell>
                    <TableCell className="text-center border-b-[2px] ">Subject</TableCell>
                    <TableCell className="text-center border-b-[2px] w-[150px]">Time</TableCell>
                    <TableCell className="text-center border-b-[2px] ">Teacher</TableCell>
                    </TableRow>
                </TableBody>

                <TableBody>
                    <TableRow > 
                    <TableCell className="text-center ">202</TableCell>
                    <TableCell className="text-center">Araling Panlipunan</TableCell>
                    <TableCell className="text-center">11:00am-11:00pm</TableCell>
                    <TableCell className="text-center">Aladin P. Silvestre</TableCell>
                    </TableRow>
                    <TableRow > 
                    <TableCell className="text-center ">202</TableCell>
                    <TableCell className="text-center">Araling Panlipunan</TableCell>
                    <TableCell className="text-center">11:00am-11:00pm</TableCell>
                    <TableCell className="text-center">Aladin P. Silvestre</TableCell>
                    </TableRow>
                    <TableRow > 
                    <TableCell className="text-center ">202</TableCell>
                    <TableCell className="text-center">Araling Panlipunan</TableCell>
                    <TableCell className="text-center">11:00am-11:00pm</TableCell>
                    <TableCell className="text-center">Aladin P. Silvestre</TableCell>
                    </TableRow>
                </TableBody>

      
                <TableHeader className=" h-[10px] bg-[#C7EFFF]  ">
                    <TableRow >
                    <TableHead className=" ">Tuesday</TableHead>
                    <TableHead></TableHead>
                    <TableHead></TableHead>
                    <TableHead></TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow className="text-black/60 "> 
                    <TableCell className="text-center border-b-[2px]  w-[150px]">Room NO.</TableCell>
                    <TableCell className="text-center border-b-[2px] ">Subject</TableCell>
                    <TableCell className="text-center border-b-[2px] w-[150px]">Time</TableCell>
                    <TableCell className="text-center border-b-[2px] ">Teacher</TableCell>
                    </TableRow>
                    
                </TableBody>

                <TableBody>
                    <TableRow > 
                    <TableCell className="text-center ">202</TableCell>
                    <TableCell className="text-center">Araling Panlipunan</TableCell>
                    <TableCell className="text-center">11:00am-11:00pm</TableCell>
                    <TableCell className="text-center">Aladin P. Silvestre</TableCell>
                    </TableRow>
                    <TableRow > 
                    <TableCell className="text-center ">202</TableCell>
                    <TableCell className="text-center">Araling Panlipunan</TableCell>
                    <TableCell className="text-center">11:00am-11:00pm</TableCell>
                    <TableCell className="text-center">Aladin P. Silvestre</TableCell>
                    </TableRow>
                    <TableRow > 
                    <TableCell className="text-center ">202</TableCell>
                    <TableCell className="text-center">Araling Panlipunan</TableCell>
                    <TableCell className="text-center">11:00am-11:00pm</TableCell>
                    <TableCell className="text-center">Aladin P. Silvestre</TableCell>
                    </TableRow>
                </TableBody>

                <TableHeader className=" h-[10px] bg-[#C7EFFF]  ">
                    <TableRow >
                    <TableHead className=" ">Wednesday</TableHead>
                    <TableHead></TableHead>
                    <TableHead></TableHead>
                    <TableHead></TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow className="text-black/60 "> 
                    <TableCell className="text-center border-b-[2px]  w-[150px]">Room NO.</TableCell>
                    <TableCell className="text-center border-b-[2px] ">Subject</TableCell>
                    <TableCell className="text-center border-b-[2px] w-[150px]">Time</TableCell>
                    <TableCell className="text-center border-b-[2px] ">Teacher</TableCell>
                    </TableRow>
                </TableBody>

                <TableBody>
                    <TableRow > 
                    <TableCell className="text-center ">202</TableCell>
                    <TableCell className="text-center">Araling Panlipunan</TableCell>
                    <TableCell className="text-center">11:00am-11:00pm</TableCell>
                    <TableCell className="text-center">Aladin P. Silvestre</TableCell>
                    </TableRow>
                </TableBody>

                <TableHeader className=" h-[10px] bg-[#C7EFFF]  ">
                    <TableRow >
                    <TableHead className=" ">Thursday</TableHead>
                    <TableHead></TableHead>
                    <TableHead></TableHead>
                    <TableHead></TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow className="text-black/60 "> 
                    <TableCell className="text-center border-b-[2px]  w-[150px]">Room NO.</TableCell>
                    <TableCell className="text-center border-b-[2px] ">Subject</TableCell>
                    <TableCell className="text-center border-b-[2px] w-[150px]">Time</TableCell>
                    <TableCell className="text-center border-b-[2px] ">Teacher</TableCell>
                    </TableRow>
                </TableBody>

                <TableBody>
                    <TableRow > 
                    <TableCell className="text-center ">202</TableCell>
                    <TableCell className="text-center">Araling Panlipunan</TableCell>
                    <TableCell className="text-center">11:00am-11:00pm</TableCell>
                    <TableCell className="text-center">Aladin P. Silvestre</TableCell>
                    </TableRow>
                </TableBody>

                <TableHeader className=" h-[10px] bg-[#C7EFFF]  ">
                    <TableRow >
                    <TableHead className=" ">Friday</TableHead>
                    <TableHead></TableHead>
                    <TableHead></TableHead>
                    <TableHead></TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow className="text-black/60 "> 
                    <TableCell className="text-center border-b-[2px]  w-[150px]">Room NO.</TableCell>
                    <TableCell className="text-center border-b-[2px] ">Subject</TableCell>
                    <TableCell className="text-center border-b-[2px] w-[150px]">Time</TableCell>
                    <TableCell className="text-center border-b-[2px] ">Teacher</TableCell>
                    </TableRow>
                </TableBody>

                <TableBody>
                    <TableRow > 
                    <TableCell className="text-center ">202</TableCell>
                    <TableCell className="text-center">Araling Panlipunan</TableCell>
                    <TableCell className="text-center">11:00am-11:00pm</TableCell>
                    <TableCell className="text-center">Aladin P. Silvestre</TableCell>
                    </TableRow>
                </TableBody>

                <TableHeader className=" h-[10px] bg-[#C7EFFF]  ">
                    <TableRow >
                    <TableHead className=" ">Saturday</TableHead>
                    <TableHead></TableHead>
                    <TableHead></TableHead>
                    <TableHead></TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    <TableRow className="text-black/60 "> 
                    <TableCell className="text-center border-b-[2px]  w-[150px]">Room NO.</TableCell>
                    <TableCell className="text-center border-b-[2px] ">Subject</TableCell>
                    <TableCell className="text-center border-b-[2px] w-[150px]">Time</TableCell>
                    <TableCell className="text-center border-b-[2px] ">Teacher</TableCell>
                    </TableRow>
                </TableBody>

                <TableBody>
                    <TableRow > 
                    <TableCell className="text-center ">202</TableCell>
                    <TableCell className="text-center">Araling Panlipunan</TableCell>
                    <TableCell className="text-center">11:00am-11:00pm</TableCell>
                    <TableCell className="text-center">Aladin P. Silvestre</TableCell>
                    </TableRow>
                </TableBody>
                </Table>

        </div>
        </div>
    )
}

