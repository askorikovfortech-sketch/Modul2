import "./styles.scss";

export const MainList = ({ expense }) => {
  return (
    <div className="main-list">
      <ul className="main-list__ul">
        <hr className="main-list__line" />
        <li className="main-list__item">
          <span className="main-list__category">{expense.category}</span>
          <div className="main-list__adaptiv">
            <span className="main-list__date"> {expense.date} </span>
            <span className="main-list__sum">{expense.price} ₽</span>
          </div>
          <div className="main-list__edit">
            <button type="button" className="main-list__redakter">
              <img
                className="main-list__redacter-button"
                src="/images/pencil.png"
              />
            </button>
            <button type="button" className="main-list__delete">
              <img
                className="main-list__delete-button"
                src="/images/basket.png"
              />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};
