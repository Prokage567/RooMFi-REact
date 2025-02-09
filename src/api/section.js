import { URL } from "./config";

export const getSection = async (inputs,type) => {
    const res = await fetch(`${URL}/section/`, {
        method: type,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${inputs}`
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


export const DMLSubject = async (type,inputs) => {
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