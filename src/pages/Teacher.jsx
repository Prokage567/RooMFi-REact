
import {React, useEffect, useState} from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card.jsx"

import { getSched } from '../api/auth';
function Teacher() {
    const [ie, setTeachers] = useState([])
    useEffect(() => {
        getSched().then(res => {
            setTeachers(res.data)
            console.log(res)
        }
    )
    })
    
    return (
        <>
            <div className='justify-center  ml-5 gap-5 border line flex flex-wrap'>
                <div className='justify-center flex'>
                    <div className=" flex flex-wrap">
                        <Card className="mt-7 w-[300px] h-[250px]">
                            
                            <CardContent style={{ maxHeight: '175px' }} className="border-[#BFAC88] border-2 w-100 bg-[#ffffff] rounded-b-lg overflow-y-scroll no-scrollbar">
                                <div className='mt-1 mb-0 text-[13px] font-semibold font-[NiramitReg] text-[#0F1A42]'>Monday</div>
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
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <div className='justify-center flex'>
                    <div className="flex">
                        <Card className="mt-7 w-[300px] h-[250px]">
                            <CardHeader className="border-[#BFAC88] border-2 rounded-t-lg w-100 bg-[#BFAC88]">
                                <CardTitle style={{ margin: 0 }} className="font-normal mt-0 text-[18px] font-[NiramitReg] text-[#0F1A42] text-center">Jeco Renz Concepcion</CardTitle>
                                <CardDescription style={{ margin: 0 }} className="font-[NiramitReg] text-center text-[#0F1A42]">I.T Teacher</CardDescription>
                            </CardHeader>
                            <CardContent style={{ maxHeight: '175px' }} className="border-[#BFAC88] border-2 w-100 bg-[#ffffff] rounded-b-lg overflow-y-scroll no-scrollbar">
                                <div className='mt-1 mb-0 text-[13px] font-semibold font-[NiramitReg] text-[#0F1A42]'>Monday</div>
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
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <div className='justify-center flex'>
                    <div className="flex">
                        <Card className="mt-7 w-[300px] h-[250px]">
                            <CardHeader className="border-[#BFAC88] border-2 rounded-t-lg w-100 bg-[#BFAC88]">
                                <CardTitle style={{ margin: 0 }} className="font-normal mt-0 text-[18px] font-[NiramitReg] text-[#0F1A42] text-center">Jeco Renz Concepcion</CardTitle>
                                <CardDescription style={{ margin: 0 }} className="font-[NiramitReg] text-center text-[#0F1A42]">I.T Teacher</CardDescription>
                            </CardHeader>
                            <CardContent style={{ maxHeight: '175px' }} className="border-[#BFAC88] border-2 w-100 bg-[#ffffff] rounded-b-lg overflow-y-scroll no-scrollbar">
                                <div className='mt-1 mb-0 text-[13px] font-semibold font-[NiramitReg] text-[#0F1A42]'>Monday</div>
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
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Teacher