import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import ExpandableTextArea from "./components/ExpandableTextArea";
import Form from "./components/Form";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "dummy description", amount: 500, category: "utilities" },
    { id: 2, description: "second description", amount: 400, category: "utilities" },
    { id: 3, description: "third description", amount: 300, category: "utilities" },
    { id: 4, description: "fourth description", amount: 200, category: "utilities" },
  ]);

  return (
    <>
      <ExpenseForm />
      <ExpenseList expenses={expenses} onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))} />
    </>
  );
}

export default App;
