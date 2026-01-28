import { MainList } from "../MainList";
import { expenses } from "../constants";
import "./styles.scss";

export const Main = () => {
  return (
    <main className="main">
      <div className="main__block">
        <div className="main-category">
          <hr className="main-category__line" />
          <p className="main-category__text">Статья расходов</p>
          <p className="main-category__text">Дата</p>
          <p className="main-category__text">Сумма расхода</p>
        </div>
        {expenses.map((expense) => (
          <MainList key={expense.id} expense={expense} />
        ))}
      </div>
    </main>
  );
};
