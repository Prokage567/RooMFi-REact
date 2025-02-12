import { URL } from "./config";

export const getSection = async () => {
    const res = await fetch(`${URL}/section/`, {
        method: "GET",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
    return await res.json()
}
export const getSectionId = async (id,type,inputs) => {
    const res = await fetch(`${URL}/section/${id}`, {
        method: type,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${inputs}`
        }
    })
    return await res.json()
}
