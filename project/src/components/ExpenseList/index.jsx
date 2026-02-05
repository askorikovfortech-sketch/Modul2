import { Expense } from "../Expense";
import { ExpenseData } from "../ExpenseData";
import "./styles.scss";

export const ExpenseList = ({
  expenses,
  editingData,
  errors,
  cancel,
  save,
  change,
  openingEditingForm,
  editedExpenseId,
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
            {expense.id === editedExpenseId ? (
              <ExpenseData
                editingData={editingData}
                errors={errors}
                change={change}
                save={save}
                cancel={cancel}
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
