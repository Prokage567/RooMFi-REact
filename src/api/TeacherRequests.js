import { URL } from "./config";

export const getRequest = async () => {
    const res = await fetch(`${URL}/request/`, {
        method: "GET",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
    return await res.json()
}
export const getRequestById = async (id, toke, inputs) => {
    const res = await fetch(`${URL}/request/${id}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${toke}`
        },
        body: JSON.stringify(inputs)
    })
    return await res.json()
}
export const DelRequestId = async (id, toke, inputs) => {
    const res = await fetch(`${URL}/request/${id}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${toke}`
        },
        body: JSON.stringify(inputs)
    })
    return await res.json()
}
export const UpdRequestId = async (id, toke, inputs) => {
    const res = await fetch(`${URL}/request/${id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${toke}`
        },
        body: JSON.stringify(inputs)
    })
    return await res.json()
}
export const StoreRequest = async ( toke, inputs) => {
    const res = await fetch(`${URL}/request`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${toke}`
        },
        body: JSON.stringify(inputs)
    })
    return await res.json()
}
