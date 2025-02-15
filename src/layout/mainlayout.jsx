import { useContext, useState, useEffect } from "react"
import { Link, Outlet } from "react-router-dom"
import { AuthContext } from "../context/context"
import logo from "../assets/images/logo.svg"
import icon from "../assets/images/homeIcon.svg"
import icon2 from "../assets/images/icon2.svg"
import icon3 from "../assets/images/icon3.svg"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { getSection } from "../api/section"
import { getCategory } from "../api/category"
import { Button } from "@/components/ui/button"
import { User, UserRoundPlus } from "lucide-react"

export default function MainLayout() {
    
    const [Sections, setSection] = useState([])
    const [roomTypes, setRoomTypes] = useState([])
    
    useEffect(() => {
        getSection().then(res => {
            if (res?.ok) {
                setSection(res.data)
            }
        }
        )
        getCategory().then(res => {
            if (res?.ok) {
                setRoomTypes(res.data)
            }
        }
        )
    }, [])
    const { user, logout } = useContext(AuthContext)
    return (
        <>
            <div className="flex min-h-screen flex-col">
                <nav className="fixed min-w-full z-30">
                    <div className="bg-[url(src/assets/images/head.svg)] bg-cover bg-local bg-no-repeat bg-shadow-[0_7px_5px_rgba(0,0,0,0.25)]">
                        <div className="flex float-right mr-[410px] mt-[30px]">
                            <Button className="absolute font-[NiramitReg] text-[18px] pr-[40px] pl-[40px] rounded-[100px] bg-[#BFAC88] hover:bg-[#3F9DC1]">
                                <User strokeWidth={3}/>Log in
                            </Button>
                        </div>
                        <div className="flex float-right mr-[-180px] mt-[30px]">
                            <Button className="absolute font-[NiramitReg] text-[18px] pr-[40px] pl-[40px] rounded-[100px] bg-[#BFAC88] hover:bg-[#3F9DC1]">
                                <UserRoundPlus strokeWidth={3}/>Register
                            </Button>
                        </div>
                        <div className="flex flex-row p-3">
                            <img src={logo} className="w-[85px] md:w-[75px] lg:w-[65px]" />
                            <p className="font-[KronaOne] text-orange-500 md:text-[50px] lg:text-[40px] text-[55px] relative lg:top-[14px] md:top-[16px] top-[18px] lg:block md:block sm:block hidden transition-all">
                                RooMFI
                            </p>
                        </div>
                    </div>
                </nav>

                <div className="flex text-white font-[NiramitReg] min-h-full">
                    <nav >
                    <p className="fixed lg:w-56 md:w-[156px] w-16 -z-10 bg-[#242F5B] min-h-full shadow-[5px_0_10px_rgba(0,0,0,0.35)]"/>
                    <div className="bg-[#242F5B] z-20 lg:w-[224px] md:w-[157px] w-[65px] sticky lg:top-[90px] overflow-scroll no-scrollbar lg:h-[90vh] md:h-[85vh] md:top-[87px] top-[95px] ">
                            <Link to="/homepage" className="bg-[#242F5B] z-10 sticky top-1 no-underline flex pb-[10px] p-2 items-center text-[20px]/[19.4px] hover:none md:hover:bg-cyan-700 lg:hover:bg-cyan-700 hover:rounded-[10px] font-[NiramitBold] transition-all ">
                                <img src={icon} className=" lg:w-[55px] p-[3.5px] w-[45px] transition-all hover:bg-cyan-700 hover:rounded-[10px]" />
                                <p className="hidden  lg:block md:block transition-all relative top-3">
                                    Home
                                </p>
                            </Link>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger input={true} img={icon2} className="lg:ml-1 ml-0 whitespace-pre">Room   </AccordionTrigger>

                                    <Link to="/room">
                                        <AccordionContent className="ml-0 md:ml-3 lg:ml-9">All</AccordionContent>
                                    </Link>
                                    {roomTypes.map(r => (
                                        //here we throw thr section"s id from the section and uses it to go from one data to another
                                        <Link key={r.id} to={`/room/${r.id}`}>
                                            <AccordionContent className="ml-0 md:ml-3 lg:ml-9">{r.category}</AccordionContent>
                                        </Link>
                                    ))
                                    }
                                </AccordionItem>
                            </Accordion>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger input={true} img={icon2}>Section</AccordionTrigger>
                                    {Sections.map(s => (
                                        //here we throw thr section"s id from the section and uses it to go from one data to another
                                        <Link key={s.id} to={`/section/${s.id}`}>
                                            <AccordionContent className="ml-0 md:ml-3 lg:ml-9">{s.name}</AccordionContent>
                                        </Link>
                                    ))
                                }

                                </AccordionItem>
                            </Accordion>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-3">
                                    <Link to="/teacher" className="flex flex-col">
                                        <AccordionTrigger img={icon3}>Teacher</AccordionTrigger>
                                    </Link>
                                </AccordionItem>
                            </Accordion>
                    </div>
                            
                    </nav>
                    <main  className="text-slate-900 w-screen mt-20">
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    )
}