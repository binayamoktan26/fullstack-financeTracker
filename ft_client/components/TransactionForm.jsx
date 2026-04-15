import React from 'react'
const initalState = {
  type: "",
  title: "",
  amount: "",
tdate: "",};

export const TransactionForm = () => {
  const [form ,setForm] = useState(initalState);
  return (
  const fields = [
    {
      label: "Type",
      placeholder: "",
      require: true,
      type: "text",
      name: "name",
      
    },
    {
      label: "Title",
      placeholder: "Salary",
      require: true,
      type: "text",
      name: "text",
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
  )
}
