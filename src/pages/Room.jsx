
import { useParams } from "react-router-dom"
import { getCategory, getCategoryId } from "../api/category"
import { useContext, useEffect, useMemo } from "react"
import { useState } from "react"
import { AuthContext } from "../context/context"
import { AdminPowers } from "../components/AdminPowers/AdminEditDelete.jsx"
import { teacherReq } from "../components/TeacherPowers/TeacherReqs.jsx"
import { request } from "../components/TeacherPowers/Requests.jsx"
import { useCookies } from "react-cookie"


export default function Room() {
  const rooms = [
  "Room 111", "Room 112", "Room 143", "Room 145", "Room 147", "Room 201", "Room 202",
  "Room 206", "Room 207", "Room 209", "Room 212", "Room 315", "Room 317", "Room 323",
  "Room 324", "Room 335", "Room 336"
  ]
  const [cookies] = useCookies()
  const token = cookies.token
  const { id } = useParams()
  const { user } = useContext(AuthContext)
  const [categories, setCategories] = useState([])
  useEffect(() => {
    refreshCategory()
    refreshCategoryById()
  }, [id,categories])
  const [isOpen, setIsOpen] = useState(false)
  const [category, setCategory] = useState([])
  const refreshCategoryById = () => {
    if (id) {
      getCategoryId(id, "GET").then(res => {
        if (res?.ok) {
          setCategory([res.data])
        }
      })
    }
  }
  const buttonSubmit = () => {
    setIsOpen(false)
    const roomNumber = $("#roomNum")
  }
  const cat = useMemo(() => {
    if (categories.length != 0) {
      if (id) {
        return category.filter(x => x.room.map(x => x.category_id === id))
      } else {
        return categories
      }
    }
    else {
      return categories
    }
  }, [categories, category])

  const refreshCategory = () => {
    getCategory().then(res => {
      console.log(res)
      if (res?.ok) {
        setCategories(res.data)
      }
    })
  }

  return (
    <>
      <div className="mt-[10px] ml-[15px] min-w-screen ">
        <div className="ml-3 mr-3 sm:ml-2 sm:mr-0 flex flex-col items-start">
          {cat.map(r =>
            <div className="mb-7 sm:mb-3">
              <p className="text-[40px] font-[100] mt-[40px] mb-4">{r.category}</p>
              <div className=" mr-[40px] text-[#fff] ml-[50px] min-w-screen overflow-y-auto flex flex-col items-start flex-wrap h-[205px] no-scrollbar gap-[20px] border-r-[2px] border-l-[2px] border-gray-600/20 ">
                {r.room.map(r => (
                  <div className=" border relative hover:scale-95 rounded-[20px]">
                    {user?.map(user =>
                      <div>
                        {user.role_id == "admin" ?
                          AdminPowers(r,token)
                          : ""
                        }
                      </div>
                    )}

                    <div className="z-10 absolute  justify-items-center grid h-[60px] w-full rounded-b-[20px] bg-[#0F172A]/70 bottom-0">
                      <div className=" mt-1 ">
                        {r.name}
                      </div>
                      <div className="mb-2">
                        {r.schedules ? r.schedules == "" ? "Available" : "Unavailable" : "Unavailable"}
                      </div >
                    </div >


                    <div className="z-0">
                      <img src={`../src/assets/images/rooms/${r.name}.jpg`} className="w-[300px] border-[1px] border-[#0F172A]/80 h-[200px] rounded-[20px] z-0 " alt="" />
                    </div>
                  </div >
                ))}
              </div >
            </div >
          )}
        </div >
      </div >
      {
        user?.map(r =>

          <div className="flex">
            {r.role_id == "teacher" ?
              teacherReq(isOpen, setIsOpen, rooms, buttonSubmit)
              : ""
            }
          </div>
        )
      }
      {
        user?.map(r =>

          <div className="">
            {r.role_id == "admin" ?
              request()
              : ""
            }
          </div>
        )
      }


    </>
  )
}
