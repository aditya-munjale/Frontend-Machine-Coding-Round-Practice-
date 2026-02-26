import React from "react";
import { useState } from "react";

const ExpenseTracker = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const [descriptionError, setDescriptionError] = useState("");
  const [amountError, setAmountError] = useState("");
  const [categoryError, setCategoryError] = useState("");

  const [expenses, setExpenses] = useState([]);

  //   const [descriptionLists, setDescriptionLists] = useState([]);
  //   const [amountLists, setAmountLists] = useState([]);
  //   const [categoryLists, setCategoryLists] = useState([]);

  const checkDescription = (value) => {
    if (!value) {
      setDescriptionError("pls enter description");
    } else {
      setDescriptionError("");
    }
  };

  const checkAmount = (value) => {
    if (!value) {
      setAmountError("pls enter amount");
    } else {
      setAmountError("");
    }
  };

  const checkCategory = (value) => {
    if (!value) {
      setCategoryError("pls select category");
    } else {
      setCategoryError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      description &&
      amount &&
      category &&
      !descriptionError &&
      !amountError &&
      !categoryError
    ) {
      const newExpenses = {
        description: description,
        amount: amount,
        category: category,
      };

      setExpenses([...expenses, newExpenses]);
      setDescription("");
      setAmount("");
      setCategory("");
    }
  };

  const isDisabled =
    descriptionError ||
    amountError ||
    categoryError ||
    !description ||
    !amount ||
    !category;

  const total = expenses.reduce((acc, curr) => {
    return acc + Number(curr.amount);
  }, 0);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* Form Card */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-md"
      >
        <h2 className="text-xl font-semibold text-center mb-4">
          Expense Tracker
        </h2>

        {/* Description */}
        <div className="mb-4">
          <label className="block mb-1">Description</label>
          <input
            className="w-full border rounded p-2"
            type="text"
            placeholder="Expense description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              checkDescription(e.target.value);
            }}
          />
          {descriptionError && (
            <p className="text-red-600 text-sm mt-1">{descriptionError}</p>
          )}
        </div>

        {/* Amount */}
        <div className="mb-4">
          <label className="block mb-1">Amount</label>
          <input
            className="w-full border rounded p-2"
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
              checkAmount(e.target.value);
            }}
          />
          {amountError && (
            <p className="text-red-600 text-sm mt-1">{amountError}</p>
          )}
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="block mb-1">Category</label>
          <select
            className="w-full border rounded p-2"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
              checkCategory(e.target.value);
            }}
          >
            <option value="">Select Category</option>
            <option value="Utilities">Utilities</option>
            <option value="Grocery">Grocery</option>
            <option value="Entertainment">Entertainment</option>
          </select>
          {categoryError && (
            <p className="text-red-600 text-sm mt-1">{categoryError}</p>
          )}
        </div>

        <button
          disabled={isDisabled}
          className={`w-full p-2 rounded text-white transition ${
            isDisabled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
          type="submit"
        >
          Submit
        </button>
      </form>

      {/* Expense List */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mt-6">
        <h3 className="text-lg font-semibold mb-3">Expense List</h3>

        {expenses.length === 0 ? (
          <p className="text-gray-500 text-sm">No expenses added yet.</p>
        ) : (
          <ul className="space-y-2">
            {expenses.map((item, index) => (
              <li
                key={index}
                className="flex justify-between border-b pb-1 text-sm"
              >
                <span>{item.description}</span>
                <span>₹{item.amount}</span>
                <span className="text-gray-500">{item.category}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4 text-right font-semibold">Total: ₹{total}</div>
      </div>
    </div>
  );
};
export default ExpenseTracker;
