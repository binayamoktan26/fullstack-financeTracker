import { getUser } from "../helper/axiosHelper"

export const autoLogIn =async()=>{
    const  accessJWT = localStorage.getItem("accessJWT")

    //call api to get user
const {status , user} = await getUser()
//  console.log(response)
 return status === "success" ? user : {}

    //mount user in the state
}