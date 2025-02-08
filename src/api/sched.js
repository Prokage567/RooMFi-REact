import { URL } from "./config";

export const getSched = async (inputs,type) => {
    const res = await fetch(`${URL}/schedule/`, {
        method: type,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${inputs}`
        }
    })
    return await res.json()
}
