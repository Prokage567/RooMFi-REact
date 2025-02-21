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
import { LogOut, User, UserRoundPlus, CircleUserRound, ChevronUp, ChevronLeft, ChevronRight } from "lucide-react"
import { checkToken } from "../api/auth"
import { useCookies } from "react-cookie"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

export default function MainLayout() {

    const { user, login, logout } = useContext(AuthContext)
    const [cookies] = useCookies()
    const token = cookies.token
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
        checkToken(token).then(res => {
            if (res?.ok) {
                login([res.data])
            }
        }
        )
    }, [])
    return (
        <>
            <div className="flex min-h-screen flex-col">
                <nav className="fixed min-w-full z-20">
                    <div className="bg-[url(../assets/images/head.svg)] bg-cover bg-no-repeat bg-shadow-[0_7px_5px_rgba(0,0,0,0.25)]">
                        {!user ?
                            <div>
                                <div>
                                    <Link to="../login" className="absolute w-32 top-7 text-white right-60 font-[NiramitReg] text-[18px] rounded-[100px] bg-[#BFAC88] pr-5 pl-5 hover:bg-[#3F9DC1] h-9 flex justify-center items-center flex-row content-center">
                                        <User strokeWidth={2} className=" h-4" />Log in
                                    </Link>
                                </div>
                                <div>
                                    <Link to="../register" className="absolute w-32 top-7 text-white right-20 font-[NiramitReg] text-[18px] rounded-[100px] bg-[#BFAC88] pr-5 pl-5 hover:bg-[#3F9DC1] h-9 flex justify-center items-center flex-row content-center">
                                        <UserRoundPlus strokeWidth={2} className=" h-4" />Register
                                    </Link>
                                </div>
                            </div> : ""

                        }
                        <div className="md:[200px] flex flex-row p-3">
                            <img src={logo} className="w-[85px] md:w-[75px] lg:w-[65px]" />
                            <p className="font-[KronaOne] text-orange-500 md:text-[50px] lg:text-[40px] text-[55px] relative lg:top-[14px] md:top-[16px] top-[18px] lg:block md:block sm:block hidden transition-all">
                                RooMFI
                            </p>
                        </div>
                    </div>
                </nav>

                <div className="flex text-white font-[NiramitReg] min-h-full">
                    <p className="fixed lg:w-[225px] md:w-[155px] w-[70px] bg-[#242F5B] min-h-full shadow-[5px_0_10px_rgba(0,0,0,0.35)]" />
                    <nav className=" lg:w-[268px] md:w-[187px] w-[70px]">
                        <div className="overflow-scroll no-scrollbar sticky top-24 mt-[88px] h-[90vh]">
                            <Link to="/homepage" className="no-underline flex pb-[10px] p-2 items-center text-[20px]/[19.4px] hover:none md:hover:bg-[#3F9DC1]/70 lg:hover:bg-[#3F9DC1]/70 hover:rounded-[10px] font-[NiramitBold] transition-all ">
                                <img src={icon} className=" lg:w-[55px] p-[3.5px] w-[45px] transition-all hover:bg-[#3F9DC1]/70 hover:rounded-[10px]" />
                                <p className="hidden lg:block md:block transition-all relative top-3">
                                    Home
                                </p>
                            </Link>

                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger input={true} img={icon2} className="whitespace-pre">Room    </AccordionTrigger>

                                    <Link to="/room" className="">
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
                            {user ?
                                <Popover>
                                    <PopoverTrigger className="relative" asChild>
                                        <Button className="sticky ml-[7px] px-[85px] bg-[#242F5B] hover:bg-[#3F9DC1] [&[data-state=closed]>svg]:-rotate-135 [&[data-state=open]>svg]:rotate-90">
                                            <div>
                                                <CircleUserRound/>
                                                </div>
                                        <ChevronRight/>
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-[210px] bg-[#0F1A42] border-[#0F1A42] p-3"

                                        align="start">
                                        {user.map(u => <>
                                            <h1 className="text-white font-[NiramitReg] text-[20px]">{u.name}</h1>
                                            <h3 className="text-slate-400 font-[NiramitReg] text-[15px]">{u.role_id}</h3>
                                        </>
                                        )}

                                        <div className="flex items-center justify-center mt-2">
                                            <div onClick={logout} className="w-52 top-7 text-white right-20 font-[NiramitReg] text-[18px] rounded-sm bg-slate-900 bg-opacity-75 pr-5 pl-5 hover:bg-slate-900 h-9 flex justify-center items-center flex-row content-center">
                                                <LogOut strokeWidth={2} className=" h-4" />Log out
                                            </div>
                                        </div>

                                    </PopoverContent>
                                </Popover>
                                : ""

                            }

                        </div>
                    </nav>
                    <main className="text-slate-900 w-screen mt-20">
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    )
}