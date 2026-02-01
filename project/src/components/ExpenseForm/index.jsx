  import { useState } from "react";
  import "./styles.scss";

  export const ExpenseForm = ({ addExpense }) => {
    const newExpenses = {category: "", price: ""};

    const [expenseForm, setExpenseForm] = useState(newExpenses)

    const [errors, setErrors] = useState(newExpenses);

    const generateDate = () => {
      const now = new Date();
      const day = String(now.getDate()).padStart(2, "0");
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const year = now.getFullYear();
      return `${day}.${month}.${year}`;
    };

    const addClick = () => {
      setErrors(newExpenses);

      const newErrors = newExpenses;

      if (!expenseForm.category.trim()) {
        newErrors.category = "Поле не должно быть пустым и меньше или равно 0";
        setErrors(newErrors);
        return;
      }
      if (!expenseForm.price.trim()) {
        newErrors.price = "Поле не должно быть пустым и меньше или равно 0";
        setErrors(newErrors);
        return;
      }
      if (Number(expenseForm.price) <= 0) {
        newErrors.price = "Поле не должно быть пустым и меньше или равно 0";
        setErrors(newErrors);
        return;
      }

      const createExpense = {
        id: Date.now(),
        category: expenseForm.category.trim(),
        date: generateDate(),
        price: expenseForm.price.trim(),
      };

      addExpense(createExpense);
      setExpenseForm(newExpenses);
    };

    const processСhange = (box, value) => {
      setExpenseForm((prev) => ({
        ...prev,
        [box]: value,
      }));

      if (errors[box]) {
        setErrors((prev) => ({
          ...prev,
          [box]: "",
        }));
      }
    };

    return (
      <div className="expense-form">
        <div className="expense-form__record">
          <div className="expense-form__record-block">
            <input
              type="text"
              placeholder="Статья расходов"
              className="expense-form__record-text"
              value={expenseForm.category}
              onChange={(e) => processСhange("category", e.target.value)}
            />
            <hr className="expense-form__record-line" />
            <span className="expense-form__error-message">{errors.category}</span>
          </div>
          <div className="expense-form__record-block">
            <input
              type="number"
              placeholder="Сумма"
              className="expense-form__record-text"
              value={expenseForm.price}
              onChange={(e) => processСhange("price", e.target.value)}
              min={0}
            />
            <hr className="expense-form__record-line" />
            <span className="expense-form__error-message">{errors.price}</span>
          </div>
          <button
            type="button"
            className="expense-form__record-button"
            onClick={addClick}
          >
            Добавить
          </button>
        </div>
      </div>
    );
  };
