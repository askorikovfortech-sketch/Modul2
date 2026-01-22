import { useState } from "react";
import "./App.css";

function App() {
  const date = () => {
    return new Date().toLocaleDateString();
  };
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      discription: "Продукты",
      price: 1250,
      date: new Date().toLocaleDateString(),
      redact: "🖉",
      deleate: "🗑"
    },
    {
      id: 1,
      discription: "Топливо",
      price: 2000,
      date: new Date().toLocaleDateString(),
      redact: "🖉",
      deleate: "🗑"
    },
  ]);
  return (
    <div className="App">
      <main>
        <div class="main__block main__invisibility">
          <hr class="main__line" />
          <div class="main-katigories">
            <p class="main-katigories__text">Статья расхода</p>
            <p class="main-katigories__text">Дата</p>
            <p class="main-katigories__text">Сумма расхода</p>
          </div>
        </div>
        <div class="main__block">
          <hr class="main__line" />
          <div class="main-list">
            <ul class="main-list__ul">
              {expenses.map((expense) => (
                <li key={expense.id} class="main-list__item">
                  <span class="main-list__category">{expense.discription}</span>
                  <div class="main-list__adaptiv">
                    <span class="main-list__date"> {expense.date} </span>
                    <span class="main-list__sum">{expense.price} ₽</span>
                  </div>
                  <div class="main-list__edit">
                    <button type="button" class="main-list__redakter">
                      {expense.redact}
                    </button>
                    <button type="button" class="main-list__delete">
                      {expense.deleate}
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
