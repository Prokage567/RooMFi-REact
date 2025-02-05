import React, { useEffect, useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import img from "@/assets/images/image.svg"
import img2 from "@/assets/images/image2.svg"
import foot from "@/assets/images/footer.svg"

function Homepage() {
    useEffect(()=>{
           document.body.style.background = 'white'
    },[])
    return (
        <>
            <div className="max-h-screen h-auto max-w-screen-2xl lg:max-h-screen">
                <div className=' items-center justify-center pl-[365px]pr-[365px] flex sticky top-9 flex-row'>
                    <Input symbol={true} type="text" placeholder="Search room..."
                        className="h-[45px] border-2 bg-slate border-blue-950 pl-10 pr-4 py-2 rounded-full w-[500px] focus:border-[1] " />
                    <Button type="submit">Search</Button>
                </div>
                <div className='flex pt-[50px] flex-row md:pl-[100px] pb-12 lg:pl-[100px] lg:pt-[125px] pr-[50px]'>
                    <div className='pt-[100px]'>
                        <p className='font-[NiramitReg] text-[17px]'>MFI’s Room Management System: Room Scheduling and Individual Tracking
                        </p>
                        <h4 className='font-[KronaOne] text-[40px] pt-6'>
                            RooMFI
                        </h4><p className='font-[NiramitReg] text-[25px] -leading-1 pr-5 w-[560px]'>
                            A Smooth and organized system where MFIers can efficiently manage or view room schedules, along with a tracker providing information on the sections and teachers assigned to each room.
                        </p>
                    </div>
                    <img src={img} alt="" width='520px' className='pt-[20px] mr-[70px]' />
                </div>
                <div className='flex flex-col '>
                    <img src={img2} alt="" className='pt-[7vh] -z-10' />
                    <div className='pl-[650px] relative -z-10 -top-[450px] -mb-[450px]'>
                        <div className='h-[550px] w-[470px] pt-[40px] bg-cyan-500 text-zinc-100 p-12'>
                            <h2 className='font-[KronaOne] text-[20px] pl-[20px] pr-[50px]'>
                                Room Management & Individual Tracks
                            </h2>
                            <ul className='list-disc list-outside pl-12'>
                                <li className='pt-[50px]'>
                                    Improving the schedoling process, reducing the disagreement over assigned rooms, and providing an access platform for monitoring individuals' whereabouts or theirulcations where they can be found.
                                </li>
                                <li className='pt-[50px]'>
                                    Determining whether any available spaces enable them to ask permission to reserve it.
                                </li>
                                <li className='pt-[50px]'>
                                    Help to keep track of room usage and which individuals are in there.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src={foot} alt="" />
                </div>
            </div>
        </>
    )
}

export default Homepage