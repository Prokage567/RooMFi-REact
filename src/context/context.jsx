import React, { createContext, useState } from 'react';
import { useCookies } from 'react-cookie';
import { logout as lg} from '../api/auth';
import { toast } from 'react-toastify';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const [cookies, setCookie, removeCookie] = useCookies()


  const login = (userData) => {
    setUser(userData); 
  };

  const logout = () => {
    lg(cookies.token).then(
        res=>{
            if(res?.ok){
                toast.success(res?.message??"successfully Logout!")
            }
        }
    )
    setCookie('token')
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
