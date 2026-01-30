import { useState } from "react";
import "./styles.scss";

export const ExpenseForm = ({ addExpense }) => {

  const [category, setCategory] = useState("")

  const [price, setPrice] = useState("")

  const [errors, setErrors] = useState({ category: "", price: "" });

  const generateDate = () => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const addClick = () => {
    setErrors({ category: "", price: "" });

    let hasError = false;

    const newErrors = { category: "", price: "" };

    if (!category.trim()) {
      newErrors.category = "Поле не должно быть пустым и меньше или равно 0";
      hasError = true;
    }
     if (!price.trim()) {
      newErrors.price = "Поле не должно быть пустым и меньше или равно 0";
      hasError = true;
    }
     if (Number(price) <= 0) {
      newErrors.price = "Поле не должно быть пустым и меньше или равно 0";
      hasError = true;

    }if (hasError){
      setErrors(newErrors)
      return
    }

    const newExpense = {
      id: Date.now(),
      category: category.trim(),
      date: generateDate(),
      price: price.trim()
    }

    addExpense(newExpense);
    setCategory("");
    setPrice("");
  };

  return (
    <div className="expense-form">
      <div className="expense-form__record">
        <div className="expense-form__record-block">
          <input
            type="text"
            placeholder="Статья расходов"
            className="expense-form__record-text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <hr className="expense-form__record-line" />
          {errors.category && (
            <span className="expense-form__error-message">
              {errors.category}
            </span>
          )}
        </div>
        <div className="expense-form__record-block">
          <input
            type="number"
            placeholder="Сумма"
            className="expense-form__record-text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            min={0}
          />
          <hr className="expense-form__record-line" />
          {errors.price && (
            <span className="expense-form__error-message">{errors.price}</span>
          )}
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
