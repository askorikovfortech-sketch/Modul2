import "./styles.scss";

export const ExpenseForm = ({
  expenseForm,
  errors,
  onUpdsteExpenseForm,
  onAddExpense,
}) => {
  return (
    <div className="expense-form">
      <div className="expense-form__record">
        <div className="expense-form__record-block">
          <input
            type="text"
            placeholder="Статья расходов"
            className="expense-form__record-text"
            value={expenseForm.category}
            onChange={(e) => onUpdsteExpenseForm("category", e.target.value)}
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
            onChange={(e) => onUpdsteExpenseForm("price", e.target.value)}
            min={0}
          />
          <hr className="expense-form__record-line" />
          <span className="expense-form__error-message">{errors.price}</span>
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
