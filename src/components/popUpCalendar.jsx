import React from 'react'
import { format } from "date-fns"
import { Button } from "./ui/button"
import {
  Popover,
  PopoverTrigger,
} from "@/components/ui/popover"
import '../pages/index.css'
import { Calendar } from "./ui/popCalendar"
import { CalendarIcon } from 'lucide-react'
import { cn } from "@/lib/utils"
import { PopoverContent } from '@radix-ui/react-popover'
import { Input } from './ui/input'
import dayjs from 'dayjs'

export default function PopUpCalendar({
  className,
}) {
  const [date, setDate] = React.useState({})
  return (
    <div className={cn("grid gap-2", className)}>
      <Popover >
        <PopoverTrigger asChild>
          <Button 
            variant={"outline"}
            className={cn(
              "bg-transparent w-auto justify-center font-[NiramitReg]",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <Input id="strDate" type="hidden" value={dayjs(date?.from).format("YYYY-MM-DD")}></Input>
        <Input id="endDate" type="hidden" value={dayjs(date?.to).format("YYYY-MM-DD")}></Input>
        <PopoverContent className="p-[10px] w-[310px] min-h-[300px] rounded-[10px] border-[2px] line border-[#242F5B] text-[#242F5B] mb-[10px] bg-[#ffffff]">
        <Calendar 
            mode="range"
            selected={date}
            onSelect={setDate}
            numberOfMonths={1}
            className="font-[NiramitReg]"
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}