import { URL } from "./config";

export const getTeacher = async (inputs,type) => {
    const res = await fetch(`${URL}/teacher/`, {
        method: type,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${inputs}`
        }
    })
    return await res.json()
}