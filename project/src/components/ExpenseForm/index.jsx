import "./styles.scss";

export const AddForm = ({
  expense,
  errors,
  change,
  submit,
  create
}) => {
  return (
    <div className="add-form">
      <div className="add-form__record">
        <div className="add-form__record-block">
          <input
            type="text"
            placeholder="Статья расходов"
            className="add-form__record-text"
            value={expense.category}
            onChange={(e) => change("category", e.target.value)}
          />
          <hr className="add-form__record-line" />
          <span
            className={`add-form__error-message ${
              submit && errors.category
                ? "add-form__error-message__visible"
                : ""
            }`}
          >
            {errors.category}
          </span>
        </div>
        <div className="add-form__record-block">
          <input
            type="number"
            placeholder="Сумма"
            className="add-form__record-text"
            value={expense.price}
            onChange={(e) => change("price", e.target.value)}
            min={0}
          />
          <hr className="add-form__record-line" />
          <span
            className={`add-form__error-message ${
              submit && errors.price ? "add-form__error-message__visible" : ""
            }`}
          >
            {errors.price}
          </span>
        </div>
        <button
          type="button"
          className="add-form__record-button"
          onClick={create}
        >
          Добавить
        </button>
      </div>
    </div>
  );
};
