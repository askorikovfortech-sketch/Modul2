import { ExpenseList } from "../components/ExpenseList/ExpenseList";
import { ExpenseHeader } from "../components/ExpenseHeader/ExpenseHeader";
import "./HomePageasStyle.scss"

export const HomePages = () => {
  return (
    <div className="app">
      <header className="header">
        <ExpenseHeader/>
      </header>
      <main className="main">
        <ExpenseList />
      </main>
    </div>
  );
};
