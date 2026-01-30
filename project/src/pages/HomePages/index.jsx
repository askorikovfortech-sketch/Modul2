import { useState } from "react";
import { ExpenseList } from "../../components/ExpenseList";
import { Header } from "../../components/Header";
import { ExpenseForm } from "../../components/ExpenseForm";
import "./styles.scss";

export const HomePages = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  return (
    <div className="home">
      <Header />

      <main className="main">
        <ExpenseForm addExpense={addExpense} />
        <ExpenseList expenses={expenses} />
      </main>
    </div>
  );
};
