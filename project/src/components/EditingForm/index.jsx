import cross from "../../images/cross.png";
import checkMark from "../../images/checkMark.png";
import "./styles.scss";

export const EditingForm = ({
  editedExpense,
  editingErrors,
  handleChangeEditingForm,
  validateEditingForm,
  cancelEditingExpense,
}) => {
  return (
    <div className="edited-expense">
      <hr className="edited-expense__line-top" />
      <div className="edited-expense__general">
        <div className="edited-expense__block-category">
          <input
            type="text"
            className="edited-expense__category"
            name="category"
            value={editedExpense.category}
            onChange={handleChangeEditingForm}
            placeholder="Категория"
          />
          <hr className="edited-expense__line" />
          {editingErrors.category && (
            <span className="edited-expense__error">{editingErrors.category}</span>
          )}
        </div>
        <div className="edited-expense__block">
          <input
            type="text"
            className="edited-expense__date"
            name="date"
            value={editedExpense.date}
            onChange={handleChangeEditingForm}
            placeholder="ДД.ММ.ГГГГ"
          />
          <hr className="edited-expense__line" />
          {editingErrors.date && (
            <span className="edited-expense__error">{editingErrors.date}</span>
          )}
        </div>
        <div className="edited-expense__block">
          <input
            type="number"
            className="edited-expense__price"
            name="price"
            value={editedExpense.price}
            onChange={handleChangeEditingForm}
            placeholder="Сумма"
          />
          <hr className="edited-expense__line" />
          {editingErrors.price && (
            <span className="edited-expense__error">{editingErrors.price}</span>
          )}
        </div>
        <div className="edited-expense__edit">
          <button
            className="edited-expense__button"
            type="button"
            onClick={validateEditingForm}
          >
            <img
              src={checkMark}
              alt="Сохранить"
              className="edited-expense__images-check"
            />
          </button>
          <button
            className="edited-expense__button"
            type="button"
            onClick={cancelEditingExpense}
          >
            <img src={cross} alt="Отмена" className="edited-expense__images" />
          </button>
        </div>
      </div>
    </div>
  );
};
