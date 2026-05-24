import {createContext, useContext, useState} from "react"
import { fetchTransaction } from "../../helper/axiosHelper"



export const Usercontext =createContext()

export const UserProvider = ({children})=>{
    const [user, setUser]=useState({})
    const [transaction, setTransaction]=useState([])
      const [show, setShow] = useState(false);

  const toggleModal = (value) => setShow(value);
//   const handleShow = () => setShow(true);
    const getTransaction = async()=>{
        // call the axios helper to call api 
        
        const {status , transaction} =await fetchTransaction()
        status == "success" && setTransaction(transaction)

        //receive data and mount to the transactions by setTransaction()
    }
    return(
     <Usercontext.Provider value={{user,setUser , transaction , getTransaction,toggleModal,show}}>
        {children}
     </Usercontext.Provider>
    )
} 
 export  const useUser = ()=>useContext(Usercontext)
 