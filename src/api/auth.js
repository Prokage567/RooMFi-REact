import {URL} from "./config";
 export const AuthRegister = async(inputs)=>{
const res = await fetch(`${URL}/register`,{
    method: "POST",
    headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
    ,
        body: JSON.stringify(inputs)
})
return await res.json()
 }

 export const AuthLogin = async(inputs)=>{
    const res = await fetch(`${URL}/login`,{
        method: "POST",
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(inputs)
    })
    return await res.json()
     }