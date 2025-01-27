
import { React, useState } from "react"
import { Calendar as Cal } from "../components/ui/calendar"
import './index.css'

export default function section(){
  const [date, setDate] = useState(new Date())

  return(
    <>
        <div  className="justify-end">
        <Cal
          mode="single"
          selected= {date}
          onSelect = {setDate}
          className="rounded-md font-[NiramitReg]  "
          
        />

        </div>
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
