import { URL } from "./config";

export const getTeacher = async () => {
    const res = await fetch(`${URL}/teacher`, {
        method: "GET",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
    return await res.json()
}
export const getTeacherById = async (token,type,inputs) => {
    const res = await fetch(`${URL}/teacher`, {
        method: type,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(inputs)
    })
    return await res.json()
}
export const DelTeacherById = async (id,token,inputs) => {
    const res = await fetch(`${URL}/teacher/${id}`, {
        method: "DELETE",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(inputs)
    })
    return await res.json()
}
export const PatchTeacherById = async (id,token,inputs) => {
    const res = await fetch(`${URL}/teacher/${id}`, {
        method: "PATCH",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(inputs)
    })
    return await res.json()
}