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


export const TeacherReq = ({ rooms, user_id, buttonSubmit }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [roomID, setRoomID] = useState("")
    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button className="z-20 fixed h-[40px] w-[150px] bottom-10 right-12 font-extralight  bg-[#0F1A42] font-[NiramitReg] text-[18px] text-white rounded-[25px] shadow-lg hover:bg-[#57c6f2] hover:text-[#0F1A42] flex items-center justify-center">
                    Request Room
                </Button>
            </DialogTrigger>
            <DialogContent className="bg-slate-900 border-none font-[NiramitReg] text-[#fff]">
                <DialogHeader>
                    <DialogTitle className="text-[25px]">Request a Room</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-4">
                    <Label className="text-[20px]" htmlFor="room">Select Room</Label>
                    <Select onValueChange={setRoomID}>
                        <SelectTrigger className="h-10 text-[#11124f] bg-white text-[18px]">
                            <SelectValue id="roomNumber" placeholder="Choose a room" />
                        </SelectTrigger>
                        <SelectContent>
                           
                                <SelectItem key={rooms.id} id="roomID" className="font-[NiramitReg] text-[15px]  text-[#242F5B] hover:bg-[#bce9fc]" value={rooms.id}>{rooms.name}</SelectItem>
                            </SelectContent>
                    </Select>
                    <Input className="focus:outline-double h-10 placeholder:font-extralight md:text-[20px] bg-white [18px] font-[NiramitReg] text-[#11124f] text-[20px]" id="reason" type="text" placeholder="Enter reason for request" />
                    <Input type="hidden" id="user_id" value={user_id} />
                    <Input type="hidden" id="roomID" value={roomID} />
                </div>
                <DialogFooter className="flex justify-between">
                    <Button className="hover:font-extrabold hover:bg-transparent font-[10] font-[NiramitReg] bg-transparent text-[20px]" onClick={buttonSubmit}>Submit Request</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}