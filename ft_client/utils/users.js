import { getUser } from "../helper/axiosHelper"

export const autoLogIn =async()=>{

const  accessJWT = localStorage.getItem("accessJWT"); 



    if(accessJWT){
        const {status,user} = await getUser()
       return status === "success" ? user : {}
      
    }


//     //call api to get user
// const {status , user} = await getUser()


//     //mount user in the state
}