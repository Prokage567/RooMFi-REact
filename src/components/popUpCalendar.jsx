import React from 'react'
import { format } from "date-fns"
import { Button } from "./ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import '../pages/index.css'
import { Calendar } from "./ui/popCalendar"
import { CalendarIcon } from 'lucide-react'
import dayjs from 'dayjs'
import { cn } from "@/lib/utils"

export default function PopUpCalendar({
  className,
}) {
  const [date, setDate] = React.useState({
    from: dayjs("2022-01-20").toDate(),
    to: dayjs("2022-01-20").add(20, "days").toDate(),
  })

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
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
        <PopoverContent className="w-[315px] h-[335px] border-[3px] z-50 line border-white bg-[#BFAC88]" align="start">
          <Calendar
            mode="range"
            defaultMonth={date?.from}
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