import { URL } from "./config";

export const getCategory = async () => {
    const res = await fetch(`${URL}/category`, {
        method: "GET",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
    return await res.json()
}
export const getCategoryId = async (id,inputs,type) => {
    const res = await fetch(`${URL}/category/${id}`, {
        method: type,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${inputs}`
        }
    })
    return await res.json()
}