import * as React from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useCookies } from 'react-cookie'
import { getRoom } from "../api/room";
import { lecture, science, computer, electronic,electrical, autoMecha, others }from "./rooms/rooms"


const rooms = [
  "Room 111", "Room 112", "Room 143", "Room 145", "Room 147", "Room 201", "Room 202",
  "Room 206", "Room 207", "Room 209", "Room 212", "Room 315", "Room 317", "Room 323",
  "Room 324", "Room 335", "Room 336"
];



function RoomCarousel({ units, title }) {
  return (
    <div className="max-w-full flex flex-col items-start p-5">
      <h1 className="md:text-[45px] font-[NiramitReg] font-bold text-[#0F1A42]">{title}</h1>
      <Carousel className="w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth">
        <CarouselContent className="ml-1 mr-1 flex">
          {units.map((unit, index) => (
            <CarouselItem key={index} className="basis-1/2 md:basis-1/3 p-4 flex-shrink-0 relative group overflow-hidden snap-center">
              <img
                src={unit.src} 
                alt={unit.title} 
                className="w-full aspect-[16/9] object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110 hover:rounded-lg"
                />
              <div className="absolute bottom-0 left-0 right-0 text-center bg-[#0F1A42] bg-opacity-75 font-[NiramitReg] text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out rounded-b-lg">
                <h3 className="text-[22px] font-bold">{unit.title}</h3>
                <p className="text-[18px] font-thin">{unit.description}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-80" />
        <CarouselNext className="absolute right-0 top-1/2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-80" />
      </Carousel>
    </div>
  );
}

export default function Room() {

  const [isOpen, setIsOpen] = React.useState(false);
  const [cookies, setCookie, removeCookie] = useCookies()
  const token = cookies.token
  
  const buttonSubmit = () => {
    setIsOpen(false);
    const roomNumber = $("#roomNum")
    getRoom([token],"POST").then(res=>(
    console.log(res)   
    ))
  };

  return (
    <>
    <div className="snap-x snap snap-always min-h-screen p-8 flex flex-col items-center">
      <RoomCarousel units={lecture} title="Lecture Rooms" />
      <RoomCarousel units={science} title="Science Rooms" />
      <RoomCarousel units={computer} title="Computer Laboratories" />
      <RoomCarousel units={electronic} title="Electronic Laboratories" />
      <RoomCarousel units={electrical} title="Electrical Laboratories" />
      <RoomCarousel units={autoMecha} title="Automations and Mechatronics" />
      <RoomCarousel units={others} title="Other Rooms" />
    </div>

    <div className="flex">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
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
      </Dialog>
    </div>
    </>
  );
}
