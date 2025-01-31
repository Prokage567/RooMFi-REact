import * as React from "react"
 
import { AspectRatio } from "@/components/ui/aspect-ratio"

function Room(){

    return(
        <>  
        
        <div className="justify-center flex">
            <div className="pl-10 pt-5 text-[45px] text-[#0F1A42]">
                Lecture Rooms
            </div>
            <div>
                <AspectRatio ratio={16/9} className="bg-muted">
                    <img 
                        src="" 
                        alt="" 
                        className=""
                    />
                </AspectRatio>
            </div>

        </div>
        </>
    )
}
export default Room