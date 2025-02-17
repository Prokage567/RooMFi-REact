import { Pencil, X } from 'lucide-react'
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
import { getRoomId } from "../../api/room"
import { toast } from 'react-toastify';
import $ from "jquery"
import { useState } from 'react';


export const AdminPowers = (input, admin) => {
    
    const DelRoomById = () => {
        const id = input.id
        getRoomId(id, admin, "DELETE").then(res => {
            if (res?.ok) {
                toast.success(res.message)
            }
        })
    }
    const UpdRoomById = () => {
        const id = input.id
        const newName = $("#ChangeName").val()
        const catID = $("#categoryID").val()
        getRoomId(id, admin, "PATCH", { name: newName, category_id: catID }).then(res => {
            if (res?.ok) {
                toast.success(res.message)
            }
        })
    }
    return (
        <div>
            <div className="z-10  hover:rounded-md absolute left-2 top-2 bg-[#0F172A]/70 rounded-[50%]  h-[30px]  w-auto ">
                <X onClick={() => DelRoomById()} className="text-[#ffffff] ml-[3px] mt-[3px] " />
            </div>
            <Dialog  onOpenChange={() => UpdRoomById()}>
                <DialogTrigger className=" z-10  right-2  top-2 absolute hover:rounded-md bg-[#0F172A]/70 h-[30px] w-[30px] rounded-[50%]">
                    <Pencil className="ml-[6px] h-[18px] w-[18px] text-[#ffffff] " />
                </DialogTrigger>

                <DialogContent show={true} className="bg-[#11172E] font-[NiramitReg] text-[#fff] w-[430px]">
                    <DialogTitle className="font-thin">Edit Room Name</DialogTitle>

                    <DialogDescription>
                        Replace the room name: {input.name}
                    </DialogDescription>

                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label >Replace Room Name</Label>
                        <Input id="ChangeName" maxLength="4" type="text" className="bg-white text-[#000] placeholder-input" placeholder="Update Room's name" />
                        <Input id="categoryID" maxLength="4" type="text" className="bg-white text-[#000] placeholder-input" placeholder="Update Room's name" />
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}