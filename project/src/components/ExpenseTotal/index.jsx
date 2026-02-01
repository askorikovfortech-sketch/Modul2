import { expenses } from "../constants";
import "./styles.scss";

export const ExpenseTotal = () => {

    const total = expenses.reduce((sum, expense) => {
        const price = Number(expense.price) || 0;
        return sum + price;
    }, 0);

  return (
    <div class="expense-total">
      <div class="expense-total__box">
        <p class="expense-total__text">Всего:</p>
        <p class="expense-total__sum">{total} ₽</p>
      </div>
    </div>
  );
};
