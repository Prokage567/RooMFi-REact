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
import { 
  AC,
  AI,
  AT,
  ACC
} from "@/components/ui/AC"
import { useCookies } from "react-cookie"
import { useParams } from "react-router-dom";
import { getCategory, getCategoryId } from "../api/category";
import { useEffect, useMemo } from "react";
import { useState } from "react";
import { Label } from "@radix-ui/react-label";
import { Input } from "../components/ui/input";
import { checkToken } from "../api/auth.js"
import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover.jsx";
import { Pencil, SquareCheck, SquareLibrary, SquareX, X } from 'lucide-react';

const rooms = [
  "Room 111", "Room 112", "Room 143", "Room 145", "Room 147", "Room 201", "Room 202",
  "Room 206", "Room 207", "Room 209", "Room 212", "Room 315", "Room 317", "Room 323",
  "Room 324", "Room 335", "Room 336"
];





export default function Room() {
  const { id } = useParams();
  useEffect(() => {
    refreshCategory()
    refreshCategoryById()

    checkToken(token).then(res => {
      if(res?.ok){
        setRole([res.data])
      }
    })

  }, [id])

  const [Role , setRole] = useState ([]);
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies()
  const token = cookies.token
  const refreshCategoryById = () => {
    if (id) {
      getCategoryId(id, "GET").then(res => {
        if (res?.ok) {
          setCategory([res.data])
        }
      })
    }
  }
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
  },[categories,category])
  
  const buttonSubmit = () => {
    setIsOpen(false);
    const roomNumber = $("#roomNum")
  }

  const refreshCategory = () => {
    getCategory().then(res => {
      console.log(res)
      if (res?.ok) {
        setCategories(res.data)
      }
    })
  }

  return (
    <>
      <div className="mt-[10px] ml-[15px] text-[#0F1A42] min-w-screen ">
        <div className="ml-3 mr-3 sm:ml-2 sm:mr-0 flex flex-col items-start">
          {cat.map(r =>
            <div className="mb-7 sm:mb-3">
              <p className="text-[40px] font-[100] mt-[40px] mb-4">{r.category}</p>
                <div className=" mr-[40px] text-[#fff] ml-[50px] min-w-screen overflow-y-auto flex flex-col items-start flex-wrap h-[205px] no-scrollbar gap-[20px] border-r-[2px] border-l-[2px] border-gray-600/20 ">
                {r.room.map(r => (
                    <div className=" border relative hover:scale-95 rounded-[20px]">
                      
                       <div className="z-20  hover:rounded-md  absolute left-2 top-2 bg-[#0F172A]/70 rounded-[50%]  h-[30px]  w-[30px] ">
                         <X className="text-[#ffffff] ml-[3px] mt-[3px] "/>
                       </div>

                      {Role.map(r =>
                      <div> 
                        {r.role_id == "admin" ? 


                        <div className="z-10 absolute right-2 top-2">
                          
                          <Dialog>
                            <DialogTrigger className=" hover:rounded-md bg-[#0F172A]/70 h-[30px] w-[30px] rounded-[50%]">
                              <Pencil className="ml-[6px] h-[18px] w-[18px] text-[#ffffff]"/>
                            </DialogTrigger>

                            <DialogContent className="bg-[#11172E] font-[NiramitReg] text-[#fff]">
                            <DialogTitle className="font-thin">Input new Image</DialogTitle>
                            <DialogDescription>
                              Replace the current image 
                            </DialogDescription>
                              
                              <div className="grid w-full max-w-sm items-center gap-1.5">
                                <Label htmlFor="picture">Image</Label>
                                <Input id="picture" type="file"  className="bg-white text-[#000]"/>
                              </div>

                              <div>Preview</div>

                              <div className="w-[300px] h-[200px] border rounded-[20px]">
                                <img  src={`../src/assets/images/rooms/${r.name}.jpg`} className=" w-[300px] border-[1px] border-[#0F172A]/80 h-[200px] rounded-[20px] "></img>
                              </div>

                            <Button className="border border-white bg-transparent hover:bg-transparent hover:font-bold"> Save</Button>
                            </DialogContent>

                          </Dialog>
                            
                        </div>
                        : ""
                        }
                      </div>
                      )}

                      <div className="z-10 absolute  justify-items-center grid h-[60px] w-full rounded-b-[20px] bg-[#0F172A]/70 bottom-0">
                        <div className=" mt-1 ">
                        {r.name} 
                        </div>
                        <div className="mb-2">
                         { r.schedules? r.schedules == ""? "Available" :"Unavailable": "Unavailable"}
                        </div>
                      </div>
                      

                      <div className="z-0">
                      <img src={`../src/assets/images/rooms/${r.name}.jpg`} className="w-[300px] border-[1px] border-[#0F172A]/80 h-[200px] rounded-[20px] " alt="" />
                      </div>
                    </div>
                )
                )}
                  </div>
            </div>
          )}

        </div>

      </div>
      
      {Role.map( r => 

<div className="flex">
        {r.role_id  == "teacher" ? 
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
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
      : ""
    }
    </div>
      )}



      {Role.map( r => 

      <div className="">
        {r.role_id  == "admin" ? 
          <div className="overflow-auto no-scrollbar">
            <Popover className="h-[300px]">
                  <div className=" fixed bottom-[60px] text-[14px] right-3 z-10 grid justify-items-center  border-[2px] border-[#fff] bg-[#c3f8ff] h-[28px] w-[28px] rounded-[50px]">
                    <div className="mt-[2px]"> 20</div>
                  </div>
               <PopoverTrigger className="fixed bottom-5 right-5 font-extralight h-[60px] w-[60px] bg-[#0F1A42] font-[NiramitReg] text-[18px] text-white rounded-[25px] shadow-lg hover:bg-[#57c6f2] hover:text-[#0F1A42] flex items-center justify-center">            
                <SquareLibrary className="w-[30px] h-[30px] z-0"/>
               </PopoverTrigger>

               <PopoverContent className=" border-[2px] border-[#ffffff] bg-[#0F1A42] shadow-none mr-8 mb-3 h-[480px] rounded-[20px]">

               <AC type="single" collapsible className="w-[250px] text-[14px]  font-[NiramitReg] bg-[#0F1A42] border-b-[1px] border-[#fff]/90 text-[#fff]">
                  <div className="overflow-auto no-scrollbar  h-[450px] ">

                  <AI value="item-1">
                    <AT className="border-b-[1px]  border-[#fff]/30">
                        <div className="">
                          testing
                        </div>
        
                    </AT>
                    <ACC className="h-[90px] overflow-auto no-scrollbar">      
                        <div className="mr-[30px] border-b-[1px] border-[#fff]/30 w-[70px]">
                          201
                        </div>
                        <div className="mt-2">
                          To be used for practice
                        </div>
                        <div className="mt-2">
                          To be used for practice
                        </div>

                        <div className=" mt-2  justify-end flex  flex-wrap h-[20px]" >
                          <div className=" mr-2 hover:text-[#fff]/50 text-[#ffffff]">
                            <SquareCheck/>
                          </div>
                          <div className="  hover:text-[#fff]/50 text-[#ffffff]">
                            <SquareX/>
                          </div>
                        </div>
                    </ACC>
                  </AI>
                  <AI value="item-2">
                    <AT className="border-b-[1px]   border-[#fff]/30">
                        <div>
                          Joshua Garcial Villar Remundo Tacos
                        </div>
                    </AT>
                    <ACC className="h-[90px] overflow-auto no-scrollbar">      
                        <div className="mr-[30px] border-b-[1px] border-[#fff]/30 w-[70px]">
                          201
                        </div>
                        <div className="mt-2">
                          To be used for practice
                        </div>
                        <div className="mt-2">
                          To be used for practice
                        </div>

                        <div className=" mt-2  justify-end flex  flex-wrap h-[20px]" >
                          <div className=" mr-2 hover:text-[#fff]/50 text-[#ffffff]">
                            <SquareCheck/>
                          </div>
                          <div className="  hover:text-[#fff]/50 text-[#ffffff]">
                            <SquareX/>
                          </div>
                        </div>
                    </ACC>
                  </AI>
                  <AI value="item-3">
                    <AT className="border-b-[1px]   border-[#fff]/30">
                        <div>
                          Joshua Garcial Villar Remundo Tacos
                        </div>
                    </AT>
                    <ACC className="h-[90px] overflow-auto no-scrollbar">      
                        <div className="mr-[30px] border-b-[1px] border-[#fff]/30 w-[70px]">
                          201
                        </div>
                        <div className="mt-2">
                          To be used for practice
                        </div>
                        <div className="mt-2">
                          To be used for practice
                        </div>

                        <div className=" mt-2  justify-end flex  flex-wrap h-[20px]" >
                          <div className=" mr-2 hover:text-[#fff]/50 text-[#ffffff]">
                            <SquareCheck/>
                          </div>
                          <div className="  hover:text-[#fff]/50 text-[#ffffff]">
                            <SquareX/>
                          </div>
                        </div>
                    </ACC>
                  </AI>
                  <AI value="item-7">
                    <AT className="border-b-[1px]   border-[#fff]/30">
                        <div>
                          Joshua Garcial Villar Remundo Tacos
                        </div>
                    </AT>
                    <ACC className="h-[90px] overflow-auto no-scrollbar">      
                        <div className="mr-[30px] border-b-[1px] border-[#fff]/30 w-[70px]">
                          201
                        </div>
                        <div className="mt-2">
                          To be used for practice
                        </div>
                        <div className="mt-2">
                          To be used for practice
                        </div>

                        <div className=" mt-2  justify-end flex  flex-wrap h-[20px]" >
                          <div className=" mr-2 hover:text-[#fff]/50 text-[#ffffff]">
                            <SquareCheck/>
                          </div>
                          <div className="  hover:text-[#fff]/50 text-[#ffffff]">
                            <SquareX/>
                          </div>
                        </div>
                    </ACC>
                  </AI>
                  <AI value="item-0">
                    <AT className="border-b-[1px]   border-[#fff]/30">
                        <div>
                          Joshua Garcial Villar Remundo Tacos
                        </div>
                    </AT>
                    <ACC className="h-[90px] overflow-auto no-scrollbar">      
                        <div className="mr-[30px] border-b-[1px] border-[#fff]/30 w-[70px]">
                          201
                        </div>
                        <div className="mt-2">
                          To be used for practice
                        </div>
                        <div className="mt-2">
                          To be used for practice
                        </div>

                        <div className=" mt-2  justify-end flex  flex-wrap h-[20px]" >
                          <div className=" mr-2 hover:text-[#fff]/50 text-[#ffffff]">
                            <SquareCheck/>
                          </div>
                          <div className="  hover:text-[#fff]/50 text-[#ffffff]">
                            <SquareX/>
                          </div>
                        </div>
                    </ACC>
                  </AI>
                  <AI value="item-8">

                    <AT className="border-b-[1px]   border-[#fff]/30">
                        <div>
                          Joshua Garcial Villar Remundo Tacos
                        </div>
                    </AT>
                    <ACC className="h-[90px] overflow-auto no-scrollbar">      
                        <div className="mr-[30px] border-b-[1px] border-[#fff]/30 w-[70px]">
                          201
                        </div>
                        <div className="mt-2">
                          To be used for practice
                        </div>
                        <div className="mt-2">
                          To be used for practice
                        </div>

                        <div className=" mt-2  justify-end flex  flex-wrap h-[20px]" >
                          <div className=" mr-2 hover:text-[#fff]/50 text-[#ffffff]">
                            <SquareCheck/>
                          </div>
                          <div className="  hover:text-[#fff]/50 text-[#ffffff]">
                            <SquareX/>
                          </div>
                        </div>
                    </ACC>
                  </AI>
                  <AI value="item-10">
                    <AT className="border-b-[1px]   border-[#fff]/30">
                        <div>
                          Joshua Garcial Villar Remundo Tacos
                        </div>
                    </AT>
                    <ACC className="h-[90px] overflow-auto no-scrollbar">      
                        <div className="mr-[30px] border-b-[1px] border-[#fff]/30 w-[70px]">
                          201
                        </div>
                        <div className="mt-2">
                          To be used for practice
                        </div>
                        <div className="mt-2">
                          To be used for practice
                        </div>

                        <div className=" mt-2  justify-end flex  flex-wrap h-[20px]" >
                          <div className=" mr-2 hover:text-[#fff]/50 text-[#ffffff]">
                            <SquareCheck/>
                          </div>
                          <div className="  hover:text-[#fff]/50 text-[#ffffff]">
                            <SquareX/>
                          </div>
                        </div>
                    </ACC>
                  </AI>
                  <AI value="item-20">
                    <AT className="border-b-[1px]   border-[#fff]/30">
                        <div>
                          Joshua Garcial Villar Remundo Tacos
                        </div>
                    </AT>
                    <ACC className="h-[90px] overflow-auto no-scrollbar">      
                        <div className="mr-[30px] border-b-[1px] border-[#fff]/30 w-[70px]">
                          201
                        </div>
                        <div className="mt-2">
                          To be used for practice
                        </div>
                        <div className="mt-2">
                          To be used for practice
                        </div>

                        <div className=" mt-2  justify-end flex  flex-wrap h-[20px]" >
                          <div className=" mr-2 hover:text-[#fff]/50 text-[#ffffff]">
                            <SquareCheck/>
                          </div>
                          <div className="  hover:text-[#fff]/50 text-[#ffffff]">
                            <SquareX/>
                          </div>
                        </div>
                    </ACC>
                  </AI>
                  <AI value="item-30">
                    <AT className="border-b-[1px]   border-[#fff]/30">
                        <div>
                          Joshua Garcial Villar Remundo Tacos
                        </div>
                    </AT>
                    <ACC className="h-[90px] overflow-auto no-scrollbar">      
                        <div className="mr-[30px] border-b-[1px] border-[#fff]/30 w-[70px]">
                          201
                        </div>
                        <div className="mt-2">
                          To be used for practice
                        </div>
                        <div className="mt-2">
                          To be used for practice
                        </div>

                        <div className=" mt-2  justify-end flex  flex-wrap h-[20px]" >
                          <div className=" mr-2 hover:text-[#fff]/50 text-[#ffffff]">
                            <SquareCheck/>
                          </div>
                          <div className="  hover:text-[#fff]/50 text-[#ffffff]">
                            <SquareX/>
                          </div>
                        </div>
                    </ACC>
                  </AI>
                  <AI value="item-70">
                    <AT className="border-b-[1px]   border-[#fff]/30">
                        <div>
                          Joshua Garcial Villar Remundo Tacos
                        </div>
                    </AT>
                    <ACC className="h-[90px] overflow-auto no-scrollbar">      
                        <div className="mr-[30px] border-b-[1px] border-[#fff]/30 w-[70px]">
                          201
                        </div>
                        <div className="mt-2">
                          To be used for practice
                        </div>
                        <div className="mt-2">
                          To be used for practice
                        </div>

                        <div className=" mt-2  justify-end flex  flex-wrap h-[20px]" >
                          <div className=" mr-2 hover:text-[#fff]/50 text-[#ffffff]">
                            <SquareCheck/>
                          </div>
                          <div className="  hover:text-[#fff]/50 text-[#ffffff]">
                            <SquareX/>
                          </div>
                        </div>
                    </ACC>
                  </AI>
                  <AI value="item-00">
                    <AT className="border-b-[1px]   border-[#fff]/30">
                        <div>
                          Joshua Garcial Villar Remundo Tacos
                        </div>
                    </AT>
                    <ACC className="h-[90px] overflow-auto no-scrollbar">      
                        <div className="mr-[30px] border-b-[1px] border-[#fff]/30 w-[70px]">
                          201
                        </div>
                        <div className="mt-2">
                          To be used for practice
                        </div>
                        <div className="mt-2">
                          To be used for practice
                        </div>

                        <div className=" mt-2  justify-end flex  flex-wrap h-[20px]" >
                          <div className=" mr-2 hover:text-[#fff]/50 text-[#ffffff]">
                            <SquareCheck/>
                          </div>
                          <div className="  hover:text-[#fff]/50 text-[#ffffff]">
                            <SquareX/>
                          </div>
                        </div>
                    </ACC>
                  </AI>
                  <AI value="item-80">
                    
                    <AT className="border-b-[1px]   border-[#fff]/30">
                        <div>
                          Joshua Garcial Villar Remundo Tacos
                        </div>
                    </AT>
                    <ACC className="h-[90px] overflow-auto no-scrollbar">      
                        <div className="mr-[30px] border-b-[1px] border-[#fff]/30 w-[70px]">
                          201
                        </div>
                        <div className="mt-2">
                          To be used for practice
                        </div>
                        <div className="mt-2">
                          To be used for practice
                        </div>

                        <div className=" mt-2  justify-end flex  flex-wrap h-[20px]" >
                          <div className=" mr-2 hover:text-[#fff]/50 text-[#ffffff]">
                            <SquareCheck/>
                          </div>
                          <div className="  hover:text-[#fff]/50 text-[#ffffff]">
                            <SquareX/>
                          </div>
                        </div>
                    </ACC>
                  </AI>
                  </div>
                </AC>               
               </PopoverContent>
            </Popover>
          </div>
      : ""
      }
      </div>
      )}

      
    </>
  );
}
