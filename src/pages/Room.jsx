import React, { useEffect, useState } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { useCookies } from "react-cookie";
import { getRoom } from "@/api/room";

export default function Room() {
  const [rooms, setRooms] = React.useState([]);
  const [roomTypes, setRoomTypes] = React.useState([]);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [isRoomTypeDialogOpen, setIsRoomTypeDialogOpen] = React.useState(false);
  const [editingRoom, setEditingRoom] = React.useState(null);
  const [form, setForm] = React.useState({ type: "", name: "", availability: "Available", image: "" });
  const [newRoomType, setNewRoomType] = React.useState("");
  const [cookies] = useCookies();
  const token = cookies.token;

  React.useEffect(() => {
    getRoom(token, "GET").then(res => {
      if (res.ok) {
        setRooms(res.data);
      }
    });
  }, []);

  const manageSubmit = () => {
    if (editingRoom !== null) {
      updateRoom(token, rooms[editingRoom].id, form).then(res => {
        if (res.ok) {
          setRooms(prevRooms => prevRooms.map((room, index) => index === editingRoom ? res.data : room));
        }
      });
    } else {
      createRoom(token, form).then(res => {
        if (res.ok) {
          setRooms(prevRooms => [...prevRooms, res.data]);
        }
      });
    }
    setForm({ type: "", name: "", availability: "Available", image: "" });
    setEditingRoom(null);
    setIsDialogOpen(false);
  };

  const manageDelete = (index) => {
    const roomId = rooms[index].id;
    deleteRoom(token, roomId).then(res => {
      if (res.ok) {
        setRooms(prevRooms => prevRooms.filter((_, i) => i !== index));
      }
    });
  };

  const manageAddRoomType = () => {
    if (newRoomType.trim() !== "" && !roomTypes.includes(newRoomType)) {
      createRoomType(token, newRoomType).then(res => {
        if (res.ok) {
          setRoomTypes(prevTypes => [...prevTypes, res.data]);
        }
      });
    }
    setNewRoomType("");
    setIsRoomTypeDialogOpen(false);
  };

  return (
    <div className="snap-x snap-always min-h-screen p-8 flex flex-col items-center">
      {rooms.map(room=>
        <div>
          {room.type}
        </div>
      )}
      {/* <Button onClick={() => setIsRoomTypeDialogOpen(true)}>Add Room Type</Button>
      <Button onClick={() => setIsDialogOpen(true)} className="mt-1">Add Room</Button>
      {roomTypes.map((type, index) => (
        <div key={index} className="w-full mt-8">
          <h2 className="text-[30px] font-bold text-[#0F1A42]">{type}</h2>
          <Carousel className="w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth mt-4">
            <CarouselContent className="ml-1 mr-1 flex">
              {rooms.filter(room => room.type === type).map((room, idx) => (
                <CarouselItem key={idx} className="basis-1/2 md:basis-1/3 p-4 flex-shrink-0 relative group overflow-hidden snap-center">
                  {room.image && <img src={room.image} alt={room.type} className="w-full aspect-[16/9] object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110 hover:rounded-lg" />}
                  <div className="absolute bottom-0 left-0 right-0 text-center bg-[#0F1A42] bg-opacity-75 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out rounded-b-lg">
                    <h3 className="text-[22px] font-bold">{room.name}</h3>
                    <p className="text-sm">{room.availability}</p>
                    <div className="mt-2 flex justify-center gap-2">
                      <Button onClick={() => setEditingRoom(idx) & setIsDialogOpen(true)} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">Edit</Button>
                      <Button onClick={() => manageDelete(idx)} className="bg-red-600 text-white p-2 rounded hover:bg-red-800">Delete</Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-80" />
            <CarouselNext className="absolute right-0 top-1/2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-80" />
          </Carousel>
        </div>
      ))} */}
    </div>
  );
}
