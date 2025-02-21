import { Pencil, Trash2 } from 'lucide-react'
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog"
import { Input } from "../ui/input";
import { toast } from 'react-toastify';
import $ from "jquery"
import { Button } from '../ui/button';
import { useState } from 'react';
import { DelTeacherById, PatchTeacherById } from '../../api/teacher';
import { Label } from '../ui/label';


export default function AdminPowers({ teacher, admin, Teacher, Show, UpdSched, setShow, SelectForSections,SelectForWeekdays,SelectForRooms}) {
    const [categoryById, setCategoryById] = useState("")
    const [close, setClose] = useState(false)
    const [save, setSave] = useState(false)
    const DelTeacher = () => {
        const id = teacher
        return (
            DelTeacherById(id, admin, "DELETE").then(res => {
                if (res?.ok) {
                    toast.success(res.message)
                    setSave(false)
                }
            })
        )
    }
    const UpdTeacher = () => {
        const id = teacher
        const name = $("#name").val()
        const category = categoryById.toString()
        return (
            PatchTeacherById(id, admin, "PATCH", { name: name, category_id: category }).then(res => {
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
                    <DialogContent className="bg-[#11172E] h-[200px]">
                        <DialogTitle className="text-white">Delete</DialogTitle>
                        <DialogDescription>Teacher Name: ({Teacher.name})</DialogDescription>
                        <p className="text-[#fff] font-[NiramitReg] ">Are you sure you want to delete this Teacher?</p>
                        <div className="border-t-[1px] h-[30px]">
                            <Button onClick={() => setSave(false)} className={"fixed bottom-4 left-12 w-[50px] border font-[NiramitReg] text-[18px] border-none border-white bg-transparent hover:bg-transparent text-white hover:font-bold"}>Cancel</Button>
                            <Button onClick={() => DelTeacher()} className={" fixed bottom-4 right-8 w-[50px] border font-[NiramitReg] text-[18px] border-none hover:bg-transparent text-white hover:font-bold bg-transparent "}>Yes</Button>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
            <Dialog open={close} onOpenChange={setClose}>
                <DialogTrigger className=" z-10  right-2 top-2 absolute hover:rounded-md bg-transparent size-8 rounded-[50%]">
                    <Pencil className="ml-[4px] mt-[2px] p-[2px] text-[#ffffff] hover:w-[28px] hover:h-[28px] " />
                </DialogTrigger>
                <DialogContent show="true" className="bg-[#11172E] font-[NiramitReg] text-[#fff] w-[430px] h-[220px]">
                      {!Show? <>
                       <DialogTitle className="font-thin">Edit Teacher</DialogTitle>
                        <DialogDescription>
                            Replace the Teacher name: {Teacher.name}
                        </DialogDescription>
                        <Input id="name" type="text" className="bg-white text-[#000] placeholder-input" placeholder="Teacher Name" />
                       </> :<div className="grid w-full max-w-sm items-center gap-1.5">
                                    {SelectForSections}
                                    {SelectForWeekdays}
                                    {SelectForRooms}
                                    {/* {selectForAll("section", sections, setSection, "Section")}
                                    {selectForAll("weekday", weekdays, setDays, "day")}
                                    {selectForAll("room", rooms, setRoom, "room")} */}
                                    <Label htmlFor="picture">Update a Teacher's Schedule:</Label>
                                    <Input id="picture" type="text" className="bg-white text-[#000] placeholder:hello " />
                                </div>}
                    <div className='border-t-[1px] h-[30px]'>
                        <Button onClick={Show ? () => UpdTeacher() : () => UpdSched} className={"fixed right-8 bottom-4 text-[18px] text-white w-[50px] font-[NiramitReg] border-white bg-transparent hover:bg-transparent hover:font-bold"}>Save</Button>
                        <Button onClick={Show ? () => setShow(false) : () => setShow(true)} className={"fixed bottom-4 left-48 w-[50px] font-[NiramitReg] text-[18px] border-white bg-transparent hover:bg-transparent text-white hover:font-bold"}>{!Show ? "Edit Schedule" : "Edit Name"}</Button>
                        <Button onClick={() => setClose(false)} className={"fixed bottom-4 left-12 w-[50px] font-[NiramitReg] text-[18px] border-white bg-transparent hover:bg-transparent text-white hover:font-bold"}>Cancel</Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div >
    )
}