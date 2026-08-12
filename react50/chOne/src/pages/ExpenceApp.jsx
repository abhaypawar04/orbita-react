import { useState } from "react";

function ExpenceApp() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const [expenses, setExpenses] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  //---
  //---
  const handleEdit = (item, index) => {
    setTitle(item.title);
    setAmount(item.amount);
    setCategory(item.category);
    setEditIndex(index);
  };
  //----
  //----
  const handleDelete = (index) => {
    setExpenses(() => expenses.filter((_, i) => i !== index));
  };
  //---
  //-----------------------------------------
  const handleAdd = () => {
    if (editIndex !== null) {
      setExpenses((prev) =>
        prev.map((item, index) =>
          index == editIndex
            ? {
                ...item,
                title,
                amount: Number(amount),
                category,
              }
            : item,
        ),
      );
      setEditIndex(null);
    } else {
      const newExpenses = {
        id: Date.now(),
        title,
        amount: Number(amount),
        category,
      };

      setExpenses((prev) => [...prev, newExpenses]);
    }
    setTitle("");
    setAmount("");
    setCategory("");
  };
  //-----------------------------------------

  //---
  const total = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);
  //---
  return (
    <>
      <h1>Expensio</h1> <hr />
      <div>
        <table>
          <tbody>
            <tr>
              <th>
                <input
                  type="text"
                  name="title"
                  value={title}
                  placeholder="enter title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </th>
              <th>
                {" "}
                <input
                  type="text"
                  name="amount"
                  value={amount}
                  placeholder="enter amount"
                  onChange={(e) => setAmount(e.target.value)}
                />
              </th>
              <th>
                {" "}
                <input
                  type="text"
                  name="category"
                  value={category}
                  placeholder="enter category"
                  onChange={(e) => setCategory(e.target.value)}
                />
              </th>
              <th>
                <button onClick={() => handleAdd()}>
                  {editIndex !== null ? "Update Expense" : "Add Expense"}
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      {/* ----------------------------------------------------------- */}
      <table>
        <tbody>
          <tr>
            <th>title</th>
            <th>amount</th>
            <th>category</th>
          </tr>
          {expenses.map((item, index) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td>{item.amount}</td>
              <td>{item.category}</td>
              <td>
                <button onClick={() => handleDelete(index)}>delete</button>
              </td>
              <td>
                <button onClick={() => handleEdit(item, index)}>edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Total Expenses: ₹{total}</h2>
    </>
  );
}

export default ExpenceApp;
