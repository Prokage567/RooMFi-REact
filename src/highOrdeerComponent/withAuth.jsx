import React, { useContext, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Navigate, useNavigate } from 'react-router-dom';
import { checkToken } from '../api/auth';
import { AuthContext } from '../contexts/AuthContext';


const withAuth = (WrappedComponent) => {
    const WithAuth = (props) => {
        const [cookies, setCookie, removeCookie] = useCookies()
        const navigate = useNavigate()
        const { user, login } = useContext(AuthContext)

        
        const token = cookies.token 

        if (!token) {
            return <Navigate to="/login" />
        }
        else {
            if (!user)
                checkToken(token).then(res => {
                    if (res?.ok) {
                        login(res?.data)
                        console.log("!!!")
                    }
                    else {
                        navigate("/login")
                    }
                })
        }


        return <WrappedComponent {...props} />
    }

    return WithAuth;
}

export default withAuth;