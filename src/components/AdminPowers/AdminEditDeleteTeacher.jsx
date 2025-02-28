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
import PopUpCalendar from '../popUpCalendar';


export default function AdminPowers({ teacher, admin, Teacher, Show, UpdSched, setShow, SelectForSections, SelectForRooms, SelectForSched}) {
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
                    <DialogTrigger className=" hover:bg-[#fff]/25 h-[30px] w-[35px] rounded-[20px]" >
                        <Trash2 className="text-[#ffffff] ml-[4px] mt-[4px] hove:text-blue" />
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
                <DialogTrigger className=" hover:bg-[#fff]/25 z-10  right-2 top-2 absolute  bg-transparent size-8 rounded-[20px] ">
                    <Pencil className="ml-[4px] mt-[2px] p-[2px] text-[#ffffff]" />
                </DialogTrigger>
                <DialogContent show="true" className="bg-[#11172E] font-[NiramitReg] text-[#fff] w-[430px] h-auto">
                    {!Show ? <>
                        <DialogTitle className="font-thin">Edit Teacher</DialogTitle>
                        <DialogDescription>
                            Replace the Teacher name: {Teacher.name}
                        </DialogDescription>
                        <Input id="name" type="text" className="bg-white text-[#000] placeholder-input" placeholder="Teacher Name" />
                    </> : <>
                    <div className="grid w-full max-w-sm items-center gap-1">
                        {SelectForSections}
                        {SelectForRooms}
                        {SelectForSched}
                        <Label htmlFor="picture" className="pb-1 pt-3">Subject:</Label>
                        <Input id="subject" type="text" className="bg-white text-[#000] placeholder:hello " />
                        <Input id="teacher" type="hidden" value={Teacher.id} className="bg-white text-[#000] "/>
                        <Input id="teacher" type="hidden" value={Teacher.schedules.date} className="bg-white text-[#000] "/>
                        <Input id="id" type="hidden" className="bg-white text-[#000] "/>
                    </div>
                        <div className="flex flex-row w-[385px] -mt-4">
                            <div>
                                <div className=" w-[385px] border-b-[1px] border-[#fff]/50 pb-2">
                                    <Label className="text-[17px] ">Time</Label>
                                </div>
                                <div className="flex justify-around">
                                    <div className="pt-2">
                                        <Label className="" >From:</Label>
                                        <Input id="strTime" className="border-none focus:outline-white " type="time" />
                                    </div>

                                    <div className="pt-2">
                                        <Label className="]">To:</Label>
                                        <Input id="endTime" className="border-none text-slate-50" type="time" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>}
                    <div className='border-t-[1px] h-[30px]'>
                        <Button onClick={!Show ? () => UpdTeacher() : UpdSched} className={"fixed right-8 bottom-4 text-[18px] text-white w-[50px] font-[NiramitReg] border-white bg-transparent hover:bg-transparent hover:font-bold"}>Save</Button>
                        <Button onClick={Show ? () => setShow(false) : () => setShow(true)} className={"fixed bottom-4 left-48 w-[50px] font-[NiramitReg] text-[18px] border-white bg-transparent hover:bg-transparent text-white hover:font-bold"}>{!Show ? "Edit Schedule" : "Edit Name"}</Button>
                        <Button onClick={() => setClose(false)} className={"fixed bottom-4 left-12 w-[50px] font-[NiramitReg] text-[18px] border-white bg-transparent hover:bg-transparent text-white hover:font-bold"}>Cancel</Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div >
    )
}