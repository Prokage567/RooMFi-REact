import * as React from "react"
 
import { Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
   } from "@/components/ui/carousel"
import Room317 from "../assets/images/rooms/317.jpg"
import { Card, CardContent } from "@/components/ui/card"



export default function Room(){

    return(
        <>
        <div className="flex items-center justify-center flex-col">
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            <CarouselItem className="basis-1/4">
              <Card className="shadow-lg">
                <CardContent className="p-2">
                  <img src={Room317} alt="317" className="w-full h-48 object-cover rounded-lg" />
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <Card className="shadow-lg">
                <CardContent className="p-2">
                  <img src={Room317} alt="317" className="w-full h-48 object-cover rounded-lg" />
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <Card className="shadow-lg">
                <CardContent className="p-2">
                  <img src={Room317} alt="317" className="w-full h-48 object-cover rounded-lg" />
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <Card className="shadow-lg">
                <CardContent className="p-2">
                  <img src={Room317} alt="317" className="w-full h-48 object-cover rounded-lg" />
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <Card className="shadow-lg">
                <CardContent className="p-2">
                  <img src={Room317} alt="317" className="w-full h-48 object-cover rounded-lg" />
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <Card className="shadow-lg">
                <CardContent className="p-2">
                  <img src={Room317} alt="317" className="w-full h-48 object-cover rounded-lg" />
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext />
        </Carousel>
        </div>
        </>
    )
  }
