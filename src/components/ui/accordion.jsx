import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef(({  className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn(className)} {...props} />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef(({img, className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center md:justify-center lg:w-[220px] md:w-[150px] w-[50px] md:hover:bg-cyan-700 hover:rounded-[10px] lg:hover:bg-cyan-700 py-4 text-sm font-large transition-all [&[data-state=closed]>svg]:-rotate-90 [&[data-state=open]>svg]:rotate-165",
        className
      )}
      {...props}>
      <img src={img} width="35px" className="hover:bg-cyan-700 hover:rounded-[10px] pl-[3px] pr-[3px] relative lg:left-5 md:-left-7 left-2 pt-1 pb-1" />
      <div className="hidden lg:block md:block md:-indent-[8px] lg:indent-[30px]">
        {children}
      </div>
      <ChevronDown
        className="h-7 w-7 lg:ml-[35px] hidden lg:block shrink-0 text-stone transition-transform duration-200 " />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <div className="hover:bg-cyan-700 hover:rounded-[10px] ">
    <AccordionPrimitive.Content
      ref={ref}
      className="indent-5 pr-4 text-pretty text-start pt-3 overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down "
      {...props}>
      <div className={cn("pb-4 pt-0 ", className)}>{children}</div>
    </AccordionPrimitive.Content>
  </div>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
