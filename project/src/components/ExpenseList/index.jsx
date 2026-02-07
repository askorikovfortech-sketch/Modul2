import { Expense } from "../Expense";
import { EditedExpense } from "../EditedExpense";
import "./styles.scss";

export const ExpenseList = ({
  expenses,
  editedExpense,
  editErrors,
  cancelEditing,
  validateForm,
  changeField,
  openingEditingForm,
  idEditedExpense,
}) => {
  return (
    <div className="expense-list">
      <div className="expense-list__block">
        <div className="expense-list__category">
          <hr className="expense-list__category-line" />
          <p className="expense-list__category-text">Статья расходов</p>
          <p className="expense-list__category-text">Дата</p>
          <p className="expense-list__category-text">Сумма расхода</p>
        </div>
        {expenses.map((expense) => (
          <div key={expense.id}>
            {expense.id === idEditedExpense ? (
              <EditedExpense
                editedExpense={editedExpense}
                editErrors={editErrors}
                changeField={changeField}
                validateForm={validateForm}
                cancelEditing={cancelEditing}
              />
            ) : (
              <Expense
                expense={expense}
                openingEditingForm={() => openingEditingForm(expense)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
