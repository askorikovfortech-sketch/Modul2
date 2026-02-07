import cross from "../../images/cross.png";
import checkMark from "../../images/checkMark.png";
import "./styles.scss";

export const EditedExpense = ({
  editedExpense,
  editErrors,
  changeField,
  validateForm,
  cancelEditing,
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
            onChange={changeField}
            placeholder="Категория"
          />
          <hr className="edited-expense__line" />
          {editErrors.category && (
            <span className="edited-expense__error">{editErrors.category}</span>
          )}
        </div>
        <div className="edited-expense__block">
          <input
            type="text"
            className="edited-expense__date"
            name="date"
            value={editedExpense.date}
            onChange={changeField}
            placeholder="ДД.ММ.ГГГГ"
          />
          <hr className="edited-expense__line" />
          {editErrors.date && (
            <span className="edited-expense__error">{editErrors.date}</span>
          )}
        </div>
        <div className="edited-expense__block">
          <input
            type="number"
            className="edited-expense__price"
            name="price"
            value={editedExpense.price}
            onChange={changeField}
            placeholder="Сумма"
          />
          <hr className="edited-expense__line" />
          {editErrors.price && (
            <span className="edited-expense__error">{editErrors.price}</span>
          )}
        </div>
        <div className="edited-expense__edit">
          <button
            className="edited-expense__button"
            type="button"
            onClick={validateForm}
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
            onClick={cancelEditing}
          >
            <img src={cross} alt="Отмена" className="edited-expense__images" />
          </button>
        </div>
      </div>
    </div>
  );
};
