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
import { Button } from '@mui/material';

export const AdminPowers = (input) => {
    return (
        <div>
            <div className="z-20  hover:rounded-md  absolute left-2 top-2 bg-[#0F172A]/70 rounded-[50%]  h-[30px]  w-[30px] ">
                <X className="text-[#ffffff] ml-[3px] mt-[3px] " />
            </div>
            <div className="z-10 absolute right-2 top-2">
                <Dialog>
                    <DialogTrigger className=" hover:rounded-md bg-[#0F172A]/70 h-[30px] w-[30px] rounded-[50%]">
                        <Pencil className="ml-[6px] h-[18px] w-[18px] text-[#ffffff]" />
                    </DialogTrigger>

                    <DialogContent className="bg-[#11172E] font-[NiramitReg] text-[#fff]">
                        <DialogTitle className="font-thin">Input new Image</DialogTitle>
                        <DialogDescription>
                            Replace the current image
                        </DialogDescription>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="picture">Image</Label>
                            <Input id="picture" type="file" className="bg-white text-[#000]" />
                        </div>
                        <div>Preview</div>
                        <div className="w-[300px] h-[200px] border rounded-[20px]">
                            <img src={`../src/assets/images/rooms/${input.name}.jpg`} className=" w-[300px] border-[1px] border-[#0F172A]/80 h-[200px] rounded-[20px] "></img>
                        </div>
                        <Button className="border border-white bg-transparent hover:bg-transparent hover:font-bold"> Save</Button>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    )
}