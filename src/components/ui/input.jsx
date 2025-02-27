import * as React from "react"

import { cn } from "@/lib/utils"
import { Search } from "lucide-react";

const Input = React.forwardRef(({ symbol2,symbol, className, type, length, placeholder, ...props }, ref) => {
  return (
    (<>
      <div>
        <div className="relative">
          {symbol ?
            <Search className="text-slate-900 absolute left-4 top-1/2 transform -translate-y-1/2" /> : ""}
          {symbol2 ?
            <Search className="text-slate-900 absolute left-[1px] top-1/2 h-[15px] w-[15px] transform -translate-y-1/2" /> : ""}
          <input
            type={type}
            maxLength={length}
            placeholder={placeholder}
            className={cn(
              "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ",
              className
            )}
            ref={ref}
            {...props} />
        </div>
      </div>
    </>

    )
  );
})
Input.displayName = "Input"

export { Input }
