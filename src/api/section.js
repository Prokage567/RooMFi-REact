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
export const getSectionId = async (id) => {
    const res = await fetch(`${URL}/section/${id}`, {
        method: "GET",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
    return await res.json()
}
export const setSectionId = async (id, token,inputs) => {
    const res = await fetch(`${URL}/section/${id}`, {
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
export const AddSection = async (token, inputs) => {
    const res = await fetch(`${URL}/section`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(inputs)
    })
    return await res.json()
}
export const delSection = async (token, id) => {
    const res = await fetch(`${URL}/section/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
    return await res.json()
}
