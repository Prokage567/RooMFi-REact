
import { React, useEffect, useState } from "react"
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
import { useCookies } from "react-cookie"
import { getTeacher } from "../api/teacher.js";

function Teacher() {
    const [cookies, setCookie, removeCookie] = useCookies()
    const token = cookies.token
    const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    const [ie, setTeachers] = useState([])
    useEffect(() => {
        getTeacher([token]).then(res => {
            if (res?.ok) {
                setTeachers(res.data)
            }
        }
        )
    }, [])

    return (
        <div className="justify-center items-center flex flex-1 flex-wrap gap-5 py-20 ">
            {ie.map(i => (
                <div>
                    <Card key={i.id}>
                        <CardHeader className="border-[#BFAC88] border-2 rounded-t-lg w-100 h-[70px] bg-[#BFAC88]">
                            <CardTitle className="font-normal text-[22px] font-[NiramitReg] text-[#0F1A42] text-center">{i.name}</CardTitle>
                            <CardDescription className="font-[NiramitReg] text-center text-[#0F1A42]">{i.technology_course}</CardDescription>
                        </CardHeader>

                        <CardContent style={{ maxHeight: "175px" }} className="border-[#BFAC88] border-2 w-90 bg-[#ffffff] rounded-b-lg overflow-scroll no-scrollbar">
                            <Table className="text-[12px] w-[300px] font-[NiramitReg] text-[#11172E]">
                                {i?.schedules?.map(q => (
                                    <>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead className=" font-semibold text-[12px]">{days[q.day-1]}</TableHead>
                                                <TableHead className="font-semibold text-[12px] w-[180px]"></TableHead>
                                                <TableHead className="font-semibold text-[12px] w-[180px]">{q.date}</TableHead>
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
        </div>
    )
}
export default Teacher