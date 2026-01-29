import "./styles.scss";

export const ExpenseInput = ({ expense }) => {
  return (
    <div className="expense-input">
      <div class="expense-input__record">
        <div class="expense-input__record-block">
          <input
            type="text"
            placeholder="Статья расходов"
            class="expense-input__record-text"
          />
          <hr class="expense-input__record-line" />
        </div>
        <div class="expense-input__record-block">
          <input type="number" placeholder="Сумма" class="expense-input__record-text" />
          <hr class="expense-input__record-line" />
        </div>
        <button type="button" class="expense-input__record-button">
          Добавить
        </button>
      </div>
    </div>
  );
};
