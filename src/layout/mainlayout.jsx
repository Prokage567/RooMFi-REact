import { useContext, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { AuthContext } from '../context/context'
import '../pages/index.css'
import head from '../assets/images/head.svg'
import logo from '../assets/images/logo.svg'
import icon from '../assets/images/homeIcon.svg'
import icon2 from '../assets/images/icon2.svg'
import { Input } from '@/components/ui/Input'
import { cn } from "@/lib/utils"
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
            <div className='flex min-h-screen flex-col overflow-auto'>
                <nav>
                    <div className='bg-[url(src/assets/images/head.svg)] bg-cover bg-no-repeat shadow-[0_7px_5px_rgba(0,0,0,0.25)]'>
                        <div className="md:[200px] flex flex-row p-3">
                            <img src={logo} className='w-[85px] md:w-[75px] lg:w-[65px]' />
                            <div className='font-[KronaOne] text-orange-500 md:text-[50px]/[34.8px] lg:text-[40px]/[31.8px] text-[55px]/[39.8px] indent-[15px]'>
                                <br />
                                RooMFI
                            </div>
                        </div>
                    </div>
                </nav>
                <div className='flex-1 flex text-white font-[NiramitReg]'>
                    <nav className="bg-blue-950 shadow-[5px_0_10px_rgba(0,0,0,0.35)]">
                        <div className=''>
                            <Link to='/homepage' className="no-underline flex pb-[10px] p-2 items-center text-[20px]/[19.4px] hover:none md:hover:bg-cyan-700 lg:hover:bg-cyan-700 hover:rounded-[10px] font-[NiramitBold] sticky top-0 transition-all ">
                                <img src={icon} className=' lg:w-[55px] p-[3.5px] w-[45px] transition-all hover:bg-cyan-700 hover:rounded-[10px]'/>
                                <div className='hidden lg:block md:block transition-all'>
                                    <br />
                                    Home
                                </div>
                            </Link>
                        </div>

                        <div className="overflow-auto no-scrollbar h-[100vh]">
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <Link to="/room" className="flex flex-col ">
                                        <AccordionTrigger img={icon2} className="lg:-ml-3 md:-ml-[12px] ml-0">Room</AccordionTrigger>
                                    </Link>
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
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-2">
                                    <Link to="/section" className="flex flex-col ">
                                        <AccordionTrigger img={icon2} >Section</AccordionTrigger>
                                    </Link>
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
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-3">
                                    <Link to="/teacher" className="flex flex-col ">
                                        <AccordionTrigger img={icon2}>Teacher</AccordionTrigger>
                                    </Link>
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
                        </div>
                    </nav>
                    <main>
                        
                        <Outlet />
                    </main>
                </div>
            </div>





            {/* <div className='flex min-h-screen flex-col'>
                <nav>
                    
                    
                </nav>

                <nav className="flex">
                    <div>
                        <aside className={cn("fixed w-[235px] h-full bg-blue-950 text-white shadow-lg flex flex-col pl-5 pr-8 shadow-[5px_0_10px_rgba(0,0,0,0.35)] ")}>
                            <nav className="font-[NiramitReg]">
                                <div className="flex flex-row mt-5 hover:bg-cyan-900">
                                   
                                    
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



            </div>

            <Outlet /> */}
        </>
    )
}