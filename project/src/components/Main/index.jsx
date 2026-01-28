import { MainList } from "../MainList";
import { expenses } from "../constants";
import { useState } from "react";
import "./styles.scss";

export const Main = () => {
  const [items, setItems] = useState(expenses);

  const removeItem = (idToRemove) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== idToRemove));
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
        {items.map((item) => (
          <MainList key={item.id} expense={item} removeItem={removeItem} />
        ))}
      </div>
    </main>
  );
};
