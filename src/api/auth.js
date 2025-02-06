import { URL } from "./config";
export const AuthRegister = async (inputs) => {
    const res = await fetch(`${URL}/register`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
        ,
        body: JSON.stringify(inputs)
    })
    return await res.json()
}

export const AuthLogin = async (inputs) => {
    const res = await fetch(`${URL}/login`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputs)
    })
    return await res.json()
}

export const checkToken = async (inputs) => {
    const res = await fetch(`${URL}/checktoken`, {
        method: "GET",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${inputs}`
        }
    })
    return await res.json()
}
export const logout = async () => {
    const res = await fetch(`${URL}/logout`, {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
    return await res.json()
}
