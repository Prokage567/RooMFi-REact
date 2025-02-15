import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const AC = AccordionPrimitive.Root

const AI = React.forwardRef(({  className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn(className)} {...props} />
))
AI.displayName = "AI"

const AT = React.forwardRef(({img, input,className, children, ...props}, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        " flex-1 w-[300px] justify-items-center mr-7  transition-all [&[data-state=closed]>svg]:-rotate-90 [&[data-state=open]>svg]:rotate-165",
        className
      )}
      {...props}>
      <div className="hidden lg:block md:block md:-indent-[8px] lg:indent-[30px]">
        {children}
      </div>
      
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AT.displayName = AccordionPrimitive.Trigger.displayName

const ACC = React.forwardRef(({ className, children, ...props }, ref) => (
  <div className="hover:rounded-[10px] ">
    <AccordionPrimitive.Content
      ref={ref}
      className="indent-5 pr-4 text-pretty text-start pt-3 overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down "
      {...props}>
      <div className={cn("pb-4 pt-0 ", className)}>{children}</div>
    </AccordionPrimitive.Content>
  </div>
))
ACC.displayName = AccordionPrimitive.Content.displayName

export { AC, AI, AT, ACC }
