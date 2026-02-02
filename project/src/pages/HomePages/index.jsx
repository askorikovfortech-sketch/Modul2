import { ExpenseList } from "../../components/ExpenseList";
import { Header } from "../../components/Header";
import { ExpenseTotal } from "../../components/ExpenseTotal";
import "./styles.scss";
import { expenses } from "../../components/constants";

export const calculateTotalExpenses = (expenses) => {
  return expenses.reduce((sum, expense) => {
    const price = Number(expense.price) || 0;
    return sum + price;
  }, 0);
};

export const HomePages = () => {
  return (
    <div className="home">
      <Header />

      <main className="main">
        <ExpenseTotal expenses={expenses} />
        <ExpenseList />
      </main>
    </div>
  );
};
