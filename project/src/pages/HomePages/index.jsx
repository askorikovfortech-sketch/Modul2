import { ExpenseList } from "../../components/ExpenseList";
import { Header } from "../../components/Header";
import { ExpenseTotal } from "../../components/ExpenseTotal";
import "./styles.scss";

export const HomePages = () => {
  return (
    <div className="home">
      <Header />

      <main className="main">
        <ExpenseTotal/>
        <ExpenseList />
      </main>
    </div>
  );
};
