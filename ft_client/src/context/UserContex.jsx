import { createContext, useContext, useState } from "react";
import { fetchTransaction } from "../../helper/axiosHelper";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [transaction, setTransaction] = useState([]);
  const [show, setShow] = useState(false);

  const toggleModal = (value) => setShow(value);
  //   const handleShow = () => setShow(true);

  
  const getTransaction = async () => {
    // call the axios helper to call api

    const { status, transaction } = await fetchTransaction();
    status == "success" && setTransaction(transaction);

    //receive data and mount to the transactions by setTransaction()
  };
  return (
    <UserContext.Provider
      value={{ user, setUser, transaction, getTransaction, toggleModal, show }}
    >
      {children}
    </UserContext.Provider>
  );
};
export const useUser = () => useContext(UserContext);
