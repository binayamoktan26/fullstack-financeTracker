import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useUser } from "../src/context/UserContex";
import Form from "react-bootstrap/Form";
import { BsClipboardPlus } from "react-icons/bs";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import { deleteTransaction } from "../helper/axiosHelper.js";
import { toast } from "react-toastify";
export const TransactionTable = () => {
  const [displayTransaction, setDisplayTransaction] = useState([]);

  const { transaction, toggleModal,getTransaction } = useUser();
  const [idsToDelete, setIdsToDelete] = useState([]);

  useEffect(() => {
    setDisplayTransaction(transaction);
  }, [transaction]);
  useEffect(() => {
    console.log("Selected IDs:", idsToDelete);
  }, [idsToDelete]);

  const balance = displayTransaction.reduce((acc, t) => {
    return t.type === "income" ? acc + t.amount : acc - t.amount;
  }, 0);

  const handleOnSearch = (e) => {
    const { value } = e.target;
    console.log(value);
    const filteredAvg = transaction.filter(({ title }) => {
      return title.toLowerCase().includes(value.toLowerCase());
    });
    console.log(filteredAvg);
    setDisplayTransaction(filteredAvg);
  };

  const handleOnSelect = (e) => {
    const { checked, value } = e.target;
    console.log(checked, value);
    if (value === "all") {
      checked
        ? setIdsToDelete(displayTransaction.map((item) => item._id))
        : setIdsToDelete([]);
      return;
    }

    if (checked) {
      setIdsToDelete([...idsToDelete, value]);
    } else {
      setIdsToDelete(idsToDelete.filter((id) => id !== value));
    }
  };
  const handleOnDelete = async () => {
    if (confirm(`Are you sure to delete ${idsToDelete.length} transactions?`)) {
      console.log(idsToDelete);
      // const {status , message} = await deleteTransaction(idsToDelete);
      const pending = deleteTransaction(idsToDelete);
      toast.promise(pending, {
        pending: "please wait",
      });
      const { status, message } = await pending;
      // console.log(status , message);
      toast[status](message);
      status === "success" && getTransaction() && setIdsToDelete([])
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between pt-2 mb-2">
        <div>{displayTransaction.length} Transaction found ! </div>
        <div>
          <Form.Control
            type="text"
            placeholder="Search transactions..."
            onChange={handleOnSearch}
          ></Form.Control>
        </div>
        <div>
          <Button variant="primary" onClick={() => toggleModal(true)}>
            <BsClipboardPlus /> Add new Transaction
          </Button>
        </div>
      </div>
      <div>
        <Form.Check
          label="Select All"
          onChange={handleOnSelect}
          value="all"
          checked={idsToDelete.length === displayTransaction.length}
        />
      </div>
      <Table striped hover>
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
          {displayTransaction.length > 0 &&
            displayTransaction.map((t, i) => (
              <tr key={t._id}>
                <td>{i + 1}</td>
                <td>
                  <Form.Check
                    label={t.createdAt.slice(0, 10)}
                    value={t._id}
                    onChange={handleOnSelect}
                    checked={idsToDelete.includes(t._id)}
                  />
                </td>
                <td>{t.title}</td>
                {t.type === "expenses" && (
                  <>
                    <td className="dr">{t.amount}</td>
                    <td></td>
                  </>
                )}
                {t.type === "income" && (
                  <>
                    <td></td>
                    <td className="cr">{t.amount}</td>
                  </>
                )}
              </tr>
            ))}

          <tr className="fw-bold text-end">
            <td colSpan={3}>Total</td>
            <td colSpan={2}>{balance}</td>
          </tr>
        </tbody>
      </Table>
      {idsToDelete.length > 0 && (
        <div className="d-grid">
          <Button variant="danger" onClick={handleOnDelete}>
            Delete {idsToDelete.length} Transactions
          </Button>
        </div>
      )}
    </div>
  );
};
