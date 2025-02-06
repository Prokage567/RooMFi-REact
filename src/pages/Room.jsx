import * as React from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";


import Room111 from "../assets/images/rooms/111.jpg";
import Room112 from "../assets/images/rooms/112.jpg";
import Room143 from "../assets/images/rooms/143.jpg";
import Room145 from "../assets/images/rooms/145.jpg";
import Room147 from "../assets/images/rooms/147.jpg";
import Room201 from "../assets/images/rooms/201.jpg";
import Room202 from "../assets/images/rooms/202.jpg";
import Room206 from "../assets/images/rooms/206.jpg";
import Room207 from "../assets/images/rooms/207.jpg";
import Room209 from "../assets/images/rooms/209.jpg";
import Room212 from "../assets/images/rooms/212.jpg";
import Room315 from "../assets/images/rooms/315.jpg";
import Room317 from "../assets/images/rooms/317.jpg";
import Room323 from "../assets/images/rooms/323.jpg";
import Room324 from "../assets/images/rooms/324.jpg";
import Room335 from "../assets/images/rooms/335.jpg";
import Room336 from "../assets/images/rooms/336.jpg";

const lecture = [
  { src: Room111, title: "Room 111", description: "Unavailable" },
  { src: Room143, title: "Room 143", description: "Available" },
  { src: Room201, title: "Room 201", description: "Unavailable" },
  { src: Room202, title: "Room 202", description: "Available" },
  { src: Room317, title: "Room 317", description: "Available" },
  { src: Room324, title: "Room 324", description: "Available" },
];

const science = [
  { src: Room209, title: "Room 209 - Biology Lab", description: "Available" },
  { src: Room206, title: "Room 206 - Chemistry Lab", description: "Available" },
];

const computer = [
  { src: Room147, title: "Room 147", description: "Available" },
  { src: Room335, title: "Room 335", description: "Available" },
  { src: Room336, title: "Room 336", description: "Available" },
];

const electronic = [
  { src: Room323, title: "Room 323", description: "Available" },
];

const electrical = [
  { src: Room315, title: "Room 315", description: "Available" },
];

const autoMecha = [
  { src: Room145, title: "Room 145", description: "Unavailable" },
];

const others = [
  { src: Room112, title: "Room 112 - Audio Visual Room", description: "Available" },
  { src: Room207, title: "Room 207 - Drawing Room", description: "Available" },
  { src: Room212, title: "Room 212 - Library", description: "Available" },
];

function RoomCarousel({ units, title }) {
  return (
    <div className="mb-8 w-full flex flex-col items-start">
      <h1 className="md:text-[45px] font-[NiramitReg] font-bold text-[#0F1A42]">{title}</h1>
      <div className="w-full max-w-7xl mx-auto overflow-x-auto scroll-smooth snap-x snap-mandatory">
        <CarouselContent className="flex gap-6">
          {units.map((unit, index) => (
            <CarouselItem key={index} className="basis-1/2 md:basis-1/3 p-4 flex-shrink-0 relative group overflow-hidden snap-center">
              <img 
                src={unit.src} 
                alt={unit.title} 
                className="w-full aspect-[16/9] object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#0F1A42] bg-opacity-75 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out rounded-b-lg">
                <h3 className="text-xl font-bold">{unit.title}</h3>
                <p className="text-lg">{unit.description}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-80" />
        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-80" />
      </div>
    </div>
  );
}
