import pencil from "../../images/pencil.png";
import basket from "../../images/basket.png";
import "./styles.scss";

export const Expense = ({ expense, onEdit, onDelete }) => {
  const formattedPrice = new Intl.NumberFormat("ru-RU").format(expense.price);
  return (
    <div className="expense">
      <ul className="expense__list">
        <hr className="expense__line" />
        <li className="expense__item">
          <span className="expense__category">{expense.category}</span>
          <div className="expense__adaptiv">
            <span className="expense__date"> {expense.date} </span>
            <span className="expense__sum">{formattedPrice} ₽</span>
          </div>
          <div className="expense__edit">
            <button type="button" className="expense-redakter" onClick={onEdit}>
              <img
                className="expense-redacter__images"
                src={pencil}
                alt="pencil"
              />
            </button>
            <button type="button" className="expense-delete" onClick={onDelete}>
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
