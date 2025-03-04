import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "./table.jsx"
export default function WeekView() {
    return (
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
    )
}

