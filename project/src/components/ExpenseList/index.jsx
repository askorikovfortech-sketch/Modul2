import { useState } from "react";
import { Expense } from "../Expense";
import { expenses } from "../constants";
import "./styles.scss";

export const ExpenseList = () => {
  const [expensesList, setExpensesList] = useState(expenses);

  const removeExpense = (remote) => {
    const updatedExpenses = expensesList.filter(
      (expense) => expense.id !== remote,
    );
    setExpensesList(updatedExpenses);
  };

  return (
    <div className="expense-list">
      <div className="expense-list__block">
        <div className="expense-list__category">
          <hr className="expense-list__category-line" />
          <p className="expense-list__category-text">Статья расходов</p>
          <p className="expense-list__category-text">Дата</p>
          <p className="expense-list__category-text">Сумма расхода</p>
        </div>
        {expensesList.map((expense) => (
          <Expense
            key={expense.id}
            expense={expense}
            removeExpense={removeExpense}
          />
        ))}
      </div>
    </div>
  );
};
