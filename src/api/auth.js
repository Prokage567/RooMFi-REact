import {URL} from "./config";
 export const AuthMethod = async()=>{
const res = await fetch(`${URL}register`,{
    method: "GET",
    headers:{
        accept: 'application/json',
        'Content-Type': 'application/json'
    }
})
return await res.json()
 }

 export const DMLAuth = async(inputs, type)=>{
    const res = await fetch(`${URL}register`,{
        method: type,
        headers:{
            accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputs)
    })
    return await res.json()
     }