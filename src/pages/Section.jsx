
import { React, useState } from "react"
import { Calendar as Cal } from "../components/ui/calendar"
import './index.css'
import Add from "../assets/images/add.svg" 
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input} from "../components/ui/input"
import {Label} from "../components/ui/label"
import {Checkbox} from "../components/ui/checkbox"
import { Button } from "../components/ui/button"



export default function section(){
  const [date, setDate] = useState(new Date())

  return(
    <>
    {/* NOTE: bbugs out and makes the page cut it's header as it closes, 
    solution that might help remove this file and merge it*/}
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

              <div className="grid grid-flow-col w-[450px] h-[150px] gap-2 ">

                <div className=" w-[150px] row-span-3" >
                  <Label className="ml-10">Time</Label><br/>
                  <Label >From:</Label>
                  <Input className="border-none focus:outline-white"  type="time"/>
                  <Label>To:</Label>
                  <Input className="border-none" type="time"/>
                </div>

                <div className="col-span-2 w-[270px]  h-[110px]  mt-2 ">
                  <div className="items-top flex space-x-2">
                    <Checkbox id="application" />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="application"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Apply to all week days? (monday)
                      </label>
                    </div>
                  </div>
                </div>

                <div className="col-span-2 row-span-2 ml-[210px]">
                  <Button> save </Button>
                </div>

              </div>
                      
            </div>
          </DialogContent>
        </Dialog>
      </>
    )
}

