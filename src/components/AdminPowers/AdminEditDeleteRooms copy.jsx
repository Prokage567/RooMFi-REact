import { Pencil, Trash2 } from 'lucide-react'
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog"
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { toast } from 'react-toastify';
import $ from "jquery"
import { Button } from '../ui/button';
import { useState } from 'react';
import { DelPatchTeacherById } from '../../api/teacher';


export default function AdminPowers({ teacher, admin, Teacher }) {
    const [categoryById, setCategoryById] = useState("")
    const [close, setClose] = useState(false)
    const [save, setSave] = useState(false)
    const DelTeacherById = () => {
        const id = teacher
        return (
            DelPatchTeacherById(id, admin, "DELETE").then(res => {
                if (res?.ok) {
                    toast.success(res.message)
                    setSave(false)
                }
            })
        )
    }
    const UpdRoomById = () => {
        const id = teacher
        const name = $("#name").val()
        const category = categoryById.toString()
        console.log(room)
        return (
            DelTeacherById(id, admin, "PATCH", { name: name, category_id: category }).then(res => {
                if (res?.ok) {
                    toast.success(res.message)
                    setClose(false)
                }
            })
        )
    }
    return (
        <div>
            <div className="z-50 hover:rounded-md absolute left-2 top-2 bg-transparent rounded-[50%] size-8 ">
                <Dialog open={save} onOpenChange={setSave} className="font-[NiramitReg] text-[#fff]">
                    <DialogTrigger>
                        <Trash2 className="text-[#ffffff] ml-[4px] mt-[4px] hover:w-[30px] hover:h-[30px] " />
                    </DialogTrigger>
                    <DialogContent className="bg-[#11172E]" div_prop={"flex justify-end"} prop={"text-white w-[10vw] border font-[NiramitReg] hover:text-[15px] border-white bg-transparent hover:bg-transparent hover:font-bold bg-red-500"} show="true" >
                        <DialogTitle className="text-white">Delete</DialogTitle>
                        <DialogDescription>Teacher Name: ({Teacher.name})</DialogDescription>
                        <p className="text-[#fff] font-[NiramitReg] ">Are you sure you want to delete this Teacher <br/>
                         </p>
                         <div className="border-t-[1px] p-2">
                        <Button onClick={() => DelTeacherById()} className={" fixed bottom-2 right-6 w-[50px] border font-[NiramitReg] text-[18px] border-none hover:bg-transparent text-white hover:font-bold bg-transparent "}>Yes</Button>
                         </div>
                    </DialogContent>
                </Dialog>
            </div>
            <Dialog open={close} onOpenChange={setClose}>
                <DialogTrigger className=" z-10  right-2 top-2 absolute hover:rounded-md bg-transparent size-8 rounded-[50%]">
                    <Pencil className="ml-[4px] mt-[2px] p-[2px] text-[#ffffff] hover:w-[28px] hover:h-[28px] " />
                </DialogTrigger>

                <DialogContent show="true" className="bg-[#11172E] font-[NiramitReg] text-[#fff] w-[430px]">
                    <DialogTitle className="font-thin">Edit Room Name</DialogTitle>
                    <DialogDescription>
                        Replace the Teacher name: {Teacher.name}
                    </DialogDescription>

 
                        <Label>Replace Teacher Name</Label>
                        <Input id="name" maxLength="4" type="text" className="bg-white text-[#000] placeholder-input" placeholder="Teacher Name" />
                        {/* <Select onValueChange={setCategoryById} className="font-[NiramitReg]">
                            <SelectTrigger className="h-10  text-[#11124f] bg-white text-[18px] ">
                                <SelectValue placeholder="Select a Category" />
                            </SelectTrigger>
                            <SelectContent className="font-[NiramitReg]" >
                                <SelectItem key={room.id} className="text-[18px] text-[#242F5B] hover:bg-[#bce9fc]" value={`${room.category_id}`}>{category}</SelectItem>
                            </SelectContent>
                        </Select> */}

                    <div className='border-t-[1px] h-[20px]'>
                    <Button onClick={() => UpdRoomById()} type="submit" className={"fixed left-[360px] bottom-4   text-[18px] text-white w-[50px]  font-[NiramitReg] z-20  border-white bg-transparent hover:bg-transparent hover:font-bold"}>Save</Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}