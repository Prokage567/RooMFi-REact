import React, { useState } from 'react'
import { Box } from '@mui/material';
import withAuth from '../highOrdeerComponent/withAuth'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import img from "@/assets/images/image.svg"

function Homepage() {
    return (
        <>
            <Box className="flex flex-col">
                <div>
                    <div className='flex justify-center mt-7 pl-[365px] pr-[365px] w-full items-center'>
                        <Input symbol={true} type="text" placeholder="Search room..."
                            className="h-[45px] border-2 border-blue-950 pl-10 pr-4 py-2 border-2 rounded-full w-[500px] focus:border-[1] " />
                        <Button type="submit">Search</Button>
                    </div>
                </div>

                <div className=' flex justify-end'>
                    <img src={img} alt="" width='550px' className='mt-[50px]' />
                </div>
            </Box>
        </>
    )
}

export default withAuth(Homepage)