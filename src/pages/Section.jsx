
import { React, useState } from "react"
import { Calendar as Cal } from "../components/ui/calendar"
import { Cal as Kal } from "../components/ui/popCalendar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import './index.css'
import Add from "../assets/images/add.svg"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Checkbox } from "../components/ui/checkbox"
import { Button } from "../components/ui/button"
import { format } from "date-fns"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import '../pages/index.css'
import { Calendar, CalendarIcon } from 'lucide-react'
import dayjs from 'dayjs'
import { cn } from "@/lib/utils"
import { DialogTitle } from "@radix-ui/react-dialog"




export default function section({
  className,
}) {

  const [date, setDate] = useState({
    from: dayjs().toDate(),
    to: dayjs().add(20, "days").toDate(),
  })

  return (
    
    <>
      {/* NOTE: bbugs out and makes the page cut it's header as it closes, 
    solution that might help remove this file and merge it*/}

      <div className="flex h-[80vh] mb-24 mr-[300px] ">
        <div className="justify-end h-auto max-h-screen ml-[100px]">
          <Cal
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md font-[NiramitReg] scroll-auto text-[#242F5B] border-none" />
        </div>

        <Dialog className="rounded-full w-[500px]" >
          <DialogTrigger>
            <img src={Add} className="w-[50px] h-[50px] mr-[10px] mb-[10px] fixed bottom-0 right-0" />
          </DialogTrigger>

          <DialogContent className="bg-slate-900 border-none text-[#fff]">

            <div className="grid  max-w-sm items-center gap-1.5 ml-3 w-[390px] font-[NiramitReg]">
              <Label className="text-[20px]">Room NO.</Label>
              <Input autofocus e={false}
                className="focus:outline-double h-10 placeholder:font-extralight md:text-[20px] bg-white text-[#0d1254] text-[18px] "
                type="number"
                id="room.no"
                placeholder="Input Room Number" />

              <div className="justify-between flex">
              <div>
              <Label className="text-[20px]">Add a Teacher</Label>
              </div>

              <div className=" mt-[15px] h-[14px] w-[160px]">
              <div className="  font-extralight text-[13px]">This field is not required</div>
              </div>

              </div>
              <Input autofocus e={false}
                className="focus:outline-double h-10 placeholder:font-extralight md:text-[20px] bg-white  text-[#0d1254]
                ] text-[20px] "
                id="room.no"
                placeholder="Input Room Number" />

              <div className="mt-2 z-10 ">
                <div className="font-[NiramitReg] text-[20px] mb-1">Teacher</div>

                <Select  className="font-[NiramitReg]">
                  <SelectTrigger className="h-10 w-[450px] text-[#11124f] bg-white text-[18px] ">
                    <SelectValue placeholder="Select a Teacher" />
                  </SelectTrigger>
                  <SelectContent className="h-[300px] font-[NiramitReg]" >
                    <SelectItem className="text-[18px] text-[#242F5B] hover:bg-[#bce9fc]" value="dark">Ruffa Mae Santos</SelectItem>
                    <SelectItem className="text-[18px]  text-[#242F5B] hover:bg-[#bce9fc]" value="2">Aladin P. Silvestre</SelectItem>
                    <SelectItem className="text-[18px]  text-[#242F5B] hover:bg-[#bce9fc]" value="3">Mariel Nichole Almazan</SelectItem>
                    <SelectItem className="text-[18px]  text-[#242F5B] hover:bg-[#bce9fc]" value="5">Hillary Mira</SelectItem>
                    <SelectItem className="text-[18px]  text-[#242F5B] hover:bg-[#bce9fc]" value="wow">Chelzie Tano</SelectItem>
                    <SelectItem className="text-[18px]  text-[#242F5B] hover:bg-[#bce9fc]" value="34">Miles Delfino</SelectItem>
                    <SelectItem className="text-[18px]  text-[#242F5B] hover:bg-[#bce9fc]" value="90">Justin Nalog</SelectItem>
                  </SelectContent>
                </Select>
              </div>


              <Label className="mt-2 text-[20px]">Subject</Label>
              <Input autofocus e={false}
                className="h-10 placeholder:text-[20px]  md:text-[20px] bg-white text-[18px] text-[#0F172A]"
                id="subject"
                placeholder="Input Subject" />

              <div className={cn("grid gap-2 mt-3", className)}>
                <Popover className="">
                  <PopoverTrigger asChild>
                    <Button
                      id="date"
                      variant={"outline"}
                      className={cn(
                        "w-[450px] justify-center text-center  text-[18px] font-normal hover:border-white hover:border hover:line bg-transparent",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon />
                      {date?.from ? (
                        date.to ? (
                          <>
                            {format(date.from, "LLL dd, y")} - {" "}
                              {format(date.to, "LLL dd, y")}
                          </>
                        ) : (
                          format(date.from, "LLL dd, y")
                        )
                      ) : (
                        <span>Pick a date</span>
                      )}{console.log(date)}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[315px] h-[335px] border-[3px] line border-white bg-[#BFAC88] " align="start">
                    <Kal
                      initialFocus
                      mode="range"
                      defaultMonth={date?.from}
                      selected={date}
                      onSelect={setDate}
                      numberOfMonths={1}
                      className="text-[#fff]  font-[NiramitReg]"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="grid grid-flow-col w-[450px] mt-[10px] h-[150px] gap-2 ">

                <div className=" w-[150px] row-span-3" >
                  <Label className="ml-10 text-[20px]">Time</Label><br />
                  <Label className="text-[18px]" >From:</Label>
                  <Input className="border-none focus:outline-white" type="time" />
                  <Label className="text-[18px]">To:</Label>
                  <Input className="border-none text-slate-50" type="time" />
                </div>

                <div className="col-span-2 w-[270px]  h-[110px]  mt-2 ">
                  <div className="items-top flex space-x-2">
                    <Checkbox id="application" className="border-white hover:bg-slate-500/80" />
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
      </div>
    </>
  )
}

