import { useMemo, useState } from "react";
import expenses from "./expenses";
//c
function ExpenseAnalytics() {
  const [category, setCategory] = useState("All");
  //c
  // Filter expenses
  const filteredExpenses = expenses.filter(
    (expense) => category === "All" || expense.category === category,
  );
  //c
  // Total expense
  const totalExpense = useMemo(() => {
    console.log("Calculating total...");

    return filteredExpenses.reduce((sum, expense) => sum + expense.amount, 0);
  }, [filteredExpenses]);
  //c
  // Category Breakdown
  const categoryBreakdown = useMemo(() => {
    console.log("Calculating breakdown...");

    return filteredExpenses.reduce((acc, expense) => {
      acc[expense.category] = (acc[expense.category] || 0) + expense.amount;

      return acc;
    }, {});
  }, [filteredExpenses]);

  return (
    <div>
      <h1>Expense Analytics</h1>

      <hr />

      <div>
        <label>Category : </label>

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="All">All</option>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </div>

      <hr />

      <h2>Total Expense : ₹{totalExpense}</h2>

      <hr />

      <h2>Category Breakdown</h2>

      <ul>
        {Object.entries(categoryBreakdown).map(([category, amount]) => (
          <li key={category}>
            {category} : ₹{amount}
          </li>
        ))}
      </ul>

      <hr />

      <h2>Expense List ({filteredExpenses.length})</h2>

      <ul>
        {filteredExpenses.map((expense) => (
          <li key={expense.id}>
            {expense.title} - ₹{expense.amount} ({expense.category})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseAnalytics;
