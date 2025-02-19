import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}) {
  return (
    (
      <DayPicker
        showOutsideDays={showOutsideDays}
        className={cn("", className)}
        classNames={{
          months: "flex flex-col sm:flex-row gap-[45px] space-y-4 sm:space-x-4 sm:space-y-0",
          month: "space-y-4",
          caption: "relative top-3 items-center",
          caption_label: "relative left-14 text-[#242F5B] text-[25px] font-bold",
          nav: "space-x-1 flex",
          nav_button: cn(
            buttonVariants({ variant: "outline" }),
            "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
          ),
          nav_button_previous: "absolute top-1 left-2",
          nav_button_next: "absolute top-1 lg:left-[15.5vw] md:left-[24vw] sm:left-[32vw]  left-[47vw]",
          table: "w-full border-collapse space-y-1",
          head_row: "flex",
          head_cell:
            " rounded-md w-[40px] text-[#242F5B] text-[18px] ",
          row: "flex  w-full",
          cell: cn(
            "hover:bg-[#8CD7F4]/80 h-[40px} w-[40px] border-[#242F5B] border-opacity-50 border-[1px] relative p-0 text-end text-[20px] focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
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
            " text-[#242F5B] focus:bg-[#90E0FF]  focus:text-[#242F5B]",
          day_today: "font-extrabold",
          day_outside:
            "day-outside text-[#D9D9D9]/100  hover:text-[#fff]",
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
          )
        }}
        {...props} />
    )
  );
}
Calendar.displayName = "Calendar"

export { Calendar }
