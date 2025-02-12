import { Button } from "@/components/ui/button";
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
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useCookies } from "react-cookie"
import { useParams } from "react-router-dom";
import { getCategory, getCategoryId } from "../api/category";
import { useEffect, useMemo } from "react";
import { useState } from "react";


const rooms = [
  "Room 111", "Room 112", "Room 143", "Room 145", "Room 147", "Room 201", "Room 202",
  "Room 206", "Room 207", "Room 209", "Room 212", "Room 315", "Room 317", "Room 323",
  "Room 324", "Room 335", "Room 336"
];





export default function Room() {
  useEffect(() => {
    refreshCategory()
    refreshCategoryById()
  }, [])
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies()
  const token = cookies.token
  const { id } = useParams();

  const cat = useMemo(() => {
    if (categories.length != 0) {
      if (id) {
        return category.filter(x => x.room.map(x => x.category_id === id))
      } else {
        return categories
      }
    }
    else {
      return categories
    }
  }, [categories, category])

  const buttonSubmit = () => {
    setIsOpen(false);
    const roomNumber = $("#roomNum")
  }
  const refreshCategoryById = () => {
    if (id) {
      getCategoryId(id, "GET").then(res => {
        if (res?.ok) {
          setCategory([res.data])
        }
      })
    }
  }

  const refreshCategory = () => {
    getCategory().then(res => {
      if (res?.ok) {
        setCategories(res.data)
      }
    })
  }

  return (
    <>
      <div className="min-h-screen flex justify-center items-center flex-wrap">
        <div className="ml-3 mr-3 sm:ml-2 sm:mr-0">
          {cat.map(r =>
            <div dir="ltr" className="mb-7  sm:mb-3">
              <p className="text-[50px]">{r.category}</p>
              <div className="scroll-ms-6 flex gap-2 flex-wrap">
                {r.room.map(r => (
                  <div className="border-slate-700/25 border-[3px] rounded-[20px] hover:border-slate-700">
                    <div className="w-[250px]">
                      {r.name}
                      <img src={`../src/assets/images/rooms/${r.name}.jpg`} className="" alt="" />
                    </div>
                  </div>
                )
                )}
              </div>
            </div>
          )}
        </div>

      </div>
      <div className="flex">
        {/* <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button className="fixed bottom-10 right-12 font-bold p-7 bg-[#0F1A42] font-[NiramitReg] text-[18px] text-white rounded-[25px] shadow-lg hover:bg-[#3F9DC1] hover:text-[#0F1A42] flex items-center justify-center">
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
              <SelectContent>
                {rooms.map((room, index) => (
                  <SelectItem key={index} id="roomNum" value={room}>{room}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Label className="text-[20px]" htmlFor="reason">Reason</Label>
            <Input className="focus:outline-double h-10 placeholder:font-extralight md:text-[20px] bg-white [18px] font-[NiramitReg] text-[#11124f] text-[20px]" id="reason" type="text" placeholder="Enter reason for request" />
          </div>
          <DialogFooter className="flex justify-between">
            <Button className="hover:font-extrabold hover:bg-transparent font-[10] font-[NiramitReg] bg-transparent text-[20px]" onClick={() => setIsOpen(false)}>Cancel</Button>
            <Button className="hover:font-extrabold hover:bg-transparent font-[10] font-[NiramitReg] bg-transparent text-[20px]" onClick={buttonSubmit}>Submit Request</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog> */}
      </div>
      {/* </div> */}
    </>
  );
}
