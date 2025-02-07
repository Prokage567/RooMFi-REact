import { URL } from "./config";

export const getRoom = async (inputs) => {
    const res = await fetch(`${URL}/room/`, {
        method: type,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${inputs}`
        }
    })
    return await res.json()
}