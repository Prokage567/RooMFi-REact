
import React from "react"
import head from "../assets/images/head.svg"  
import { Button as btn, Button} from "react-day-picker"

export default function section() {
  // const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <>
    <div  className="w-1000px">
    <img src= {head}></img>
    </div>
    <div className='text-xl bg-red-950'>HELOOOO</div> 
    </>
  )
}












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
