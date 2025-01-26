import React, { useState } from 'react'
import head2 from "../assets/images/head2.svg"
import logo from "../assets/images/logo.svg"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import searchIcon from "../assets/images/searchIcon.svg"


function Homepage() {

  const [allSection, setAllSection] = useState(false);

  const [search, setSearch] = useState("");

  const searchRoom = (s) => {
      setSearch(e.target.value);
      console.log("Searching for: ", e.target.value);
  };
    return (
      <>
      <div className="flex flex-col">
        <img src={head2}/>
        <img className="absolute h-full max-h-screen bg-cover justify-start" src={logo}/>
      </div>

      
      <aside className={cn("fixed w-60 h-full bg-blue-950 text-white shadow-lg flex flex-col p-5 transition-all duration-300 z-50",
      allSection ? "translate-x-0" : "translate-x-full md:translate-x-0")}>

          <nav className="space-y-6">
            <a className="flex items-center p-3 hover:bg-cyan-700">
              <button className="w-5 h-5" >
                <span className="text-lg">Home</span>
              </button>
            </a>

            
            <a className="flex items-center p-1 ">
              <Accordion type="single" collapisble className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="hover:bg-cyan-700">Room</AccordionTrigger>
                    <AccordionContent>Lecture Rooms</AccordionContent>
                    <AccordionContent>Science Laboratories</AccordionContent>
                    <AccordionContent>Computer Laboratories</AccordionContent>
                    <AccordionContent>Electronics Laboratories</AccordionContent>
                    <AccordionContent>Electrical Laboratories</AccordionContent>
                    <AccordionContent>Automations and Mechatronics</AccordionContent>
                    <AccordionContent>Instrumentations</AccordionContent>
                    <AccordionContent>Fiber Optic Laboratory</AccordionContent>
                    <AccordionContent>Other Rooms</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="hover:bg-cyan-700">Section</AccordionTrigger>
                  <AccordionContent>CPROG/AUTO</AccordionContent>
                  <AccordionContent>STEM</AccordionContent>
                  <AccordionContent>1H1</AccordionContent>
                  <AccordionContent>1H2</AccordionContent>
                  <AccordionContent>1H3</AccordionContent>
                  <AccordionContent>IET</AccordionContent>
                  <AccordionContent>IAMT</AccordionContent>
                  <AccordionContent>DAD</AccordionContent>
                  <AccordionContent>DENSO</AccordionContent>
                </AccordionItem>
              </Accordion>
                        </a>


            <a className="flex items-center p-2 hover:bg-cyan-700">
              <button className="w-5 h-5" >
              <span className="text-lg">Teacher</span>
              </button>
            </a>
          </nav>
        </aside>


      <div className="flex relative max-w-md mx-auto">
      <img src={searchIcon}/>
        <Input type="text" placeholder="Search room..." value={search} onChange={searchRoom}
        className="pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-950"/>
        <Button type="submit">Search</Button>
      </div>
      </>
    )
}

export default Homepage