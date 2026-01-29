import { useState } from "react";
import { Expense } from "../Expense";
import { expenses } from "../constants";
import "./styles.scss";

export const ExpenseList = () => {
  const [expensesList, setExpensesList] = useState(expenses);

  const removeExpense = (Remove) => {
    const expensesFilter = expensesList.filter(
      (expense) => expense.id !== Remove,
    );
    setExpensesList(expensesFilter);
  };

  return (
    <main className="main">
      <div className="main__block">
        <div className="main-category">
          <hr className="main-category__line" />
          <p className="main-category__text">Статья расходов</p>
          <p className="main-category__text">Дата</p>
          <p className="main-category__text">Сумма расхода</p>
        </div>
        {expensesList.map((expense) => (
          <Expense
            key={expense.id}
            expense={expense}
            removeExpense={removeExpense}
          />
        ))}
      </div>
    </main>
  );
};
