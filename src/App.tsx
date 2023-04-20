import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import ExpandableTextArea from "./components/ExpandableTextArea";
import Form from "./components/Form";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "dummy description", amount: 500, category: "Utilities" },
    { id: 2, description: "second description", amount: 400, category: "Entertainment" },
    { id: 3, description: "third description", amount: 300, category: "Groceries" },
    { id: 4, description: "fourth description", amount: 200, category: "Utilities" },
  ]);

  const visibleExpenses = selectedCategory ? expenses.filter((e) => e.category === selectedCategory) : expenses;

  return (
    <>
      <div className="mb-5">
        <ExpenseForm onSubmit={(expense) => setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])} />
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={(category) => setSelectedCategory(category)} />
      </div>
      <ExpenseList expenses={visibleExpenses} onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))} />
    </>
  );
}

export default App;
