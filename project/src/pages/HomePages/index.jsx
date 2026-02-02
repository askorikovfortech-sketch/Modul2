import { useState } from "react";
import { ExpenseList } from "../../components/ExpenseList";
import { Header } from "../../components/Header";
import { ExpenseForm } from "../../components/ExpenseForm";
import "./styles.scss";

export const HomePages = () => {
  const [expenses, setExpenses] = useState([]);

  const [expenseForm, setExpenseForm] = useState({ category: "", price: "" });

  const [errors, setErrors] = useState({ category: "", price: "" });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const generateDate = () => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const onUpdateExpenseForm = (field, value) => {
    setExpenseForm((prev) => ({ ...prev, [field]: value }));

    if (formSubmitted) {
      setFormSubmitted(false);
    }

    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validatePrice = (price) => {
    return !price.trim() || Number(price) <= 0;
  };

  const addExpense = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  const onAddExpense = () => {
    setFormSubmitted(true);

    const newErrors = {
      category: !expenseForm.category.trim()
        ? "Поле не должно быть пустым и меньше или равно 0"
        : "",
      price: validatePrice(expenseForm.price)
        ? "Поле не должно быть пустым и меньше или равно 0"
        : "",
    };

    const hasErrors = newErrors.category || newErrors.price;

    if (hasErrors) {
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

    setErrors({ category: "", price: "" });

    setExpenseForm({ category: "", price: "" });

    setFormSubmitted(false);
  };

  return (
    <div className="home">
      <Header />

      <main className="main">
        <ExpenseForm
          expenseForm={expenseForm}
          errors={errors}
          onUpdateExpenseForm={onUpdateExpenseForm}
          formSubmitted={formSubmitted}
          onAddExpense={onAddExpense}
        />
        <ExpenseList expenses={expenses} />
      </main>
    </div>
  );
};
