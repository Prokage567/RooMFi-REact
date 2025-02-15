
import { React, useEffect, useState } from 'react'
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
import { useCookies } from 'react-cookie'
import { getTeacher } from '../api/teacher.js';
import { getSched } from '../api/sched.js'

function Teacher() {
    const [cookies, setCookie, removeCookie] = useCookies()
    const token = cookies.token
    const [ie, setTeachers] = useState([])
    useEffect(() => {
        console.log(token)
        getTeacher([token]).then(res => {
            if (res?.ok) {
                setTeachers(res.data)
            }
        }
        )
    }, [])

    return (
        <div className='justify-center items-center flex flex-1 flex-wrap gap-5 py-20 '>
            {ie.map(i => (
                <div>
                    <Card key={i.id} className=''>
                        <CardHeader className="border-[#BFAC88] border-2 rounded-t-lg w-100 h-[70px] bg-[#BFAC88]">
                            <CardTitle className="font-normal text-[22px] font-[NiramitReg] text-[#0F1A42] text-center">{i.name}</CardTitle>
                            <CardDescription className="font-[NiramitReg] text-center text-[#0F1A42]">{i.technology_course}</CardDescription>
                        </CardHeader>

                        <CardContent style={{ maxHeight: '175px' }} className="border-[#BFAC88] border-2 w-90 bg-[#ffffff] rounded-b-lg overflow-scroll no-scrollbar">
                            <Table className="text-[12px] w-[300px] font-[NiramitReg] text-[#11172E]">
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className=" font-semibold text-[15px]"></TableHead>
                                        <TableHead className="w-[200px]"></TableHead>
                                        <TableHead className="w-[160px]"></TableHead>
                                    </TableRow>
                                </TableHeader>
                                {i?.schedules?.map(q => (
                                    <TableBody key={q.id}>
                                        <TableRow>
                                            <TableCell className="w-[20px]">{q.subject}</TableCell>
                                            <TableCell className="w-[300px]">7:00am - 11:00pm</TableCell>
                                            <TableCell>{q.section.name}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                            )
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