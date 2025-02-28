import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import dayjs from "dayjs"
import weekday from 'dayjs/plugin/weekday'
import { Dialog } from "./dialog"
import { DialogContent, DialogTrigger } from "@radix-ui/react-dialog"
import AdminPowers1 from "../AdminPowers/AdminEditDeleteCalendar"
function Calendar({
  className,
  classNames,
  schedules, //data comes from the Section in section.jsx
  showOutsideDays = true,
  hihi,
  ...props
}) {
  dayjs.extend(weekday)
  return (
    (
      <DayPicker
        showOutsideDays={showOutsideDays}
        className={cn("p-3 ", className)}
        classNames={{
          months: "flex flex-col sm:flex-row gap-[45px] space-y-3 sm:space-x-3 sm:space-y-0",
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
            "hover:bg-[#8CD7F4]/10 h-[70px] w-[70px] sm:h-[100px] md:h-[90px] lg:h-[100px] sm:w-[80px] md:w-[100px] lg:w-[150px] border-[#242F5B] border-opacity-50 border-[1px] relative p-0 text-end text-[15px]  focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
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
            "day-outside   text-[#fff]/30  hover:text-[#fff]",
          day_disabled: "text-muted-foreground text-[#fff]/30 opacity-80 ",
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
              <div className=" mt-[30px] h-[65px] overflow-scroll no-scrollbar">
                <div className="w-[3px] absolute top-1 right-[23px]">{dayjs(props.date).date()}</div>
                {
                  schedules?.filter(x => x.date === dayjs(props.date).format("YYYY-MM-DD"))?.map(x => (
                    // x.date >= dayjs().weekday(-7).format("YYYY-MM-DD") && x.date <= dayjs().weekday(6).format("YYYY-MM-DD") ?
                    <>
                    <div key={x.id} className=" ml-1 w-[140px]   text-secondary mb-1 text-[11px] font-[NiramitReg]  ">
                      <div className="w-[140px] bg-[#90E0FF]  hover:rounded-sm  relative">
                        <div className=" -ml-[6px]   w-[140px] text-[#0c146e]">
                          <div className="z-20 absolute ml-[6px] -mt-[12px]">

                          <AdminPowers1/>   
                          </div>
                          {x.room.name} | {x.end_time} - {x.start_time}
                        </div>
                      </div>
                 

                        <div className="flex flex-wrap italic  w-[130px] text-[#0c146e] ml-1">
                          <div> {x.teacher.name} | </div>
                          <div className="ml-1"> {x.subject}</div>
                        </div>
                
                    </div>
                    
                    </>

                  ))
                }
              </div>
            </div>)
          }
        }}

        {...props} />
    )
  );
}
Calendar.displayName = "Calendar"

export { Calendar }
