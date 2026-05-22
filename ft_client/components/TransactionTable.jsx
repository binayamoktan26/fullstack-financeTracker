import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import { useUser } from '../src/context/UserContex';
import form from "react-bootstrap/Form";
import { BsClipboardPlus } from "react-icons/bs";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
export const TransactionTable = () => {
  const [displayTransaction, setDisplayTransaction]= useState([])

  const{transaction}  =useUser()

 useEffect(()=>{
  setDisplayTransaction(transaction)  
 }, [transaction])
 const balance = displayTransaction.reduce((acc, t) => {
  return t.type === "income" ? acc + t.amount : acc - t.amount;
 }, 0);

 const handleOnSearch =(e)=>{
  const {value} = e.target
  console.log(value)
  const filteredAvg = transaction.filter(({title})=>{
 return  title.toLowerCase().includes(value.toLowerCase())
  }) 
  console.log(filteredAvg)
  setDisplayTransaction(filteredAvg)
 }
  return (<>
  <div className='d-flex justify-content-between pt-2 mb-2'>
    <div>{displayTransaction.length} Transaction found ! </div>
    <div>
      <form.Control type="text" placeholder="Search transactions..." onChange={handleOnSearch}></form.Control>
    </div>
    <div>
      <Button variant="primary">  <BsClipboardPlus /> Add new Transaction</Button>
    </div>
  
  </div>
    <Table striped  hover>
      <thead>
        <tr>
          <th>S.N</th>
          <th>Date</th>
          <th>Title</th>
          <th>Dr.</th>
          <th>Cr.</th>
        </tr>
      </thead>
      <tbody>
       {displayTransaction.length >0 && displayTransaction.map((t , i)=>(
  <tr key={t._id}>
          <td>{i+1}</td>
          <td>{t.createdAt.slice(0,10)
}</td>
          <td>{t.title}</td>
          {
            t.type === "expenses" && <>
             <td className='dr'>{t.amount}</td>
          <td></td>
            </>
          }
           {
            t.type === "income" && <>
             <td></td>
          <td className='cr'>{t.amount}</td>
            </>
          }
         
        </tr>
       ))}
      
      
        <tr className='fw-bold text-end'>
          
          <td colSpan={3}>Total</td>
          <td colSpan={2}>{balance}</td>
        </tr>
      </tbody>
    </Table>
    </>
  );
}
  