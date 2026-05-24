import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useUser } from '../src/context/UserContex'; 

export const  CustomModel=({children}) =>{
const {toggleModal , show } =useUser()
//   const [show, setShow] = useState(false);

//   const toggleModal = (value) => setShow(value);
//   const handleShow = () => setShow(true);
  return (
      <Modal
        show={show}
        onHide={()=>toggleModal(false)}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {children}
        </Modal.Body>
        
      </Modal>
  );
}


