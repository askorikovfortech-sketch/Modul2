import bascet from "../../images/basket.png";
import check_mark from "../../images/check_mark.png";
import "./styles.scss";
export const ExpenseEditing = () => {
  return (
    <div className="expense-editing">
      <div className="expense-editing__block">
        <input type="text" className="expense-editing__category" />
        <hr className="expense-editing__line" />
        <span className="expense-editing__error"></span>
      </div>
      <div className="expense-editing__block">
        <input type="number" className="expense-editing__date" />
        <hr className="expense-editing__line" />
        <span className="expense-editing__error"></span>
      </div>
      <div className="expense-editing__price">
        <input type="number" className="expense-editing__price" />
        <hr className="expense-editing__line" />
        <span className="expense-editing__error"></span>
      </div>
      <div className="expense-editing__button">
        <button className="expense-editing__verifed" type="button">
          <img src={check_mark} alt="check_mark" />
        </button>
        <button className="expense-editing__defer" type="button">
          <img src={bascet} alt="bascet" />
        </button>
      </div>
    </div>
  );
};
