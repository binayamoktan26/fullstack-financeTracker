import React from 'react'
import Form from "react-bootstrap/Form";
import { CustomInput } from './CustomInput';
import useForm from '../src/hooks/useForm';
import Button from 'react-bootstrap/esm/Button';
import { postNewTransaction } from '../helper/axiosHelper';
import { toast } from 'react-toastify';

import { useUser } from '../src/context/UserContex';


const initalState = {
  type: "",
  title: "",
  amount: "",
tdate: "",};

export const TransactionForm = () => {
  
const { form, setForm, handleOnChange } = useForm(initalState);
const {getTransaction} = useUser()
  const handleOnSubmit =async(e)=>{
    e.preventDefault();
    // console.table(form)
    const pending =postNewTransaction(form)
    toast.promise(pending , {
      pending :"Please wait ....."
    })
    const {status,message}=await pending;
toast[status](message)
if (status == "success"){
  setForm(initalState)
  getTransaction()
  }
  }



   const fields = [
    
    {
      label: "Title",
      placeholder: "Salary",
      require: true,
      type: "text",
      name: "title",
      value : form.title,
    },
     {
      label: "Amount",
      placeholder: "1000",
      require: true,
      type: "number",
      name: "amount",
      value : form.amount,
    },
     {
      label: "Transaction Date",
      placeholder: "2023-01-01",
      require: true,
      type: "date",
      name: "tdate",
      value : form.date,
    },
  ];
  return (
    <div className="border rounded p-4">
      <h3 className="mb-3">Add New Transaction</h3>
      <form onSubmit={handleOnSubmit}>     
     <Form.Group className="mb-3">
      <Form.Label>Transaction Type</Form.Label>
      
      <Form.Select name="type"  onChange={handleOnChange}>
        <option value="">--select--</option>
        <option value="income">Income</option>
        <option value="expenses">Expenses</option>
      </Form.Select>
      </Form.Group>

        {fields.map((input) => (
          <CustomInput key={input.name} {...input} onChange={handleOnChange} />
        ))}

        <div className="d-grid">
          {" "}
          <Button variant="primary" type="submit" onClick={handleOnSubmit}>
            Submit
          </Button>
        </div>
      </form>
    </div>
 
  )
}