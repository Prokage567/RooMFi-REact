
import { React, useState } from "react"
import { Calendar as Cal } from "../components/ui/calendar"
import './index.css'
import Add from "../assets/images/add.svg" 
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input} from "../components/ui/input"
import {Label} from "../components/ui/label"
import {Checkbox} from "../components/ui/checkbox"
import { Button } from "../components/ui/button"
// import {PopUpCalendar as PopUp} from "../components/popUpCalendar"



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

        <Dialog className="rounded-full w-[500px]" >
          <DialogTrigger>
            <img src={Add} className="w-[50px] h-[50px] mr-[10px] mb-[10px] fixed bottom-0 right-0" /> 
          </DialogTrigger>

          <DialogContent className="bg-slate-900 border-none text-[#fff]">

            <div className="grid  max-w-sm items-center gap-1.5 ml-3 w-[390px] font-[NiramitReg]">
              <Label className="text-[20px]">Room NO.</Label>
              <Input  autofocus e={false} 
                      className="focus:outline-double h-10 placeholder:text-[18px] text-[20px] " 
                      type="number" 
                      id="room.no" 
                      placeholder="Input Room Number" />

              <Label className="text-[20px]">Teacher Name</Label>
              <Input autofocus e={false} 
                     id="teacher_name"
                     className="h-10 placeholder:text-[18px] text-[20px]"
                     placeholder="Type or Select a Teacher" />

              <Label className="text-[20px]">Subject</Label>
              <Input autofocus e={false}  
                     className="h-10 placeholder:text-[18px] text-[20px]"
                     id="subject" 
                     placeholder="Input Subject" />
              
              {/* <PopUp  /> */}

              <div className="grid grid-flow-col w-[450px] mt-[15px] h-[150px] gap-2 ">

                <div className=" w-[150px] row-span-3" >
                  <Label className="ml-10 text-[20px]">Time</Label><br/>
                  <Label className="text-[18px]" >From:</Label>
                  <Input className="border-none focus:outline-white"  type="time"/>
                  <Label className="text-[18px]">To:</Label>
                  <Input className="border-none " type="time"/>
                </div>

                <div className="col-span-2 w-[270px]  h-[110px]  mt-2 ">
                  <div className="items-top flex space-x-2">
                    <Checkbox id="application" />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="application"
                        className="font-medium leading-none peer-disabled:cursor-not-allowed text-[16px] peer-disabled:opacity-70">
                        Apply to all week days? (monday)
                      </label>
                    </div>
                  </div>
                </div>

                <div className="col-span-2 row-span-2 ml-[210px]">
                  <Button className="hover:font-extrabold hover:bg-transparent font-[10] font-[NiramitReg] bg-transparent text-[20px]"> Save </Button>
                </div>

              </div>
                      
            </div>
          </DialogContent>
        </Dialog>
      </>
    )
}

