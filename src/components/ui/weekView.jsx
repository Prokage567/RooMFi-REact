import dayjs from "dayjs"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "./table.jsx"
import weekday from 'dayjs/plugin/weekday'
export default function WeekView({ schedules }) {
    dayjs.extend(weekday)
    return (
        <div className="mt-10 border border-e-red-200  h-96 w-96">
            {schedules?.filter(x => x.date >= dayjs().weekday(1).format("YYYY-MM-DD") && x.date <= dayjs().weekday(6).format("YYYY-MM-DD"))?.map(x => (
                <div key={x.id} className=" ml-1 w-[140px]   text-secondary mb-1 text-[11px] font-[NiramitReg]  ">
                    <div className="w-[140px] bg-[#90E0FF]  hover:rounded-sm  relative">
                        <div className=" -ml-[6px] w-[140px] text-[#0c146e]">
                            <div className="z-20 absolute ml-[6px] -mt-[12px]">


                            </div>
                            {x.room.name} | {x.start_time} - {x.end_time}
                        </div>
                    </div>


                    <div className="flex flex-wrap italic  w-[130px] text-[#0c146e] ml-1">
                        <div> {x.teacher.name} | </div>
                        <div className="ml-1"> {x.subject}</div>
                    </div>

                </div>
            ))}

        </div>
    )
}

