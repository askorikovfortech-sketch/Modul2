import "./styles.scss";

export const ExpenseTotal = ({ total }) => {
  const formattedTotal = new Intl.NumberFormat("ru-RU").format(total);

  return (
    <div className="expense-total">
      <div className="expense-total__box">
        <p className="expense-total__text">Всего:</p>
        <p className="expense-total__sum">{formattedTotal} ₽</p>
      </div>
    </div>
  );
};
