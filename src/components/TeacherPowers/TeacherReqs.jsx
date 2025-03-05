import { Button } from "../ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter
} from "@/components/ui/dialog";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useState } from "react";
import PopUpCalendar from "../popUpCalendar";
import { DialogDescription } from "@radix-ui/react-dialog";


export const TeacherReq = ({ rooms, user_id, buttonSubmit }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [roomID, setRoomID] = useState("")
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button className="z-20 fixed h-[40px] w-[150px] bottom-10 right-12 font-extralight  bg-[#0F1A42] font-[NiramitReg] text-[18px] text-white rounded-[25px]  hover:bg-[#57c6f2] hover:text-[#0F1A42] flex items-center justify-center">
                    Request Room
                </Button>
            </DialogTrigger>
            <DialogContent className="bg-slate-900 border-none font-[NiramitReg] text-[#fff]">
                <DialogHeader>
                    <DialogTitle className="text-[25px]">Request a Room</DialogTitle>
                </DialogHeader>
                <DialogDescription className="text-white/50">Request a room to be used </DialogDescription>
                <div className="flex flex-col gap-4">
                    <Label className="text-[20px]" htmlFor="room">Select Room</Label>
                    <Select onValueChange={setRoomID}>
                        <SelectTrigger className="h-10 text-[#11124f] bg-white text-[18px]">
                            <SelectValue id="roomNumber" placeholder="Choose a room" />
                        </SelectTrigger>
                        <SelectContent>
                        {rooms.map((room)=>
                        <SelectItem key={room.id} id="roomID" className="font-[NiramitReg] text-[15px]  text-[#242F5B] hover:bg-[#bce9fc]" value={room.id}>{room.name}</SelectItem>
                        )}
                        </SelectContent>
                    </Select>
                    <Input className="focus:outline-double h-10 placeholder:font-extralight placeholder:text-[19px] md:text-[20px]  bg-white font-[NiramitReg] text-[#11124f] text-[20px]" id="reason" type="text" placeholder="Enter reason for request" />
                    <div className="z-10 fixed ">

                        <Input type="hidden" id="user_id" value={user_id} />
                        <Input type="hidden" id="roomID" value={roomID} />
                    </div>

                    <PopUpCalendar className="pt-3" />
                        <div className="flex flex-row w-[450px] ">
                        <div>
                            <div className=" w-[465px] border-b-[1px] border-[#fff]/50 pb-2">
                            <Label className="text-[17px] ">Time</Label>
                            </div>
                            <div className="flex justify-around">
                            <div className="pt-2">
                                <Label className="" >From:</Label>
                                <Input id="strTime" className="border-none focus:outline-white " type="time" />
                            </div>
    
                            <div className="pt-2">
                                <Label>To:</Label>
                                <Input id="endTime" className="border-none text-slate-50" type="time" />
                            </div>
                            </div>
                        </div>
                        </div>

                    <div className="border-t-[1px] h-7 ">
                        <div className=" absolute  bottom-4 right-2">
                            <Button className="hover:font-extrabold hover:bg-transparent font-[10] font-[NiramitReg] bg-transparent text-[20px]" onClick={buttonSubmit}>Submit Request</Button>
                        </div>
                    </div>

                </div>

            </DialogContent>
        </Dialog>
    )
}