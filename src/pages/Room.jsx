import * as React from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

import Room147 from "../assets/images/rooms/147.jpg";
import Room201 from "../assets/images/rooms/201.jpg";
import Room202 from "../assets/images/rooms/202.jpg";
import Room209 from "../assets/images/rooms/209.jpg";
import Room317 from "../assets/images/rooms/317.jpg";

const lecture = [
  { src: Room317, title: "Room 317", description: "Available" },
  { src: Room201, title: "Room 201", description: "Unavailable" },
  { src: Room202, title: "Room 202", description: "Available" },
  { src: Room209, title: "Room 209", description: "Available" },
  { src: Room317, title: "Room 317", description: "Available" },
  { src: Room201, title: "Room 201", description: "Unavailable" },
  { src: Room202, title: "Room 202", description: "Available" },
  { src: Room209, title: "Room 209", description: "Available" }
];

const science = [
  { src: Room209, title: "Room 209", description: "Available" },
  { src: Room317, title: "Room 317", description: "Available" },
  { src: Room201, title: "Room 201", description: "Unavailable" },
  { src: Room202, title: "Room 202", description: "Available" },
  { src: Room209, title: "Room 209", description: "Available" }
];

const computer = [
  { src: Room147, title: "Room 147", description: "Unavailable" },
  { src: Room147, title: "Room 147", description: "Unavailable" },
  { src: Room147, title: "Room 147", description: "Unavailable" },
  { src: Room147, title: "Room 147", description: "Unavailable" },
  { src: Room147, title: "Room 147", description: "Unavailable" },
  { src: Room147, title: "Room 147", description: "Unavailable" },
  { src: Room147, title: "Room 147", description: "Unavailable" },
  { src: Room147, title: "Room 147", description: "Unavailable" },
  { src: Room147, title: "Room 147", description: "Unavailable" },
];

const electrical = [
  { src: Room147, title: "Room 147", description: "Unavailable" },
  { src: Room147, title: "Room 147", description: "Unavailable" },
  { src: Room147, title: "Room 147", description: "Unavailable" },
  { src: Room147, title: "Room 147", description: "Unavailable" },
  { src: Room147, title: "Room 147", description: "Unavailable" },
  { src: Room147, title: "Room 147", description: "Unavailable" },
  { src: Room147, title: "Room 147", description: "Unavailable" },
  { src: Room147, title: "Room 147", description: "Unavailable" },
  { src: Room147, title: "Room 147", description: "Unavailable" },
];



function RoomCarousel({ units, title }) {
  return (
    <div className="mb-8 w-full flex flex-col items-start">
      <h1 className="md:text-[45px] font-[NiramitReg] font-bold text-[#0F1A42]">{title}</h1>
      <Carousel className="w-full max-w-7xl mx-auto flex">
        <CarouselContent className="flex gap-6">
          {units.map((unit, index) => (
            <CarouselItem key={index} className="basis-1/2 md:basis-1/3 p-4 flex-shrink-0">
              <Card className="shadow-lg relative group overflow-hidden">
                <CardContent className="p-4">
                  <img 
                    src={unit.src} 
                    alt={unit.title} 
                    className="w-full aspect-[16/9] object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-[#0F1A42] bg-opacity-75 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <h3 className="text-xl font-bold">{unit.title}</h3>
                    <p className="text-lg">{unit.description}</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-80" />
        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-80" />
      </Carousel>
    </div>
  );
}

export default function Room() {
  return (
    <div className="min-h-screen p-8 flex flex-col items-center">
      <RoomCarousel units={lecture} title="Lecture Rooms" />
      <RoomCarousel units={computer} title="Computer Laboratories" />
      <RoomCarousel units={electrical} title="Electrical Laboratories" />
    </div>
  );
}
