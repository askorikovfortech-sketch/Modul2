import { useState } from "react";
import { ExpenseList } from "../../components/ExpenseList";
import { Header } from "../../components/Header";
import { AddForm } from "../../components/ExpenseForm";
import { formatDate } from "../../helpers/date";
import { expenses as initialExpenses } from "../../helpers/constants";

export const HomePages = () => {
  const [expense, setExpense] = useState({
    category: "",
    price: "",
  });
  const [errors, setErrors] = useState({
    category: "",
    price: "",
  });
  const [submit, setSubmit] = useState(false);
  const [expenses, setExpenses] = useState(initialExpenses);

  const addExpense = () => {
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
    setSubmit(false);
  };

  const validateForm = () => {
    setSubmit(true);

    const newErrors = {
      category: "",
      price: "",
    };

    const hasCategoryError = !expense.category.trim();
    const hasPriceError = !expense.price.trim() || Number(expense.price) <= 0;

    if (hasCategoryError) {
      newErrors.category = "Поле не должно быть пустым или равно 0";
    }

    if (hasPriceError) {
      newErrors.price = "Поле не должно быть пустым или равно 0";
    }

    setErrors(newErrors);

    if (!hasCategoryError && !hasPriceError) {
      addExpense();
      return true;
    }

    return false;
  };

  const change = (key, value) => {
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

  return (
    <div className="home">
      <Header />

      <main className="main">
        <AddForm
          expense={expense}
          errors={errors}
          change={change}
          submit={submit}
          create={validateForm}
        />
        <ExpenseList expenses={expenses} />
      </main>
    </div>
  );
};
