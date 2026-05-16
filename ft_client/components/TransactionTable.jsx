import React from 'react'
import Table from 'react-bootstrap/Table';
import { useUser } from '../src/context/UserContex';
export const TransactionTable = () => {
  const{transaction}  =useUser()
  console.log(transaction)
 const balance = transaction.reduce((acc, t) => {
  return t.type === "income" ? acc + t.amount : acc - t.amount;
 }, 0);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Title</th>
          <th>Dr.</th>
          <th>Cr.</th>
        </tr>
      </thead>
      <tbody>
       {transaction.length >0 && transaction.map((t , i)=>(
  <tr key={t._id}>
          <td>{i+1}</td>
          <td>{t.createdAt.slice(0,10)
}</td>
          <td>{t.title}</td>
          {
            t.type === "expenses" && <>
             <td>{t.amount}</td>
          <td>{t.cr}</td>
            </>
          }
           {
            t.type === "income" && <>
             <td></td>
          <td>{t.amount}</td>
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
  );
}
  