import { URL } from "./config";

export const getRoom = async () => {
    const res = await fetch(`${URL}/room/`, {
        method: "GET",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
    return await res.json()
}
export const Search = async (input) => {
    const res = await fetch(`${URL}/room/search/${input}`, {
        method: "GET",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
    return await res.json()
}
export const getRoomId = async (id,inputs,type) => {
    const res = await fetch(`${URL}/room/${id}`, {
        method: type,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${inputs}`
        }
    })
    return await res.json()
}
export const RoomId = async (id,inputs,type) => {
    const res = await fetch(`${URL}/room/${id}`, {
        method: type,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${inputs}`
        }
    })
    return await res.json()
}