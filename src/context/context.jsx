import React, { createContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { logout as lg } from '../api/auth';
import { toast } from 'react-toastify';
import { getTeacher } from '../api/teacher';
import { getSection, getSectionId } from '../api/section';
import { getCategory, getCategoryId } from '../api/category';
import { getRoom } from '../api/room';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cookies, removeCookie] = useCookies()
  const [Teachers, setTeachers] = useState([])
  const [Sections, setSections] = useState([])
  const [SectionbyId, setSectionsById] = useState([])
  const [category, setCategory] = useState([])
  const [categories, setCategories] = useState([])
  const [Rooms, setRooms] = useState([])

  const login = (userData) => {
    setUser(userData);
  }
  const refreshRooms = () => {
    getRoom().then(res => {
      if (res?.ok) {
        setRooms(res.data)
      }
    })
  }
  const refreshCategoryById = (id) => {
    if (id) {
      getCategoryId(id).then(res => {
        if (res?.ok) {
          setCategory([res.data])
        }
      })
    }
  }
  const refreshCategory = () => {
    getCategory().then(res => {
      if (res?.ok) {
        setCategories(res.data)
      }
    })
  }
  const getTeachers = () => {
    getTeacher().then(res => {
      if (res?.ok) {
        setTeachers(res.data)
      }
    })
  }
  const getSectionbyId = (id) => {
    getSectionId(id).then(res => {
      if (res?.ok) {
        setSectionsById(res.data)
      }
    })
  }
  const getSections = () => {
    getSection().then(res => {
      if (res?.ok) {
        setSections(res.data)
      }
    })
  }
  const logout = () => {
    lg(cookies.token).then(
      toast.success("successfully Logout!")
    )
    removeCookie('token')
    setUser(null)
  }

  useEffect(() => {
    getTeachers()
    getSections()
    refreshCategory()
    const interval = setInterval(() => {
      getTeachers()
      getSections()
      refreshCategory()
    }, 10000)
    return () => clearInterval(interval)
  }, [])
  return (
    <AuthContext.Provider value={{ user, login, logout, Teachers, getTeachers, Sections, getSections, categories, refreshCategory, category, refreshCategoryById, SectionbyId, getSectionbyId,Rooms,refreshRooms}}>
      {children}
    </AuthContext.Provider>
  )
}
