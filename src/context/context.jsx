import React, { createContext, useState } from 'react';
import { useCookies } from 'react-cookie';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const [cookies, setCookie, removeCookie] = useCookies()


  const login = (userData) => {
    setUser(userData); 
  };

  const logout = () => {
    removeCookie('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
