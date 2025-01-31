
import { React, useState } from "react"
import { Calendar as Cal } from "../components/ui/calendar"
import './index.css'
import Add from "../assets/images/add.svg" 
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input} from "../components/ui/input"
import {Label} from "../components/ui/label"



export default function section(){
  const [date, setDate] = useState(new Date())

  return(
    <>
        <div  className="justify-end border ml-[160px] line mr-[30px]">
        <Cal
          mode="single"
          selected= {date}
          onSelect = {setDate}
          className="rounded-md ml-[30px] font-[NiramitReg] text-[#242F5B] mt-[10px] border-none"
        />
        </div>

        <Dialog className="rounded-full" >
          <DialogTrigger>
            <img src={Add} className="w-[50px] h-[50px] mr-[10px] mb-[10px] fixed bottom-0 right-0" /> 
          </DialogTrigger>

          <DialogContent className="bg-slate-900 border-none text-[#fff]">
            <DialogHeader>
              <DialogTitle className=" font-thin font-[NiramitReg]">Add an Event</DialogTitle>
            </DialogHeader>

            <div className="grid  max-w-sm items-center gap-1.5 ml-3 w-[390px] font-[NiramitReg]">
              <Label htmlFor="email">Room NO.</Label>
              <Input  autofocus e={false} 
                      className="focus:outline-double" 
                      type="number" 
                      id="room.no" 
                      placeholder="Input Room Number" />

              <Label htmlFor="email">Teacher Name</Label>
              <Input autofocus e={false} 
                     id="teacher_name"
                     placeholder="Type or Select a Teacher" />

              <Label htmlFor="email">Subject</Label>
              <Input autofocus e={false}  
                     id="subject" 
                     placeholder="Input Subject" />
            </div>

            

          </DialogContent>
        </Dialog>

    </> 
  )
}


// export default function section() {
//   // const [date, setDate] = React.useState<Date | undefined>(new Date())


//   return (
//     <>

//     </>
//   )
// }


//  import { Box } from '@mui/material'
// import React from 'react'
// import "./App.css"
// import head from "../assets/images/head.svg"


// const nav_bar= {
//    backgroundColor: "#242F5B", 
//     width: "286px",
//     height: "100vh",
//     top:"90px",
//     left:"0px",
//     boxShadow: "10px -1px 20px rgba(36, 47, 91, 0.5)"
// }
// export default function section() {

 
//     return (
//         <>
//             <Box sx= {{
//                  overflow: "hidden",
//                  height: "90px",
//             }}>
//                 <img src= {head} width="1536px"></img>
//             </Box>

//             <Box sx= {nav_bar}>
//                 hello!!
//             </Box>
//         </>


//   )
// }
