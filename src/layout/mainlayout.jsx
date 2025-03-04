import { useContext, useState, useEffect } from "react"
import { Link, Outlet, useNavigate } from "react-router-dom"
import { AuthContext } from "../context/context"
import logo from "../assets/images/logo.svg"
import icon from "../assets/images/homeIcon.svg"
import icon2 from "../assets/images/icon2.svg"
import icon3 from "../assets/images/icon3.svg"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { getSection } from "../api/section"
import { getCategory } from "../api/category"
import { LogOut, User, UserRoundPlus, CircleUserRound, House, ChevronRight, DoorClosed, Users, ContactRound, Trash2, Pencil } from "lucide-react"
import { checkToken } from "../api/auth"
import { useCookies } from "react-cookie"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogTrigger } from "@radix-ui/react-dialog"
import { DialogHeader } from "../components/ui/dialog"
import { Input } from "../components/ui/input"
import { Label } from "@mui/icons-material"

export default function MainLayout() {
    const navigate = useNavigate()
    const { user, login, logout, Sections, getSections } = useContext(AuthContext)
    const [cookies] = useCookies()
    const token = cookies.token
    const [roomTypes, setRoomTypes] = useState([])
    const loGout = () => {
        logout(token)
        navigate("./homepage")
    }
    const reloadCategory = () => {
        return (
            getCategory().then(res => {
                if (res?.ok) {
                    setRoomTypes(res.data)
                }
            }
            )
        )
    }
    useEffect(() => {
        getSections()
        reloadCategory()
        checkToken(token).then(res => {
            if (res?.ok) {
                login([res.data])
            }
        }
        )
    }, [])
    return (
        <>
            <div className="flex flex-col">
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
                    <p className="fixed lg:w-[217px] md:w-[155px] w-[70px] bg-[#242F5B] min-h-full shadow-[5px_0_10px_rgba(0,0,0,0.35)]" />
                    <nav className="fixed top-20 overflow-y-scroll no-scrollbar">
                        <div className=" xl:h-[87.5vh] lg:h-[85vh] md:h-[81vh] sm:h-[77vh] h-[70vh]">
                            <Link to="/homepage" className="no-underline flex pb-[10px] items-center text-[20px]/[19.4px] hover:none hover:bg-[#3F9DC1]/70 font-[NiramitBold] transition-all ">
                                <House size={40} className="ml-3 mt-5 mr-2" />
                                <p className="hidden lg:block md:block transition-all relative top-3">
                                    Home
                                </p>
                            </Link>

                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1" className="lg:w-[217px] md:w-[155px] w-[70px]">
                                    <AccordionTrigger input={true} icon={<DoorClosed size={30} className="lg:ml-4 md:-ml-4 ml-4 -mr-10" />}>Room</AccordionTrigger>

                                    <Link to="/room">
                                        <AccordionContent className="focus:border-blue-600 ml-0 md:ml-3 lg:ml-9">All</AccordionContent>
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
                                <AccordionItem value="item-2" className="lg:w-[217px] md:w-[155px] w-[70px]">
                                    <Link to="/section">
                                        <AccordionTrigger input={true} icon={<Users size={30} className="lg:ml-4 md:-ml-4 ml-4 -mr-12" />}>Section</AccordionTrigger>
                                    </Link>
                                   
                                             {Sections.map(s => (
                                            
                                                //here we throw thr section"s id from the section and uses it to go from one data to another
                                                <Link key={s.id} to={`/section/${s.id}`}>
                                                    <AccordionContent className="ml-0 md:ml-3 lg:ml-9 ">
                                                        <Dialog>
                                                        <Popover>
                                                            <PopoverTrigger>
                                                                <div className="hover:text-[16px]">
                                                                {s.name}
                                                                </div>
                                                            </PopoverTrigger>
                                                            <PopoverContent className="h-[100px] w-[200px] ">
                                                            
                                                                    <div className="h-[90px] w-[180px] -mt-2 -ml-2 ">
                                                                    
                                                                        <div className="hover:bg-[#DDF6FF] h-[40px]">
                                                                            <div className="place-self-center pt-[6px]">
                                                                                <Popover >
                                                                                    <PopoverTrigger className="text-[#242F5B]">
                                                                                         Delete
                                                                                    </PopoverTrigger>

                                                                                    <PopoverContent className="h-[120px] font-[NiramitReg] text-[#242F5B]">
                                                                                        <div className=" h-[100px]">
                                                                                            <div>
                                                                                                Are you sure you want to delete {s.name}?
                                                                                            </div>

                                                                                            <div className=" mt-2 h-[38px] flex justify-between border-t-[2px]">
                                                                                            <Button className="w-[100px] text-[#242F5B] hover:font-bold  shadow-none bg-transparent hover:bg-transparent">
                                                                                            Cancel
                                                                                            </Button>
                                                                                            <Button className="w-[100px] hover:font-bold text-[#ff1818] shadow-none bg-transparent hover:bg-transparent">
                                                                                            Delete
                                                                                            </Button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </PopoverContent>
                                                                                </Popover>
                                                                            </div>
                                                                        </div>

                                                                        <div className="hover:bg-[#DDF6FF] h-[40px]   ">
                                                                            <div className="place-self-center  pt-[6px] ">
                                                                                <Popover>
                                                                                    <PopoverTrigger className="font-[NiramitReg] text-[#242F5B]">Edit</PopoverTrigger>

                                                                                    <PopoverContent>
                                                                                            <div className="font-[NiramitReg] text-[#242F5B] text-[20px]">Edit {s.name}</div>
                                                                                            
                                                                                            <div className="font-[NiramitReg] text-[#242F5B] mt-1">New Section Name: </div>
                                                                                            <Input 
                                                                                            placeholder="Section Name"
                                                                                            className="font-[NiramitReg] text-[#242F5B]"/>

                                                                                            <div className=" mt-4 h-[38px] flex justify-between border-t-2 ">
                                                                                            <Button className="w-[100px] font-[NiramitReg] hover:font-bold text-[#242F5B] shadow-none bg-transparent hover:bg-transparent">
                                                                                            Cancel
                                                                                            </Button>
                                                                                            <Button className="w-[100px] font-[NiramitReg] hover:font-bold text-[#242F5B] shadow-none bg-transparent hover:bg-transparent">
                                                                                            Save
                                                                                            </Button>
                                                                                            </div>
                                                                                    </PopoverContent>
                                                                                </Popover>
                                                                                
                                                                            </div>
                                                                        </div>
                                                                        
                                                                    </div>
                                                             
                                                            </PopoverContent>
                                                        </Popover>
                                                        </Dialog>
                                                    </AccordionContent>
                                                </Link>
                                                ))
                                                }
                                        

                                </AccordionItem>
                            </Accordion>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-3" className="lg:w-[217px] md:w-[155px] w-[70px]">
                                    <Link to="/teacher" className="flex flex-col">
                                        <AccordionTrigger icon={<ContactRound size={30} className="lg:ml-4 md:-ml-4 ml-4 -mr-12" />}>Teacher</AccordionTrigger>
                                    </Link>
                                </AccordionItem>
                            </Accordion>
                            <div className="lg:w-[217px] md:w-[155px] w-[70px]">
                                {user ?
                                    <Popover>
                                        <PopoverTrigger className="relative" asChild>
                                            <Button className="sticky lg:w-[217px] md:w-[155px] w-[70px] px-[85px] bg-[#242F5B] hover:bg-[#3F9DC1] [&[data-state=closed]>svg]:-rotate-135 [&[data-state=open]>svg]:rotate-90">
                                                <div>
                                                    <CircleUserRound />
                                                </div>
                                                <ChevronRight />
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-[210px] bg-[#0F1A42] border-[#0F1A42] p-3"

                                            align="start">
                                            {user.map(u => <div key={u.id}>
                                                <h1 className="text-white font-[NiramitReg] text-[18px]">{u.name}</h1>
                                                <h3 className="text-slate-400 font-[NiramitReg] text-[15px]">{u.role_id}</h3>
                                            </div>
                                            )}

                                            <div className="flex items-center justify-center mt-2">
                                                <div onClick={() => loGout()} className="w-52 top-7 text-white right-20 font-[NiramitReg] text-[15px] rounded-sm bg-slate-900 bg-opacity-75 pr-5 pl-5 hover:bg-slate-900/40 h-9 flex justify-center items-center flex-row content-center">
                                                    <LogOut strokeWidth={2} className="h-4" />Log out
                                                </div>
                                            </div>

                                        </PopoverContent>
                                    </Popover>
                                    : ""
                                }
                            </div>
                        </div>
                    </nav>
                    <main className="text-slate-900 absolute w-[84.8vw] -z-10 top-20 left-[217px]">
                        <Outlet />
                    </main>
                </div>
            </div>
        </>
    )
}