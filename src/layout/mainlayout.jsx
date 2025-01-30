import { useContext, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { AuthContext } from '../context/context'
import '../pages/index.css'
import head from '../assets/images/head.svg'
import logo from '../assets/images/logo.svg'
import icon from '../assets/images/homeIcon.svg'
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function MainLayout() {

    const [allSection, setAllSection] = useState(false);

    const [search, setSearch] = useState();

    const searchRoom = (s) => {
        setSearch(e.target.value);
        console.log("Searching for: ", e.target.value);
    };

    const { user, logout } = useContext(AuthContext)
    return (
        <>
            <div>
                <div className="shadow-[0_5px_5px_rgba(0,0,0,0.35)] " >
                    <img src={head} className='min-w-full' />
                </div>
                <div className="absolute left-3 top-1 flex flex-row pl-[25px]">
                    <img src={logo} className='w-[65px] h-[65px]' />
                    <div className='font-[KronaOne] text-orange-500 text-[40px]/[31.8px] pl-[15px]'>
                        <br />
                        RooMFI
                    </div>
                </div>
            </div>
            <nav className="flex">
                <div>
                    <aside className={cn("fixed w-[235px] h-full bg-blue-950 text-white shadow-lg flex flex-col pl-5 pr-8 shadow-[5px_0_10px_rgba(0,0,0,0.35)] ")}>
                        <nav className="font-[NiramitReg]">
                            <div className="flex flex-row mt-5 hover:bg-cyan-900">
                                <img src={icon} height="35px" width="35px" />
                                <Link to='/' className="no-underline flex pb-[10px] pl-[15px] items-center text-[20px]/[19.4px] font-[NiramitBold] sticky top-0 ">
                                    <br />
                                    Home
                                </Link>
                            </div>
                            <div className='overflow-auto no-scrollbar max-h-screen w-[13vw]'>
                                <Link to="/room" className="flex flex-col items-center mt-[20px]">
                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value="item-1">
                                            <AccordionTrigger>Room</AccordionTrigger>
                                            <AccordionContent>Lecture Rooms</AccordionContent>
                                            <AccordionContent>Science Laboratories</AccordionContent>
                                            <AccordionContent>Computer Laboratories</AccordionContent>
                                            <AccordionContent>Electronics Laboratories</AccordionContent>
                                            <AccordionContent>Electrical Laboratories</AccordionContent>
                                            <AccordionContent>Automations & Mechatronics</AccordionContent>
                                            <AccordionContent>Instrumentations</AccordionContent>
                                            <AccordionContent>Fiber Optic Laboratory</AccordionContent>
                                            <AccordionContent>Other Rooms</AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </Link>
                                <Link to="/section">
                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value="item-2">
                                            <AccordionTrigger>Section</AccordionTrigger>
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
                                </Link>

                                <Link to="/teacher" className="flex items-center">
                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value="item-3">
                                            <AccordionTrigger>Teacher</AccordionTrigger>
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
                                </Link>
                            </div>
                        </nav>
                    </aside>
                </div>


            </nav >
            <div className='justify-items-center flex'>
                <div className="flex relative max-w-md mx-auto mt-7 ">
                    <Input type="text" placeholder="Search room..." value={search}
                        className={"h-[45px] border-2 border-blue-950 pl-10 pr-4 py-2 border-2 rounded-full w-[500px] focus:border-[1] "} />
                    <Button type="submit">Search</Button>
                </div>
            </div>
            <Outlet />
        </>
    )
}