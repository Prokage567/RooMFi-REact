import { URL } from "./config";

export const getTeacher = async () => {
    const res = await fetch(`${URL}/teacher/`, {
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
export const DelPatchTeacherById = async (id,token,type,inputs) => {
    const res = await fetch(`${URL}/teacher/${id}`, {
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