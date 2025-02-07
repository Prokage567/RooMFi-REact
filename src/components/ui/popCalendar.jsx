import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

function Cal({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}) {
  return (
    (<DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-[#fff] indent-6 text-[25px] mr-[40px]  font-bold",
        nav: "space-x-1 flex items-center",
        nav_button: cn( 
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-[-15px]",
        nav_button_next: "absolute right-[0px]",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          " rounded-md  w-[34px] font-bold text-[#fff] text-[15px] ",
        row: "flex w-[30px]",
        cell: cn(
          "hover:bg-[#AE9360]/80 h-[35px] w-[38px]  border-[#6E5320] border-opacity-50 border-[1px] relative p-0 text-end text-[20px] focus-within:relative focus-within:z-20  [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]",
          props.mode === "range"
            ? "[&:has(>.day-range-end)] [&:has(>.day-range-start)] "
            : "[&:has([aria-selected])]"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-8 w-8  font-normal aria-selected:opacity-100"
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected:
          "bg-[#AE9360] text-[#242F5B] focus:bg-[#AE9360]  focus:text-[#fff]",
        day_today: " border-[0.3px] line border-white ",
        day_outside:
          "day-outside   text-[#fff]/50",
        day_disabled: "opacity-50 ",
        //bg range idk what color 
        day_range_middle:
          "aria-selected:bg-[#AE9360] text-[#fff] ",
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
      }}
      {...props} />)
  );
}
Cal.displayName = "Cal"

export { Cal }
