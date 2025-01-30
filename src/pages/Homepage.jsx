import React, { useState } from 'react'
import { Box } from '@mui/material';
import withAuth from '../highOrdeerComponent/withAuth'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import image from '../assets/images/image.svg'

function Homepage() {
    return (
      <>
      <Box>
      <div className='justify-items-center flex'>
                <div className="flex relative max-w-md mx-auto mt-7 ">
                    <Input type="text" placeholder="Search room..."
                        className={"h-[45px] border-2 border-blue-950 pl-10 pr-4 py-2 border-2 rounded-full w-[500px] focus:border-[1] "} />
                    <Button type="submit">Search</Button>
                </div>
            </div>

            <div className='ml-[150px]'>
                <div className='float-left w-[60%]'>
                    MFI’s Room Management System: Room Scheduling and Individual Tracking
                </div>
            </div>
            <img src={image} alt="" width="500px" height="500px" className='float-right w-[40%] pr-[100px]' />

      </Box>
      </>
    )
}

export default withAuth(Homepage)