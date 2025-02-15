import { Button } from "../ui/button";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter
} from "@/components/ui/dialog";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


export const teacherReq = (Open, IsOpen, rooms, buttonSubmit) => {
    return (
        <Dialog open={Open} onOpenChange={IsOpen}>
            <DialogTrigger asChild>
                <Button className="z-20 fixed  h-[40px] w-[150px] bottom-10 right-12 font-extralight  bg-[#0F1A42] font-[NiramitReg] text-[18px] text-white rounded-[25px] shadow-lg hover:bg-[#57c6f2] hover:text-[#0F1A42] flex items-center justify-center">
                    Request Room
                </Button>
            </DialogTrigger>
            <DialogContent className="bg-slate-900 border-none font-[NiramitReg] text-[#fff]">
                <DialogHeader>
                    <DialogTitle className="text-[25px]">Request a Room</DialogTitle>
                    <DialogDescription className="text-[15px]">
                        Please select a room and provide a reason for your request.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-4">
                    <Label className="text-[20px]" htmlFor="room">Select Room</Label>
                    <Select>
                        <SelectTrigger className="h-10 text-[#11124f] bg-white text-[18px]">
                            <SelectValue id="roomNumber" placeholder="Choose a room" />
                        </SelectTrigger>
                        <SelectContent className=" h-[280px]">
                            {rooms.map((room, index) => (
                                <SelectItem key={index} id="roomNum" className="font-[NiramitReg] text-[15px]  text-[#242F5B] hover:bg-[#bce9fc]" value={room}>{room}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Label className="text-[20px]" htmlFor="reason">Reason</Label>
                    <Input className="focus:outline-double h-10 placeholder:font-extralight md:text-[20px] bg-white [18px] font-[NiramitReg] text-[#11124f] text-[20px]" id="reason" type="text" placeholder="Enter reason for request" />
                </div>
                <DialogFooter className="flex justify-between">
                    <Button className="hover:font-extrabold hover:bg-transparent font-[10] font-[NiramitReg] bg-transparent text-[20px]" onClick={buttonSubmit}>Submit Request</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}