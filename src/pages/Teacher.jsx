
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
  
import { getSched } from '../api/sched';
import withAuth from '../highOrdeerComponent/withAuth.jsx'
import { useCookies } from 'react-cookie'

function Teacher() {
    const [cookies, setCookie, removeCookie] = useCookies()
    const token = cookies.token
    const [ie, setTeachers] = useState([])
    useEffect(() => {
        console.log(token)
        getSched(token).then(res => {
            if (res?.ok) {
                setTeachers(res.data)
            }
        }
        )
    }, [])

    return (
        <>
            <div className='justify-center flex flex-wrap ml-5 mt-[-100px] gap-5 '>
                            {ie.map(i => (
                <div className='justify-center flex '>
                    <div className=" flex flex-wrap">
                        <Card className="mt-2 w-[300px] ">
                                <CardHeader className="border-[#BFAC88] border-2 rounded-t-lg w-100 bg-[#BFAC88]">
                                    <CardTitle style={{ margin: 0 }} className="font-normal mt-0 text-[18px] font-[NiramitReg] text-[#0F1A42] text-center">{i.name}</CardTitle>
                                    <CardDescription style={{ margin: 0 }} className="font-[NiramitReg] text-center text-[#0F1A42]">helloo hih</CardDescription>
                                </CardHeader>
                        
                            <CardContent style={{ maxHeight: '175px' }} className="border-[#BFAC88] border-2 w-100 bg-[#ffffff] rounded-b-lg overflow-scroll no-scrollbar">
                            <Table className="text-[12px] w-[280px] font-[NiramitReg]"> 
                                    <TableHeader>
                                        <TableRow>
                                        <TableHead className=" font-semibold text-[15px]">Monday</TableHead>
                                        <TableHead className="w-[200px] "></TableHead>
                                        <TableHead className="w-[160px]  "></TableHead>
                                        </TableRow>
                                    </TableHeader>

                                    <TableBody >
                                        <TableRow>
                                        <TableCell className="w-[20px]">Physical Education</TableCell>
                                        <TableCell className="w-[300px]">7:00am - 11:00pm</TableCell>
                                        <TableCell>CPROG</TableCell>
                                      
                                        </TableRow>
                                        <TableRow>
                                        <TableCell>Oracle</TableCell>
                                        <TableCell>7:00am - 11:00pm</TableCell>
                                        <TableCell>CPROG</TableCell>
                           
                                        </TableRow>
                                        <TableRow>
                                        <TableCell>PHP</TableCell>
                                        <TableCell>7:00am - 11:00pm</TableCell>
                                        <TableCell>CPROG</TableCell>
                                
                                        </TableRow>
                                        <TableRow>
                                        <TableCell className="font-medium">P.E</TableCell>
                                        <TableCell>7:00am - 11:00pm</TableCell>
                                        <TableCell>CPROG</TableCell>
                                    
                                        </TableRow>
                                    </TableBody>

                                    <TableHeader>
                                        <TableRow>
                                        <TableHead className="w-[100px]">Tuesday</TableHead>
                                        </TableRow>
                                    </TableHeader>

                                    <TableBody>
                                        <TableRow>
                                        <TableCell className="font-medium">PHP</TableCell>
                                        <TableCell>7:00am - 11:00pm</TableCell>
                                        <TableCell>CPROG</TableCell>
                                      
                                        </TableRow>
                                        <TableRow>
                                        <TableCell className="font-medium">Oracle</TableCell>
                                        <TableCell>7:00am - 11:00pm</TableCell>
                                        <TableCell>CPROG</TableCell>
                           
                                        </TableRow>
                                        <TableRow>
                                        <TableCell className="font-medium">PHP</TableCell>
                                        <TableCell>7:00am - 11:00pm</TableCell>
                                        <TableCell>CPROG</TableCell>
                                
                                        </TableRow>
                                        <TableRow>
                                        <TableCell className="font-medium">P.E</TableCell>
                                        <TableCell>7:00am - 11:00pm</TableCell>
                                        <TableCell>CPROG</TableCell>
                                    
                                        </TableRow>
                                    </TableBody>

                                    <TableHeader>
                                        <TableRow>
                                        <TableHead className="w-[100px]">Wednesday</TableHead>
                                        </TableRow>
                                    </TableHeader>

                                    <TableBody>
                                        <TableRow>
                                        <TableCell className="font-medium">PHP</TableCell>
                                        <TableCell>7:00am - 11:00pm</TableCell>
                                        <TableCell>CPROG</TableCell>
                                      
                                        </TableRow>
                                        <TableRow>
                                        <TableCell className="font-medium">Oracle</TableCell>
                                        <TableCell>7:00am - 11:00pm</TableCell>
                                        <TableCell>CPROG</TableCell>
                           
                                        </TableRow>
                                        <TableRow>
                                        <TableCell className="font-medium">PHP</TableCell>
                                        <TableCell>7:00am - 11:00pm</TableCell>
                                        <TableCell>CPROG</TableCell>
                                
                                        </TableRow>
                                        <TableRow>
                                        <TableCell className="font-medium">P.E</TableCell>
                                        <TableCell>7:00am - 11:00pm</TableCell>
                                        <TableCell>CPROG</TableCell>
                                    
                                        </TableRow>
                                    </TableBody>

                                    <TableHeader>
                                        <TableRow>
                                        <TableHead className="w-[100px]">Thursday</TableHead>
                                        </TableRow>
                                    </TableHeader>

                                    <TableBody>
                                        <TableRow>
                                        <TableCell className="font-medium">PHP</TableCell>
                                        <TableCell>7:00am - 11:00pm</TableCell>
                                        <TableCell>CPROG</TableCell>
                                      
                                        </TableRow>
                                        <TableRow>
                                        <TableCell className="font-medium">Oracle</TableCell>
                                        <TableCell>7:00am - 11:00pm</TableCell>
                                        <TableCell>CPROG</TableCell>
                           
                                        </TableRow>
                                        <TableRow>
                                        <TableCell className="font-medium">PHP</TableCell>
                                        <TableCell>7:00am - 11:00pm</TableCell>
                                        <TableCell>CPROG</TableCell>
                                
                                        </TableRow>
                                        <TableRow>
                                        <TableCell className="font-medium">P.E</TableCell>
                                        <TableCell>7:00am - 11:00pm</TableCell>
                                        <TableCell>CPROG</TableCell>
                                    
                                        </TableRow>
                                    </TableBody>

                                    <TableHeader>
                                        <TableRow>
                                        <TableHead className="w-[100px]">Friday</TableHead>
                                        </TableRow>
                                    </TableHeader>

                                    <TableBody>
                                        <TableRow>
                                        <TableCell className="font-medium">PHP</TableCell>
                                        <TableCell>7:00am - 11:00pm</TableCell>
                                        <TableCell>CPROG</TableCell>
                                      
                                        </TableRow>
                                        <TableRow>
                                        <TableCell className="font-medium">Oracle</TableCell>
                                        <TableCell>7:00am - 11:00pm</TableCell>
                                        <TableCell>CPROG</TableCell>
                           
                                        </TableRow>
                                        <TableRow>
                                        <TableCell className="font-medium">PHP</TableCell>
                                        <TableCell>7:00am - 11:00pm</TableCell>
                                        <TableCell>CPROG</TableCell>
                                
                                        </TableRow>
                                        <TableRow>
                                        <TableCell className="font-medium">P.E</TableCell>
                                        <TableCell>7:00am - 11:00pm</TableCell>
                                        <TableCell>CPROG</TableCell>
                                    
                                        </TableRow>
                                    </TableBody>


                        

                                    
                                </Table>

                                {/* <div className='mt-1 mb-0 text-[13px] font-semibold font-[NiramitReg] text-[#0F1A42]'>Monday</div>
                                <hr className="border-t border-black my-2 mt-1 mb-1" />
                                <div className='flex mb-1'>
                                    <div className='ml-3 mt-0 text-[13px] font-semibold font-[NiramitReg] text-[#0F1A42]'>Oracle</div>
                                    <div className='ml-4 text-[12px] font-[NiramitReg] text-[#0F1A42]'>7:00 am - 11:00 am</div>
                                    <div className='ml-5 text-[12px] font-[NiramitReg] text-[#0F1A42]'>CPROG</div>
                                </div>
                                <div className='flex mb-1'>
                                    <div className='ml-3 mt-0 text-[13px] font-semibold font-[NiramitReg] text-[#0F1A42]'>PHP</div>
                                    <div className='ml-[1.90rem] text-[12px] font-[NiramitReg] text-[#0F1A42]'>7:00 am - 11:00 am</div>
                                    <div className='ml-5 text-[12px] font-[NiramitReg] text-[#0F1A42]'>1H1</div>
                                </div>
                                <div className='flex mb-1'>
                                    <div className='ml-3 mt-0 text-[13px] font-semibold font-[NiramitReg] text-[#0F1A42]'>Java</div>
                                    <div className='ml-7 text-[12px] font-[NiramitReg] text-[#0F1A42]'>7:00 am - 11:00 am</div>
                                    <div className='ml-5 text-[12px] font-[NiramitReg] text-[#0F1A42]'>NSSA</div>
                                </div>
                                <div className='flex mb-1'>
                                    <div className='ml-3 mt-0 text-[13px] font-semibold font-[NiramitReg] text-[#0F1A42]'>PHP</div>
                                    <div className='ml-[1.90rem] text-[12px] font-[NiramitReg] text-[#0F1A42]'>7:00 am - 11:00 am</div>
                                    <div className='ml-5 text-[12px] font-[NiramitReg] text-[#0F1A42]'>1H!</div>
                                </div>
                                <div className='flex'>
                                    <div className='ml-3 mt-0 text-[13px] font-semibold font-[NiramitReg] text-[#0F1A42]'>Java</div>
                                    <div className='ml-7 text-[12px] font-[NiramitReg] text-[#0F1A42]'>7:00 am - 11:00 am</div>
                                    <div className='ml-5 text-[12px] font-[NiramitReg] text-[#0F1A42]'>NSSA</div>
                                </div>
                                <div className='mt-1 mb-0 text-[13px] font-semibold font-[NiramitReg] text-[#0F1A42]'>Tuesday</div>
                                <hr className="border-t border-black my-2 mt-1 mb-1" />
                                <div className='flex mb-1'>
                                    <div className='ml-3 mt-0 text-[13px] font-semibold font-[NiramitReg] text-[#0F1A42]'>Oracle</div>
                                    <div className='ml-4 text-[12px] font-[NiramitReg] text-[#0F1A42]'>7:00 am - 11:00 am</div>
                                    <div className='ml-5 text-[12px] font-[NiramitReg] text-[#0F1A42]'>CPROG</div>
                                </div>
                                <div className='flex mb-1'>
                                    <div className='ml-3 mt-0 text-[13px] font-semibold font-[NiramitReg] text-[#0F1A42]'>PHP</div>
                                    <div className='ml-[1.90rem] text-[12px] font-[NiramitReg] text-[#0F1A42]'>7:00 am - 11:00 am</div>
                                    <div className='ml-5 text-[12px] font-[NiramitReg] text-[#0F1A42]'>1H1</div>
                                </div>
                                <div className='flex mb-1'>
                                    <div className='ml-3 mt-0 text-[13px] font-semibold font-[NiramitReg] text-[#0F1A42]'>Java</div>
                                    <div className='ml-7 text-[12px] font-[NiramitReg] text-[#0F1A42]'>7:00 am - 11:00 am</div>
                                    <div className='ml-5 text-[12px] font-[NiramitReg] text-[#0F1A42]'>NSSA</div>
                                </div>
                                <div className='flex mb-1'>
                                    <div className='ml-3 mt-0 text-[13px] font-semibold font-[NiramitReg] text-[#0F1A42]'>PHP</div>
                                    <div className='ml-[1.90rem] text-[12px] font-[NiramitReg] text-[#0F1A42]'>7:00 am - 11:00 am</div>
                                    <div className='ml-5 text-[12px] font-[NiramitReg] text-[#0F1A42]'>1H!</div>
                                </div>
                                <div className='flex'>
                                    <div className='ml-3 mt-0 text-[13px] font-semibold font-[NiramitReg] text-[#0F1A42]'>Java</div>
                                    <div className='ml-7 text-[12px] font-[NiramitReg] text-[#0F1A42]'>7:00 am - 11:00 am</div>
                                    <div className='ml-5 text-[12px] font-[NiramitReg] text-[#0F1A42]'>NSSA</div>
                                </div> */}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            ))}
              
            </div>
        </>
    )
}
export default withAuth(Teacher)