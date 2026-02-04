import "./styles.scss";

export const ExpenseForm = ({
  expense,
  errors,
  handleExpenseChange,
  formSubmitted,
  onAddExpense,
}) => {
  const handleChange = (key, value) => {
    handleExpenseChange(key, value);
  };

  return (
    <div className="expense-form">
      <div className="expense-form__record">
        <div className="expense-form__record-block">
          <input
            type="text"
            placeholder="Статья расходов"
            className="expense-form__record-text"
            value={expense.category}
            onChange={(e) => handleChange("category", e.target.value)}
          />
          <hr className="expense-form__record-line" />
          <span
            className={`expense-form__error-message ${
              formSubmitted && errors.category
                ? "expense-form__error-message--visible"
                : ""
            }`}
          >
            {errors.category}
          </span>
        </div>
        <div className="expense-form__record-block">
          <input
            type="number"
            placeholder="Сумма"
            className="expense-form__record-text"
            value={expense.price}
            onChange={(e) => handleChange("price", e.target.value)}
            min={0}
          />
          <hr className="expense-form__record-line" />
          <span
            className={`expense-form__error-message ${
              formSubmitted && errors.price
                ? "expense-form__error-message--visible"
                : ""
            }`}
          >
            {errors.price}
          </span>
        </div>
        <button
          type="button"
          className="expense-form__record-button"
          onClick={onAddExpense}
        >
          Добавить
        </button>
      </div>
    </div>
  );
};
