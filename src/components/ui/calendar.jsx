import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import dayjs from "dayjs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table.jsx"

function Calendar({
  className,
  classNames,
  schedules, //data comes from the Section in section.jsx
  showOutsideDays = true,
  hihi,
  ...props
}) {
  return (
    (
      <DayPicker
        showOutsideDays={showOutsideDays}
        className={cn("p-3 ", className)}
        classNames={{
          months: "flex flex-col sm:flex-row gap-[45px] space-y-4 sm:space-x-4 sm:space-y-0",
          month: "space-y-4",
          caption: "relative top-3 items-center",
          caption_label: "indent-20 text-[#242F5B] text-[25px] font-bold",
          nav: "space-x-1 flex",
          nav_button: cn(
            buttonVariants({ variant: "outline" }),
            "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
          ),
          nav_button_previous: "absolute top-1 left-[20px]",
          nav_button_next: "absolute top-1 left-[280px]",
          table: "w-full border-collapse space-y-1",
          head_row: "flex",
          head_cell:
            " rounded-md w-[70px] sm:w-[80px] md:w-[100px] lg:w-[150px] text-[#242F5B] text-[18px] ",
          row: "flex  w-full",
          cell: cn(
            "hover:bg-[#8CD7F4]/80 h-[70px] w-[70px] sm:h-[100px] md:h-[90px] lg:h-[100px] sm:w-[80px] md:w-[100px] lg:w-[150px] border-[#242F5B] border-opacity-50 border-[1px] relative p-0 text-end text-[20px] focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
            props.mode === "range"
              ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
              : "[&:has([aria-selected])]:rounded-md"
          ),
          day: cn(
            buttonVariants({ variant: "ghost" }),
            "h-8 w-8  font-normal aria-selected:opacity-100"
          ),
          day_range_start: "day-range-start",
          day_range_end: "day-range-end",
          day_selected:
            " text-[#242F5B]  focus:bg-[#90E0FF]  focus:text-[#242F5B]",
          day_today: "font-extrabold",
          day_outside:
            "day-outside   text-[#D9D9D9]/100  hover:text-[#fff]",
          day_disabled: "text-muted-foreground opacity-80 ",
          day_range_middle:
            "aria-selected:bg-accent aria-selected:text-accent-foreground",
          day_hidden: "invisible",
          ...classNames,
        }}
        components={{
          IconLeft: ({ className, ...props }) => (
            <ChevronLeft className={cn("h-4 w-4", className)} {...props} />
          ),
          IconRight: ({ className, ...props }) => (
            <ChevronRight className={cn("h-4 w-4", className)} {...props} />
          ),
          Day: ({ className, displayMonth, ...props }) => {

            return (<div className={cn("", className)} displaymonth={displayMonth} {...props}>
              <div className="w-2 absolute top-1 right-6">{dayjs(props.date).date()}</div>
              {
                schedules?.filter(x => x.date === dayjs(props.date).format("YYYY-MM-DD"))?.map(x => (
                  <div className="bg-[#a74848] text-secondary justify-items-start text-[9px] font-[NiramitReg] h-[50px] overflow-scroll no-scrollbar w-full pb-1">
                  <div className="w-5">{x.room.name}</div>
                 <div className="flex flex-wrap">
                 <div className=""> {x.teacher.name}</div>
                  <div>{x.end_time} - {x.start_time}</div>
                  <div className="w-12">{x.subject}</div>
                 </div>
                  </div>
                ))
              }
            </div>)
          }
        }}

        {...props} />
    )
  );
}
Calendar.displayName = "Calendar"

export { Calendar }
