import React from 'react'
import Table from 'react-bootstrap/Table';
export const TransactionTable = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Title</th>
          <th>Dr .</th>
          <th>Cr.</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>2023-10-01</td>
          <td>Salary</td>
          <td></td>
          <td>rs 22222</td>
        </tr>
        <tr>
          <td>2</td>
          <td>2023-10-02</td>
          <td>shopping</td>
          <td>Rs.12000</td>
          <td></td>
        </tr>
        <tr className='fw-bold text-end'>
          
          <td colSpan={3}>Total</td>
          <td colSpan={2}>50000</td>
        </tr>
      </tbody>
    </Table>
  );
}
  