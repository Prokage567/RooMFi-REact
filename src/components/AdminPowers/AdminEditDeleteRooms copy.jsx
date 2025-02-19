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
    const UpdTeacherById = () => {
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
            <div className="z-50 hover:rounded-md absolute left-2 top-2 bg-[#0F172A]/70 rounded-[50%] size-8">
                <Dialog open={save} onOpenChange={setSave}>
                    <DialogTrigger>
                        <Trash2 className="text-[#ffffff] ml-[4px] mt-[4px]" />
                    </DialogTrigger>
                    <DialogContent className="bg-[#11172E] h-[150px]">
                        <DialogTitle className="text-white">Are you sure you want to delete this Teacher ID: ({Teacher.name})</DialogTitle>
                        <Button onClick={() => setSave(false)} className={"relative top-1 left-[20vw] w-[10vw] border font-[NiramitReg] hover:text-[15px] border-white bg-transparent hover:bg-transparent text-white hover:font-bold bg-red-500 "}>Canccel</Button>
                        <Button onClick={() => DelTeacherById()} className={"relative bottom-12 -mb-32 left-[9vw] w-[10vw] border font-[NiramitReg] hover:text-[15px] border-white bg-transparent hover:bg-transparent text-white hover:font-bold bg-green-500 "}>Save</Button>
                    </DialogContent>
                </Dialog>
            </div>
            <Dialog open={close} onOpenChange={setClose}>
                <DialogTrigger className=" z-10  right-2 top-2 absolute hover:rounded-md bg-[#0F172A]/70 size-8 rounded-[50%]">
                    <Pencil className="ml-[4px] mt-[2px] p-[2px] text-[#ffffff] " />
                </DialogTrigger>

                <DialogContent show="true" className="bg-[#11172E] font-[NiramitReg] text-[#fff] w-[430px] h-[240px]">
                    <DialogTitle className="font-thin">Edit Room Name</DialogTitle>
                    <DialogDescription>
                        Replace the Teacher name: {Teacher.name}
                    </DialogDescription>

                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label>Replace Teacher Name</Label>
                        <Input id="name" maxLength="4" type="text" className="bg-white text-[#000] placeholder-input" placeholder="Update Room's name" />
                    </div>
                    <Button onClick={() => setClose(false)} className={"relative top-1 left-[15vw] w-[10vw] border font-[NiramitReg] hover:text-[15px] border-white bg-transparent hover:bg-transparent text-white hover:font-bold bg-red-500 "}>Canccel</Button>
                    <Button onClick={() => UpdTeacherById()} className={"relative bottom-12 -mb-24 left-[4vw] w-[10vw] border font-[NiramitReg] hover:text-[15px] border-white bg-transparent hover:bg-transparent text-white hover:font-bold bg-green-500 "}>Save</Button>
                </DialogContent>
            </Dialog>
        </div>
    )
}