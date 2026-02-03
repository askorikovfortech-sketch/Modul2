import cross from "../../images/cross.png";
import check_mark from "../../images/check_mark.png";
import "./styles.scss";

export const ExpenseEditing = ({
  editForm,
  errors,
  EditChange,
  SaveEdit,
  CancelEdit,
}) => {
  return (
    <div className="expense-editing">
      <hr className="expense-editing__line-top" />
      <div className="expense-editing__general">
        <div className="expense-editing__block-category">
          <input
            type="text"
            className="expense-editing__category"
            name="category"
            value={editForm.category}
            onChange={EditChange}
            placeholder="Категория"
          />
          <hr className="expense-editing__line" />
          {errors.category && (
            <span className="expense-editing__error">{errors.category}</span>
          )}
        </div>
        <div className="expense-editing__block">
          <input
            type="text"
            className="expense-editing__date"
            name="date"
            value={editForm.date}
            onChange={EditChange}
            placeholder="ДД.ММ.ГГГГ"
          />
          <hr className="expense-editing__line" />
          {errors.date && (
            <span className="expense-editing__error">{errors.date}</span>
          )}
        </div>
        <div className="expense-editing__block">
          <input
            type="number"
            className="expense-editing__price"
            name="price"
            value={editForm.price}
            onChange={EditChange}
            placeholder="Сумма"
          />
          <hr className="expense-editing__line" />
          {errors.price && (
            <span className="expense-editing__error">{errors.price}</span>
          )}
        </div>
        <div className="expense-editing__edit">
          <button
            className="expense-editing__button"
            type="button"
            onClick={SaveEdit}
          >
            <img
              src={check_mark}
              alt="Сохранить"
              className="expense-editing__images"
            />
          </button>
          <button
            className="expense-editing__button"
            type="button"
            onClick={CancelEdit}
          >
            <img src={cross} alt="Отмена" className="expense-edition__images" />
          </button>
        </div>
      </div>
    </div>
  );
};
