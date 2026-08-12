import { useState } from "react";

function Pr3Expense() {
  //--declarations-
  const [editIndex, setEditIndex] = useState(null);
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    category: "",
  });
  //--
  return (
    <>
      <h1>EXPENSE</h1> <hr />
      <div>
        <input
          type="text"
          name="title"
          value={expense.title}
          placeholder="enter title here"
          onChange={(e) => setExpense({ ...expense, title: e.target.value })}
        />
        <input
          type="text"
          name="amount"
          placeholder="enter amount here"
          value={expense.amount}
          onChange={(e) => setExpense({ ...expense, amount: e.target.value })}
        />
        <input
          type="text"
          name="category"
          value={expense.category}
          placeholder="enter category here"
          onChange={(e) => setExpense({ ...expense, category: e.target.value })}
        />
        <br /> <br />
      </div>
      <div>
        <button
          onClick={() => {
            if (editIndex !== null) {
              const updatedExpenses = expenses.map((item, index) =>
                editIndex == index ? expense : item,
              );

              setExpenses(updatedExpenses);
              setExpense({
                title: "",
                amount: "",
                category: "",
              });
              setEditIndex(null);
            } else {
              setExpenses([...expenses, expense]);
              setExpense({
                title: "",
                amount: "",
                category: "",
              });
            }
          }}
        >
          ADD EXPENSE
        </button>
        <hr />
      </div>
      <div>
        <ul>
          {expenses.map((item, index) => (
            <li>
              {item.title} {item.amount} {item.category}
              <button
                onClick={() => {
                  setEditIndex(index);
                  setExpense({
                    title: item.title,
                    amount: item.amount,
                    category: item.category,
                  });
                }}
              >
                edit
              </button>
              <button
                onClick={() =>
                  setExpenses(expenses.filter((_, i) => i !== index))
                }
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Pr3Expense;
