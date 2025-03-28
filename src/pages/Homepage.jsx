import React, { useContext, useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import img from "@/assets/images/image.svg"
import img2 from "@/assets/images/image2.svg"
import foot from "@/assets/images/footer.svg"
import $ from 'jquery'
import { Search } from "../api/room"
import { Link } from "react-router-dom"
import { Popover, PopoverAnchor } from "@radix-ui/react-popover"
import { AuthContext } from "../context/context"


function Homepage() {
    const { categories, refreshRooms, Rooms } = useContext(AuthContext)
    useEffect(() => {
        refreshRooms()
        document.body.style.background = "white"
    }, [])
    const [Pop, setPop] = useState(0)
    const [searchInfo, setSearchInfo] = useState([])
    const keyword = $('#input').val()
    const onHandleClick = () => {
        const keyword = $('#input').val()
        if (keyword == "") {
            setPop(0)
        } else (
            setPop(1)
        )
        setSearchInfo(Rooms.filter(room=>room.name.includes(keyword)))
    }
    const suggestion = (input) => {
        return (
            input.map(rooms => (rooms.room.map(room => (
                <div>
                    <Link to={`../room/${room.category_id}`}>
                        <div key={room.id} className="flex justify-between rounded p-1 hover:bg-[#3F9DC1]/10">
                            <p className="pt-1">Room: {room.name}</p>
                            {room.schedules == "" ? room.schedules
                                ? <p className="border border-[#3F9DC1]/70 p-1 rounded-[10px] text-white  bg-green-500">Available</p>
                                : <p className="border border-[#3F9DC1]/70 p-1 rounded-[10px] text-white bg-red-500">Unavailable</p>
                                : <p className="border border-[#3F9DC1]/70 p-1 rounded-[10px] text-white bg-red-500">Unavailable</p>}
                        </div>
                    </Link>
                </div>
            ))))
        )
    }

    return (
        <>
            <div className="items-center flex-col justify-center flex ">
                <div className="sticky top-24 -mb-14 ">
                    <Input id="input" symbol={true} type="text" placeholder="Search room by number... eg.203,209,111"
                        className=" h-[45px] border-2 bg-slate border-blue-950 pl-10 pr-4 py-2 rounded-full w-[500px] focus:border-[1]" onChange={() => onHandleClick()} />
                </div>
                <div className="sticky top-[86px] ">
                    <Popover>
                        <PopoverAnchor className="flex justify-center items-center flex-col">
                            <div className={`absolute w-96 min-h-auto top-[56px] ${Pop == 1 ? "bg-white z-20 border-gray-800/30 border" : ""} -mb-14 p-2 transition-all`}>
                                {Pop == 1 ?
                                    <div>
                                        {searchInfo?.map(p => (
                                            <Link key={p.id} to={`../room/${p.category_id}`}>
                                                <div key={p.id} className="my-1 rounded p-1  hover:bg-[#3F9DC1]/10">Room: {p.name}</div>
                                            </Link>
                                        )
                                        )}
                                        <div>
                                            {searchInfo != ""
                                                ? keyword.length != null && !searchInfo
                                                    ? <p className="text-gray-500/40">Loading...</p>
                                                    : searchInfo
                                                        ? <div className=" h-auto overflow-scroll no-scrollbar">
                                                            <p className="sticky top-0 bg-white text-gray-500/40">Suggestion... </p>
                                                            {suggestion(categories)}
                                                        </div>
                                                        : <p className="text-gray-500/40">Loading...</p>
                                                : <p className="text-gray-500/40">No result... </p>
                                            }
                                        </div>
                                    </div> : ""}
                            </div>
                        </PopoverAnchor>
                    </Popover>
                </div>
                <div className="justify-center flex flex-wrap pt-[100px]">
                    <div>
                        <p className="font-[NiramitReg] lg:text-[20px] text-[17px]">MFI's Room Management System: A Room Availability and Scheduling Platform
                        </p>
                        <h4 className="font-[KronaOne] lg:text-[60px] text-[40px] pt-6">
                            RooMFI
                        </h4><p className="font-[NiramitReg] lg:text-[25px] pl-1 text-[25px] w-[560px]">
                            A smooth and organized system that allows MFIers to efficiently manage and view room schedules while providing information on the sections and teachers assigned to each room.
                        </p>
                    </div>
                    <img src={img} alt="" width="520px" />
                </div>
                <div className="flex flex-col justify-center items-center flex-wrap pt-[100px]">
                    <img src={img2} alt="" className="-z-20" />
                    <div className="relative left-[0px] lg:left-[320px] md:-mb-[290px] md:-top-[315px] -z-20 lg:-top-[450px] lg:-mb-[430px] 2xl:-mb-[500px] 2xl:-top-[525px]">
                        <div className="md:h-[475px] lg:h-[575px] w-[470px] bg-cyan-500 text-zinc-100 p-12">
                            <h2 className="font-[KronaOne] pb-6 text-[20px]">
                                Availability of Rooms and Scheduling Platform
                            </h2>
                            <ul className="list-disc list-outside flex md:text-[14px] lg:text-[20px] flex-col flex-wrap gap-12 justify-center items-center ">
                                <li>
                                    Improving the scheduling process, reducing the disagreement over assigned rooms, and providing an access platform for monitoring individuals" whereabouts or theirulcations where they can be found.
                                </li>
                                <li>
                                    Determining whether any available spaces enable them to ask permission to reserve it.
                                </li>
                                <li>
                                    Help to keep track of room usage and which individuals are in there.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src={foot} />
                </div>
            </div>
        </>
    )
}

export default Homepage