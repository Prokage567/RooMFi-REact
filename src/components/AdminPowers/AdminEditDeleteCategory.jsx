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
import { DelCategoryId, UpdCategoryId } from '../../api/category';


export default function AdminPowers1({ input, admin, reload }) {
    const [close, setClose] = useState(false)
    const [save, setSave] = useState(false)
    const DelCategoryById = () => {
        const id = input
        return (
            DelCategoryId(id, admin).then(res => {
                if (res?.ok) {
                    toast.success(res.message)
                    setSave(false)
                    reload
                }
            })
        )
    }
    const UpdCategoryById = () => {
        const id = input
        const name = $("#name").val()
        return (
            UpdCategoryId(id, admin, { category: name }).then(res => {
                if (res?.ok) {
                    toast.success(res.message)
                    setClose(false)
                    reload
                }
            })
        )
    }
    return (
        <div>
            <div className="z-10 absolute hover:rounded-md ml-10 m-auto mt-[-30px] bg-[#0F172A]/70 rounded-[50%] size-8">
                <Dialog open={save} onOpenChange={setSave}>
                    <DialogTrigger>
                        <Trash2 className="text-[#ffffff] ml-[4px] mt-[4px] " />
                    </DialogTrigger>
                    <DialogContent className="bg-[#11172E] h-[200px]">
                        <DialogDescription></DialogDescription>
                        <DialogTitle className="text-white">Delete</DialogTitle>
                        <DialogDescription>Room: {input.name}</DialogDescription>
                        <p className='text-[#fff]'>Are you sure you want to delete this category?</p>
                        <div className="border-t-[1px] h-[30px]">
                            <Button onClick={() => setSave(false)} className={"fixed bottom-2 left-12 w-[50px] font-[NiramitReg] text-[18px] border-white bg-transparent hover:bg-transparent text-white hover:font-bold"}>Cancel</Button>
                            <Button onClick={() => DelCategoryById()} className={"fixed bottom-2 right-12 text-[18px] w-[40px] hover:font-bold font-[NiramitReg]  border-white bg-transparent hover:bg-transparent text-white"}>Yes</Button>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
            <Dialog open={close} onOpenChange={setClose}>
                <DialogTrigger className="absolute z-10 m-auto mt-[-30px] bg-[#0F172A]/70 hover:rounded-md size-8 rounded-[50%]">
                    <Pencil className="ml-[4px] mt-[2px] text-[#ffffff] hover:text-[#fff]/30" />
                </DialogTrigger>

                <DialogContent show="true" className="bg-[#11172E] font-[NiramitReg] text-[#fff] w-[430px] h-[300px]">
                    <DialogTitle className="font-thin">Edit Category</DialogTitle>
                    <DialogDescription>
                        Category Name: {input.category}
                    </DialogDescription>
                    <Label>Replace Category:</Label>
                    <Input id="name" type="text" className="bg-white text-[#000] placeholder-input" placeholder="Category name" />
                    <div className="border-t-[1px]">
                        <Button onClick={() => setClose(false)} className={"fixed bottom-2 left-12 w-[50px] font-[NiramitReg] text-[18px] border-white bg-transparent hover:bg-transparent text-white hover:font-bold"}>Cancel</Button>
                        <Button onClick={() => UpdCategoryById()} className={"fixed bottom-2 right-12 text-[18px] w-[40px] hover:font-bold font-[NiramitReg]  border-white bg-transparent hover:bg-transparent text-white"}>Yes</Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}