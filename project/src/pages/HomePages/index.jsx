import { useState } from "react";
import { ExpenseList } from "../../components/ExpenseList";
import { Header } from "../../components/Header";
import { ExpenseForm } from "../../components/ExpenseForm";
import "./styles.scss";

export const HomePages = () => {
  const [expenses, setExpenses] = useState([]);

  const [expenseForm, setExpenseForm] = useState({ category: "", price: "" });

  const [errors, setErrors] = useState({ category: "", price: "" });

  const generateDate = () => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const updateExpenseForm = (field, value) => {
    setExpenseForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleExpense = () => {
    const errorText = "Поле не должно быть пустым и меньше или равно 0";

    const newErrors = {
      category: !expenseForm.category.trim() ? errorText : "",
      price:
        !expenseForm.price.trim() || Number(expenseForm.price) <= 0
          ? errorText
          : "",
    };

    if (newErrors.category || newErrors.price) {
      setErrors(newErrors);
      return;
    }

    const createExpense = {
      id: Date.now(),
      category: expenseForm.category.trim(),
      date: generateDate(),
      price: expenseForm.price.trim(),
    };

    addExpense(createExpense);

    setErrors(newErrors);

    setExpenseForm({ category: "", price: "" });
  };

  return (
    <div className="home">
      <Header />

      <main className="main">
        <ExpenseForm
          expenseForm={expenseForm}
          errors={errors}
          onUpdsteExpenseForm={updateExpenseForm}
          onAddExpense={handleExpense}
        />
        <ExpenseList expenses={expenses} />
      </main>
    </div>
  );
};
