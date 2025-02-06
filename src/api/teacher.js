import { URL } from "./config";

export const getTeacher = async (inputs) => {
    const res = await fetch(`${URL}/teacher/`, {
        method: "GET",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${inputs}`
        }
    })
    return await res.json()
}