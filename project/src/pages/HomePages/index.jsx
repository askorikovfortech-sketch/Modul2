import { useState } from "react";
import { ExpenseList } from "../../components/ExpenseList";
import { Header } from "../../components/Header";
import { ExpenseForm } from "../../components/ExpenseForm";
import { formatDate } from "../../components/helpers";
import { expenses as initialExpenses } from "../../components/constants";
import "./styles.scss";

export const HomePages = () => {
  const [expense, setExpense] = useState({
    category: "",
    price: "",
  });
  const [errors, setErrors] = useState({
    category: "",
    price: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [expenses, setExpenses] = useState(initialExpenses);

  const validateForm = () => {
    const newErrors = {};

    if (!expense.category.trim()) {
      newErrors.category = "Поле не должно быть пустым или равно 0";
    }

    if (!expense.price.trim() || Number(expense.price) <= 0) {
      newErrors.price = "Поле не должно быть пустым или равно 0";
    }

    return newErrors;
  };

  const handleExpenseChange = (key, value) => {
    setExpense((prev) => ({
      ...prev,
      [key]: value,
    }));

    if (errors[key]) {
      setErrors((prev) => ({
        ...prev,
        [key]: "",
      }));
    }
  };

  const handleAddExpense = () => {
    setFormSubmitted(true);

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newExpense = {
      id: Date.now(),
      category: expense.category.trim(),
      date: formatDate(),
      price: expense.price.trim(),
    };

    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
    setExpense({
      category: "",
      price: "",
    });
    setErrors({ category: "", price: "" });
    setFormSubmitted(false);
  };

  return (
    <div className="home">
      <Header />

      <main className="main">
        <ExpenseForm
          expense={expense}
          errors={errors}
          handleExpenseChange={handleExpenseChange}
          formSubmitted={formSubmitted}
          onAddExpense={handleAddExpense}
        />
        <ExpenseList expenses={expenses} />
      </main>
    </div>
  );
};
