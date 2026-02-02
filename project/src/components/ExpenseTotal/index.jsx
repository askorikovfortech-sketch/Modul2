import { calculateTotalExpenses } from "../../pages/HomePages";
import "./styles.scss";

export const ExpenseTotal = ({ expenses = [] }) => {
    const total = calculateTotalExpenses(expenses);
  return (
    <div class="expense-total">
      <div class="expense-total__box">
        <p class="expense-total__text">Всего:</p>
        <p class="expense-total__sum">{total} ₽</p>
      </div>
    </div>
  );
};
