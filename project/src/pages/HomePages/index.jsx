import { ExpenseList } from "../../components/ExpenseList";
import { Header } from "../../components/Header";
import { ExpenseInput } from "../../components/ExpenseInput";
import "./styles.scss";

export const HomePages = () => {
  return (
    <div className="home">
      <Header />

      <main className="main">
        <ExpenseInput />
        <ExpenseList />
      </main>
    </div>
  );
};
