import { ExpenseList } from "../../components/ExpenseList";
import { Header } from "../../components/Header";
import "./styles.scss";

export const HomePages = () => {
  
  return (
    <div className="home">
      <Header />

      <main className="main">
        <ExpenseList />
      </main>
    </div>
  );
};
