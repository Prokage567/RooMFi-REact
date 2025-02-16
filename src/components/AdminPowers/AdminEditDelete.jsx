import {  Pencil,X } from 'lucide-react'
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle,
    DialogDescription,
  } from "@/components/ui/dialog";
  import { Label } from "@radix-ui/react-label";
  import { Input } from "../ui/input";
import { Button } from '../ui/button';



export const AdminPowers = (input,Del) => {
    return (
        <div>
            <div className="z-20  hover:rounded-md  absolute left-2 top-2 bg-[#0F172A]/70 rounded-[50%]  h-[30px]  w-[30px] ">
                <X onClick={Del} className="text-[#ffffff] ml-[3px] mt-[3px] " />
            </div>
            <div className="z-10 absolute right-2 top-2">
                <Dialog>
                    <DialogTrigger className=" hover:rounded-md bg-[#0F172A]/70 h-[30px] w-[30px] rounded-[50%]">
                        <Pencil className="ml-[6px] h-[18px] w-[18px] text-[#ffffff]" />
                    </DialogTrigger>

                    <DialogContent className="bg-[#11172E] font-[NiramitReg] text-[#fff]">
                        <DialogTitle className="font-thin">Edit Room Name</DialogTitle>
                        
                        <DialogDescription>
                            Replace the room name: {input.name}
                        </DialogDescription>

                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="picture">Replace Room Name</Label>
                            <Input id="picture" type="text" className="bg-white text-[#000] placeholder:hello " maxlength={4} />
                        </div>
                    
                        <Button className="border font-[NiramitReg] hover:text-[15px] border-white bg-transparent hover:bg-transparent hover:font-bold"> Save</Button>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}