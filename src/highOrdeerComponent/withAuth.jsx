import React, { useContext, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Navigate, useNavigate } from 'react-router-dom';
import { checkToken } from '../api/auth';
import { AuthContext } from '../context/context';


const withAuth = (WrappedComponent) => {
    const WithAuth = (props) => {
        const [cookies, setCookie, removeCookie] = useCookies()
        const navigate = useNavigate()
        const { user, login, logout } = useContext(AuthContext)


        const token = cookies.token

        if (!token) {
            return <Navigate to="/homepage" />
        }
        else {
            if (!user)
                checkToken(token).then(res => {
                    if (res?.ok) {
                        login(res?.data)
                    }
                    else {
                        removeCookie(token)
                        logout()
                        navigate("/homepage")
                    }
                })
        }
        return <WrappedComponent {...props} />
    }

    return WithAuth;
}

export default withAuth;