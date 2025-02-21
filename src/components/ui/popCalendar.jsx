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
            "h-[40px} w-[40px] border-[#242F5B] border-opacity-50 border-[1px] relative p-0 text-end text-[20px]   ",
            props.mode === "range"
              ? "[&:has(>.day-range-end)]: [&:has(>.day-range-start)] first:[&:has([aria-selected])] last:[&:has([aria-selected])]"
              : "[&:has([aria-selected])]"
          ),
          day: cn(
            buttonVariants({ variant: "ghost" }),
            "h-8 w-8  font-normal aria-selected:opacity-100"
          ),
          day_range_start: "day-range-start focus:bg-[#90E0FF]",
          day_range_end: "day-range-end",
          day_selected:
            " text-[#242F5B]focus:h-[40px] focus:w-[40px] focus:bg-[#90E0FF]/40 focus:text-[#242F5B]",
          day_today: "font-extrabold",
          day_outside:
            "day-outside text-[#D9D9D9]/100 ",
          day_disabled: "text-muted-foreground opacity-80 ",
          day_range_middle:
            "bg-[#90E0FF]/40 h-[40px] w-[40px] ",
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
