import cross from "../../images/cross.png";
import checkMark from "../../images/checkMark.png";
import "./styles.scss";

export const EditedExpense = ({ 
  editingData,
  errors,
  change,
  save,
  cancel
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
            value={editingData.category}
            onChange={change}
            placeholder="Категория"
          />
          <hr className="edited-expense__line" />
          {errors.category && (
            <span className="edited-expense__error">{errors.category}</span>
          )}
        </div>
        <div className="edited-expense__block">
          <input
            type="text"
            className="edited-expense__date"
            name="date"
            value={editingData.date}
            onChange={change}
            placeholder="ДД.ММ.ГГГГ"
          />
          <hr className="edited-expense__line" />
          {errors.date && (
            <span className="edited-expense__error">{errors.date}</span>
          )}
        </div>
        <div className="edited-expense__block">
          <input
            type="number"
            className="edited-expense__price"
            name="price"
            value={editingData.price}
            onChange={change}
            placeholder="Сумма"
          />
          <hr className="edited-expense__line" />
          {errors.price && (
            <span className="edited-expense__error">{errors.price}</span>
          )}
        </div>
        <div className="edited-expense__edit">
          <button className="edited-expense__button" type="button" onClick={save}>
            <img
              src={checkMark}
              alt="Сохранить"
              className="edited-expense__images"
            />
          </button>
          <button
            className="edited-expense__button"
            type="button"
            onClick={cancel}
          >
            <img src={cross} alt="Отмена" className="edited-expense__images" />
          </button>
        </div>
      </div>
    </div>
  );
};
