import "./ExpenseHeaderStyle.scss";

export const ExpenseHeader = () => {
  return (
    <>
      <div className="header__logotyp">
        <img
          src="images/logo.png"
          alt="FINANCEFLOW"
          width="120px"
          height="120px"
          className="header__images"
        />
        <div className="header__separation"></div>
        <h1 className="header__title">Учет расходов</h1>
      </div>
      <hr className="header__line" />
    </>
  );
};
