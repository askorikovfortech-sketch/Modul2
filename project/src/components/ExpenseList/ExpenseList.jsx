import { ExpenseItem } from "../ExpenseItem/ExpenseItem";
import "./ExpenseListStyle.scss";

export const ExpenseList = () => {
  const expenses = [
    {
      id: 1,
      category: "Продукты",
      date: "19.01.2026",
      price: "1223",
    },
    { id: 2, category: "Топливо", date: "20.01.2026", price: "2000" },
  ];

  return (
    <div className="main__block">
      <div className="main-katigories">
        <hr className="main-katigories__line" />
        <p className="main-katigories__text">Статья расходов</p>
        <p className="main-katigories__text">Дата</p>
        <p className="main-katigories__text">Сумма расхода</p>
      </div>
      <div className="main-list">
        <ul className="main-list__ul">
          {expenses.map((expense) => (
            <ExpenseItem key={expense.id} expense={expense} />
          ))}
        </ul>
      </div>
    </div>
  );
};
