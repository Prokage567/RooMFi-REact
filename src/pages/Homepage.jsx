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
          <div className="max-h-screen h-[120vh] max-w-screen-2xl" >
                <div className=' items-center justify-center flex sticky top-9 flex-row'>
                    <Input symbol={true} type="text" placeholder="Search room..."
                        className="h-[45px] border-2 bg-slate border-blue-950 pl-10 pr-4 py-2 rounded-full w-[500px] focus:border-[1] " />
                    <Button type="submit">Search</Button>
                </div>
                <div className='flex flex-row items-center justify-center flex-wrap pt-[100px]'>
                    <div>
                        <p className='font-[NiramitReg] lg:text-[20px] text-[17px]'>MFI’s Room Management System: Room Scheduling and Individual Tracking
                        </p>
                        <h4 className='font-[KronaOne] lg:text-[60px] text-[40px] pt-6'>
                            RooMFI
                        </h4><p className='font-[NiramitReg] lg:text-[25px]  pl-1 text-[25px] w-[560px]'>
                            A Smooth and organized system where MFIers can efficiently manage or view room schedules, along with a tracker providing information on the sections and teachers assigned to each room.
                        </p>
                    </div>
                    <img src={img} alt="" width='520px'/>
                </div>
                <div className='flex flex-col justify-center items-center flex-wrap pt-[100px]'>
                    <img src={img2} alt="" className='-z-10' />
                    <div className='relative left-[320px] -z-10 -top-[450px] -mb-[450px]'>
                        <div className='h-[525px] w-[470px] bg-cyan-500 text-zinc-100 p-12'>
                            <h2 className='font-[KronaOne] pb-6 text-[20px]'>
                                Room Management & Individual Tracks
                            </h2>
                            <ul className='list-disc list-outside flex flex-col flex-wrap gap-12 justify-center items-center '>
                                <li>
                                    Improving the schedoling process, reducing the disagreement over assigned rooms, and providing an access platform for monitoring individuals' whereabouts or theirulcations where they can be found.
                                </li>
                                <li>
                                    Determining whether any available spaces enable them to ask permission to reserve it.
                                </li>
                                <li>
                                    Help to keep track of room usage and which individuals are in there.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src={foot} alt=""className='lg:pb-[25px] 2xl:pb-0' />
                </div>
            </div>
        </>
    )
}

export default Homepage