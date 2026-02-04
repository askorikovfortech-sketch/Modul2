import { useState } from "react";
import { ExpenseList } from "../../components/ExpenseList";
import { Header } from "../../components/Header";
import { ExpenseTotal } from "../../components/ExpenseTotal";
import { expenses as initialExpenses } from "../../components/constants";
import "./styles.scss";

export const HomePages = () => {
  const [expenses, setExpenses] = useState(initialExpenses);
  const calculateTotalExpenses = () => {
    return expenses.reduce((total, expense) => {
      const price = Number(expense.price) || 0;
      return total + price;
    }, 0);
  };

  const totalExpenses = calculateTotalExpenses();

  const handleDeleteExpense = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id),
    );
  };

  const handleEditExpense = (id, updatedExpense) => {
    setExpenses((prevExpenses) =>
      prevExpenses.map((expense) =>
        expense.id === id ? { ...expense, ...updatedExpense } : expense,
      ),
    );
  };

  return (
    <div className="home">
      <Header />
      <main className="main">
        <ExpenseTotal total={totalExpenses} />
        <ExpenseList
          expenses={expenses}
          deleteExpense={handleDeleteExpense}
          editExpense={handleEditExpense}
        />
      </main>
    </div>
  );
};
