import "./styles.scss";

export const AddForm = ({
  expenseAdd,
  errorsAdd,
  handlerChangeField,
  submitVisibiliErrors,
  validateForm
}) => {
  return (
    <div className="add-form">
      <div className="add-form__record">
        <div className="add-form__record-block">
          <input
            type="text"
            placeholder="Статья расходов"
            className="add-form__record-text"
            value={expenseAdd.category}
            onChange={(e) => handlerChangeField("category", e.target.value)}
          />
          <hr className="add-form__record-line" />
          <span
            className={`add-form__error-message ${
              submitVisibiliErrors && errorsAdd.category
                ? "add-form__error-message__visible"
                : ""
            }`}
          >
            {errorsAdd.category}
          </span>
        </div>
        <div className="add-form__record-block">
          <input
            type="number"
            placeholder="Сумма"
            className="add-form__record-text"
            value={expenseAdd.price}
            onChange={(e) => handlerChangeField("price", e.target.value)}
            min={0}
          />
          <hr className="add-form__record-line" />
          <span
            className={`add-form__error-message ${
              submitVisibiliErrors && errorsAdd.price ? "add-form__error-message__visible" : ""
            }`}
          >
            {errorsAdd.price}
          </span>
        </div>
        <button
          type="button"
          className="add-form__record-button"
          onClick={validateForm}
        >
          Добавить
        </button>
      </div>
    </div>
  );
};
