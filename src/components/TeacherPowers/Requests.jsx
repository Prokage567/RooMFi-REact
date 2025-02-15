import {
    AC,
    AI,
    AT,
    ACC
  } from "../ui/AC"
  
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover.jsx";
import { Pencil, SquareCheck, SquareLibrary, SquareX, X } from 'lucide-react';
export const request =()=>{
    return(
        <div className="overflow-auto no-scrollbar">
                <Popover className="h-[300px]">
                  <div className=" fixed bottom-[60px] text-[14px] right-3 z-10 grid justify-items-center  border-[2px] border-[#fff] bg-[#c3f8ff] h-[28px] w-[28px] rounded-[50px]">
                    <div className="mt-[2px]"> 20</div>
                  </div>
                  <PopoverTrigger className="fixed bottom-5 right-5 font-extralight h-[60px] w-[60px] bg-[#0F1A42] font-[NiramitReg] text-[18px] text-white rounded-[25px] shadow-lg hover:bg-[#57c6f2] hover:text-[#0F1A42] flex items-center justify-center">
                    <SquareLibrary className="w-[30px] h-[30px] z-0" />
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
                                <SquareCheck />
                              </div>
                              <div className="  hover:text-[#fff]/50 text-[#ffffff]">
                                <SquareX />
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
                                <SquareCheck />
                              </div>
                              <div className="  hover:text-[#fff]/50 text-[#ffffff]">
                                <SquareX />
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
                                <SquareCheck />
                              </div>
                              <div className="  hover:text-[#fff]/50 text-[#ffffff]">
                                <SquareX />
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
                                <SquareCheck />
                              </div>
                              <div className="  hover:text-[#fff]/50 text-[#ffffff]">
                                <SquareX />
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
                                <SquareCheck />
                              </div>
                              <div className="  hover:text-[#fff]/50 text-[#ffffff]">
                                <SquareX />
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
                                <SquareCheck />
                              </div>
                              <div className="  hover:text-[#fff]/50 text-[#ffffff]">
                                <SquareX />
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
                                <SquareCheck />
                              </div>
                              <div className="  hover:text-[#fff]/50 text-[#ffffff]">
                                <SquareX />
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
                                <SquareCheck />
                              </div>
                              <div className="  hover:text-[#fff]/50 text-[#ffffff]">
                                <SquareX />
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
                                <SquareCheck />
                              </div>
                              <div className="  hover:text-[#fff]/50 text-[#ffffff]">
                                <SquareX />
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
                                <SquareCheck />
                              </div>
                              <div className="  hover:text-[#fff]/50 text-[#ffffff]">
                                <SquareX />
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
                                <SquareCheck />
                              </div>
                              <div className="  hover:text-[#fff]/50 text-[#ffffff]">
                                <SquareX />
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
                                <SquareCheck />
                              </div>
                              <div className="  hover:text-[#fff]/50 text-[#ffffff]">
                                <SquareX />
                              </div>
                            </div>
                          </ACC>
                        </AI>
                      </div>
                    </AC>
                  </PopoverContent>
                </Popover>
              </div>
    )
}