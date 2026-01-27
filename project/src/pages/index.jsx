import { ExpenseList } from "../components/ExpenseList";
import { Header } from "../components/ExpenseHeader";
import "./styles.scss";

export const HomePages = () => {
  return (
    <div className="app">
      <Header />
      <ExpenseList />
    </div>
  );
};
