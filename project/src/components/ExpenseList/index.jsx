import { Expense } from "../ExpenseItem";
import "./styles.scss";
import { expenses } from "../constants";

export const ExpenseList = () => {
  return (
    <main className="main">
      <div className="main__block">
        <div className="main-katigories">
          <hr className="main-katigories__line" />
          <p className="main-katigories__text">Статья расходов</p>
          <p className="main-katigories__text">Дата</p>
          <p className="main-katigories__text">Сумма расхода</p>
        </div>
        {expenses.map((expense) => (
          <Expense key={expense.id} expense={expense} />
        ))}
      </div>
    </main>
  );
};
