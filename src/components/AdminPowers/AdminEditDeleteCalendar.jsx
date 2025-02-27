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
import { useContext, useState } from 'react';
import { delSched, UpdSched } from '../../api/sched';
import { useCookies } from 'react-cookie';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../context/context';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function AdminPowers1({ input}) {
    const { getSectionbyId, user, Teachers, Sections, Rooms } = useContext(AuthContext)
    const { id } = useParams()
    const [cookies] = useCookies()
    const token = cookies.token
    const [show, setShow] = useState(0)
    const [save, setSave] = useState(false)
    const [teacher, setTeacher] = useState("")
    const [room, setRoom] = useState("")
    const DelSchedById = () => {
        const id2 = input.id
        return (
            delSched(token, id2).then(res => {
                if (res?.ok) {
                    toast.success(res.message)
                    getSectionbyId(id)
                    setSave(false)
                }
            })
        )
    }
    const UpdSchedById = () => {
        const id2 = input.id
        const teacher_id = teacher
        const room_id = room
        const subject = $("#subject").val()
        const end_time = $("#endTime").val()
        const start_time = $("#strTime").val()
        const date = $("#date").val()
        const section_id = $("#section").val()
        return (
            UpdSched( token, id2, { teacher_id,room_id,subject,end_time,start_time, date,section_id }).then(res => {
                if (res?.ok) {
                    toast.success(res.message)
                    getSectionbyId(id)
                    setSave(false)
                }
            })
        )
    }
    const selectForAll = (label, inputs, setvalue, input) => {
        return (<>
        
            <div className="font-[NiramitReg] text-white text-sm mt-2">{label}</div>
            <Select onValueChange={setvalue} id="room" className="font-[NiramitReg] ">
                <SelectTrigger className="h-10  text-[#11124f] bg-white text-sm ">
                    <SelectValue placeholder={`Select a ${input}`} />
                </SelectTrigger>
                <SelectContent id="room" className=" font-[NiramitReg]" >
                    {inputs.map(room =>
                        <SelectItem className="text-sm text-[#242F5B] hover:bg-[#bce9fc]" value={room.id}> {inputs == Sections ? room.name : inputs == Rooms ? `${room.name} - ${room.category?.category}` : room.name} </SelectItem>
                    )}
                </SelectContent>
            </Select>
        </>
        )
    }
    return (

        <div>
             {user ? user.map(u => u.role_id === "admin" ?
            <div className="z-10 absolute hover:rounded-md m-auto -ml-8 mt-[0px] size-8">
                <Dialog open={save} onOpenChange={setSave}>
                    <DialogTrigger>
                        <>
                            <div className=' bg-black/0 h-[18px] w-[140px] z-10 absolute hover:rounded-sm hover:border-[#242F5B] hover:border-[2px] '></div>
                        </>
                    </DialogTrigger>
                    <DialogContent className="bg-[#11172E] text-white h-auto">
                        {show ? <>
                            {selectForAll("Room:", Rooms, setRoom, "Room")}
                            {selectForAll("Teacher:", Teachers, setTeacher, "Teacher")}
                            <Input id="subject" type="text" className="bg-white text-[#000]" placeholder="subject" />
                            <Input id="section" type="hidden" className="bg-white text-[#000]" value={input.section_id} />
                            <Input id="date" type="hidden" className="bg-white text-[#000]" value={input.date}/>
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
                        </>
                            : <>
                                <DialogDescription></DialogDescription>
                                <DialogTitle className="text-white">Delete</DialogTitle>
                                <DialogDescription>Schedule: {input?.date}</DialogDescription>
                                <p className='text-[#fff]'>Are you sure you want to delete this schedule?</p>
                            </>}
                        <div className="border-t-[1px] h-[30px]">
                            <Button onClick={() => setSave(false)} className={"fixed bottom-2 left-12 font-[NiramitReg] text-[18px] border-white bg-transparent hover:bg-transparent text-white hover:font-bold"}>Cancel</Button>
                            <Button onClick={!show ? () => setShow(1) : () => setShow(0)} className={"fixed bottom-2 left-[13vw] text-[18px]  hover:font-bold font-[NiramitReg]  border-white bg-transparent hover:bg-transparent text-white"}>{!show ? "Edit Schedule" : "Delete Schedule"}</Button>
                            <Button onClick={show ? () => UpdSchedById() : () => DelSchedById()} className={"fixed bottom-2 right-12  text-[18px] hover:font-bold font-[NiramitReg]  border-white bg-transparent hover:bg-transparent text-white"}>Yes</Button>
                        </div>
                    </DialogContent>
                </Dialog>
            </div> :""):""}
            {/* <div className='z-10 absolute hover:rounded-md ml-1 m-auto mt-[19px] size-8'>

                <Dialog open={close} onOpenChange={setClose}>
                    <DialogTrigger className="absolute z-10 m-auto hover:bg-slate-200 h-[35px] border-r-[2px] border-r-[#242F5B]/40 w-[35px] ">
                        <Pencil className="ml-[4px] mt-[2px] text-[#242F5B] h-9 " />
                    </DialogTrigger>

                    <DialogContent show="true" className="bg-[#11172E] font-[NiramitReg] text-[#fff] w-[430px] h-[300px]">
                        <DialogTitle className="font-thin">Edit Category</DialogTitle>
                        <DialogDescription>
                            Category Name: {input?.category}
                        </DialogDescription>
                        <Label>Replace Category:</Label>
                        <Input id="name" type="text" className="bg-white text-[#000] placeholder-input" placeholder="Category name" />
                        <div className="border-t-[1px]">
                            <Button onClick={() => setClose(false)} className={"fixed bottom-2 left-12 w-[50px] font-[NiramitReg] text-[18px] border-white bg-transparent hover:bg-transparent text-white hover:font-bold"}>Cancel</Button>
                            <Button onClick={() => UpdCategoryById()} className={"fixed bottom-2 right-12 text-[18px] w-[40px] hover:font-bold font-[NiramitReg]  border-white bg-transparent hover:bg-transparent text-white"}>Yes</Button>
                        </div>
                    </DialogContent>
                </Dialog>
            </div> */}
        </div>
    )
}