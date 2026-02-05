import pencil from "../../images/pencil.png"
import basket from "../../images/basket.png"
import "../../helpers/constants"
import "./styles.scss";

export const Expense = ({ expense, openingEditingForm  }) => {
  return (
    <div className="expense">
      <ul className="expense__list">
        <hr className="expense__line" />
        <li className="expense__item">
          <span className="expense__category">{expense.category}</span>
          <div className="expense__adaptiv">
            <span className="expense__date"> {expense.date} </span>
            <span className="expense__sum">{expense.price} ₽</span>
          </div>
          <div className="expense__edit">
            <button 
              type="button" 
              className="expense-change"
              onClick={openingEditingForm }
            >
              <img
                className="expense-change__images"
                src={pencil}
                alt="pencil"
              />
            </button>
            <button 
              type="button" 
              className="expense-delete"
            >
              <img
                className="expense-delete__images"
                src={basket}
                alt="basket"
              />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};