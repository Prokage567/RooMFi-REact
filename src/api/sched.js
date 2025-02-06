import { URL } from "./config";

export const getSched = async (inputs) => {
    const res = await fetch(`${URL}/schedule/`, {
        method: "GET",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${inputs}`
        }
    })
    return await res.json()
}