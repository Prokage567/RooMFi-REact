import { useContext, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { AuthContext } from '../context/context'
import '../pages/index.css'
import logo from '../assets/images/logo.svg'
import icon from '../assets/images/homeIcon.svg'
import icon2 from '../assets/images/icon2.svg'
import icon3 from '../assets/images/icon3.svg'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function MainLayout() {

    const [search, setSearch] = useState();

    const searchRoom = (s) => {
        setSearch(e.target.value);
        console.log("Searching for: ", e.target.value);
    };

    const { user, logout } = useContext(AuthContext)
    return (
        <>
            <div className='flex h-screen flex-col'>
                <nav>
                    <div className='bg-[url(src/assets/images/head.svg)] bg-cover bg-no-repeat shadow-[0_7px_5px_rgba(0,0,0,0.25)]'>
                        <div className="md:[200px] flex flex-row p-3">
                            <img src={logo} className='w-[85px] md:w-[75px] lg:w-[65px]' />
                            <p className='font-[KronaOne] text-orange-500 md:text-[50px] lg:text-[40px] text-[55px] relative lg:top-[14px] md:top-[16px] top-[18px] lg:block md:block sm:block hidden transition-all'>
                                RooMFI
                            </p>
                        </div>
                    </div>
                </nav>

                <div className='flex-1 flex text-white font-[NiramitReg]'>
                    <nav className="bg-[#242F5B] shadow-[5px_0_10px_rgba(0,0,0,0.35)]">
                        <div className=''>
                            <Link to='/homepage' className="no-underline flex pb-[10px] p-2 items-center text-[20px]/[19.4px] hover:none md:hover:bg-cyan-700 lg:hover:bg-cyan-700 hover:rounded-[10px] font-[NiramitBold] sticky top-0 transition-all ">
                                <img src={icon} className=' lg:w-[55px] p-[3.5px] w-[45px] transition-all hover:bg-cyan-700 hover:rounded-[10px]'/>
                                <p className='hidden lg:block md:block transition-all relative top-3'>
                                    Home
                                </p>
                            </Link>
                        </div>
                        <div className="overflow-scroll no-scrollbar h-[40vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]" >
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <Link to="/room" className="flex flex-col ">
                                        <AccordionTrigger img={icon2} className="lg:ml-1 md:ml-[4px] ml-0 whitespace-pre">Room    </AccordionTrigger>
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
                                        <AccordionTrigger img={icon3}>Teacher</AccordionTrigger>
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
                    <main className='text-slate-900 h-[89vh] overflow-scroll no-scrollbar flex flex-col justify-center items-center w-screen flex-wrap'>
                        <Outlet />
                    </main>
                </div>
            </div>
            </>
    )
}