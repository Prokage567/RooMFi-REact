import { URL } from "./config";

export const getSched = async (type,token,inputs) => {
    const res = await fetch(`${URL}/schedule/`, {
        method: type,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(inputs)
    })
    return await res.json()
}
