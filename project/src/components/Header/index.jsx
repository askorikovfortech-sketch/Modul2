import "./styles.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__logotyp">
        <img
          src="images/logo.png"
          alt="FINANCEFLOW"
          className="header__images"
        />
        <div className="header__line"></div>
        <h1 className="header__title">Учет расходов</h1>
      </div>
      <hr className="line" />
    </header>
  );
};
