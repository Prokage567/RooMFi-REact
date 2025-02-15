import { useContext, useState, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { AuthContext } from '../context/context'
import '../pages/index.css'
import logo from '../assets/images/logo.svg'
import icon from '../assets/images/homeIcon.svg'
import icon2 from '../assets/images/icon2.svg'
import icon3 from '../assets/images/icon3.svg'
import { useCookies } from 'react-cookie'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { getSection } from '../api/section'
import { Button } from "@/components/ui/button"
import { User, UserRoundPlus } from "lucide-react"

export default function MainLayout() {

    const [search, setSearch] = useState();
    const [Section, setSection] = useState([])
    const [cookies, setCookie, removeCookie] = useCookies()
    const token = cookies.token
    const searchRoom = (s) => {
        setSearch(e.target.value);
        console.log("Searching for: ", e.target.value);
    };
    useEffect(() => {
        getSection([token],"GET").then(res => {
            if (res?.ok) {
                setSection(res.data)
            }
        }
      )   
    }, [])
    const { user, logout } = useContext(AuthContext)
    return (
        <>
            <div className='flex min-h-screen flex-col '>
                <nav>
                    <div className='bg-[url(src/assets/images/head.svg)] bg-cover bg-no-repeat shadow-[0_7px_5px_rgba(0,0,0,0.25)]'>
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
                        <div className="md:[200px] flex flex-row p-3">
                            <img src={logo} className='w-[85px] md:w-[75px] lg:w-[65px]' />
                            <p className='font-[KronaOne] text-orange-500 md:text-[50px] lg:text-[40px] text-[55px] relative lg:top-[14px] md:top-[16px] top-[18px] lg:block md:block sm:block hidden transition-all'>
                                RooMFI
                            </p>
                        </div>
                    </div>
                </nav>

                <div className=' flex-1 flex text-white font-[NiramitReg] sticky top-0 min-h-full'>
                    <nav className="bg-[#242F5B] shadow-[5px_0_10px_rgba(0,0,0,0.35)] sticky top-0">
                        <div className='sticky top-0'>
                            <Link to='/homepage' className="no-underline flex pb-[10px] p-2 items-center text-[20px]/[19.4px] hover:none md:hover:bg-cyan-700 lg:hover:bg-cyan-700 hover:rounded-[10px] font-[NiramitBold] sticky top-0 transition-all ">
                                <img src={icon} className=' lg:w-[55px] p-[3.5px] w-[45px] transition-all hover:bg-cyan-700 hover:rounded-[10px]'/>
                                <p className='hidden lg:block md:block transition-all relative top-3'>
                                    Home
                                </p>
                            </Link>
                   
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <Link to="/room" className="flex flex-col ">
                                        <AccordionTrigger input={true} img={icon2} className="lg:ml-1 md:ml-[4px] ml-0 whitespace-pre">Room    </AccordionTrigger>
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
                                        <AccordionTrigger input={true} img={icon2}>Section</AccordionTrigger>
                                    {Section.map(s=>( 
                                        //here we throw thr section's id from the section and uses it to go from one data to another
                                        <Link key={s.id} to={`/section/${s.id}`} className="flex flex-col ">
                                            <AccordionContent>{s.name}</AccordionContent>
                                        </Link>
                                    ))
                                    }
                                        
                                </AccordionItem>
                            </Accordion>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-3">
                                    <Link to="/teacher" className="flex flex-col">
                                        <AccordionTrigger img={icon3} >Teacher</AccordionTrigger>
                                    </Link>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </nav>
                    <main className='text-slate-900 flex justify-center items-center w-screen flex-wrap'>
                        <Outlet />
                    </main>
                </div>
            </div>
            </>
    )
}