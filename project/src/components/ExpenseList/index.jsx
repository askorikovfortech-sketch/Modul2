import { Expense } from "../Expense";
import { ExpenseEditing } from "../ExpenseEditing";
import "./styles.scss";

export const ExpenseList = ({ expenses }) => {
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
            {expense.isEditing ? (
              <ExpenseEditing 
                editForm={expense.editForm}
                errors={expense.errors}
                onEditChange={expense.onEditChange}
                onSaveEdit={expense.onSaveEdit}
                onCancelEdit={expense.onCancelEdit}
              />
            ) : (
              <Expense 
                expense={expense}
                onStartEdit={expense.onStartEdit}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};