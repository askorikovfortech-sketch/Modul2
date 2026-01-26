import "./ExpenseItemStyle.scss";

export const ExpenseItem = ({ expense }) => {
  return (
    <>
      <hr className="main-list__line" />
      <li className="main-list__item">
        <span className="main-list__category">{expense.category}</span>
        <div className="main-list__adaptiv">
          <span className="main-list__date"> {expense.date} </span>
          <span className="main-list__sum">{expense.price} ₽</span>
        </div>
        <div className="main-list__edit">
          <button type="button" className="main-list__redakter">
            <img className="main-list__redactBtn" type="button" src="/images/Group.png" />
          </button>
          <button type="button" className="main-list__delete">
            <img className="main-list__delBtn" type="button" src="/images/Delete.png" />
          </button>
        </div>
      </li>
    </>
  );
};
