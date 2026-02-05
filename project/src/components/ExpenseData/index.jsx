import cross from "../../images/cross.png";
import checkMark from "../../images/checkMark.png";
import "./styles.scss";

export const ExpenseData = ({ 
  editingData,
  errors,
  change,
  save,
  cancel
}) => {
  return (
    <div className="expense-data">
      <hr className="expense-data__line-top" />
      <div className="expense-data__general">
        <div className="expense-data__block-category">
          <input
            type="text"
            className="expense-data__category"
            name="category"
            value={editingData.category}
            onChange={change}
            placeholder="Категория"
          />
          <hr className="expense-data__line" />
          {errors.category && (
            <span className="expense-data__error">{errors.category}</span>
          )}
        </div>
        <div className="expense-data__block">
          <input
            type="text"
            className="expense-data__date"
            name="date"
            value={editingData.date}
            onChange={change}
            placeholder="ДД.ММ.ГГГГ"
          />
          <hr className="expense-data__line" />
          {errors.date && (
            <span className="expense-data__error">{errors.date}</span>
          )}
        </div>
        <div className="expense-data__block">
          <input
            type="number"
            className="expense-data__price"
            name="price"
            value={editingData.price}
            onChange={change}
            placeholder="Сумма"
          />
          <hr className="expense-data__line" />
          {errors.price && (
            <span className="expense-data__error">{errors.price}</span>
          )}
        </div>
        <div className="expense-data__edit">
          <button className="expense-data__button" type="button" onClick={save}>
            <img
              src={checkMark}
              alt="Сохранить"
              className="expense-data__images"
            />
          </button>
          <button
            className="expense-data__button"
            type="button"
            onClick={cancel}
          >
            <img src={cross} alt="Отмена" className="expense-data__images" />
          </button>
        </div>
      </div>
    </div>
  );
};
