import { useMemo } from "react";
import { useState } from "react";
import { ExpenseList } from "../../components/ExpenseList";
import { Header } from "../../components/Header";
import { ExpenseTotal } from "../../components/ExpenseTotal";
import { AddForm } from "../../components/ExpenseForm";
import { formatDate } from "../../helpers/formatDate";
import { initialExpenses } from "../../components/constants";

export const HomePages = () => {
  const [expense, setExpense] = useState({
    category: "",
    price: "",
  });

  const [errors, setErrors] = useState({
    category: "",
    price: "",
  });

  const [submitVisibiliErrors, setSubmitVisibiliErrors] = useState(false);
  const [expenses, setExpenses] = useState(initialExpenses);

  const totalExpense = useMemo(() => {
    return expenses.reduce((sum, expense) => {
      return sum + (Number(expense.price) || 0);
    }, 0);
  }, [expenses]);

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
    setSubmitVisibiliErrors(false);
  };

  const validateForm = () => {
    setErrors({ category: "", price: "" });

    if (!expense.category.trim() && !expense.price.trim()) {
      setErrors({
        category: "Поле не должно быть пустым и меньше или равно 0",
        price: "Поле не должно быть пустым и меньше или равно 0",
      });
      return;
    }
    if (!expense.category.trim()) {
      setErrors({
        category: "Поле не должно быть пустым и меньше или равно 0",
        price: "",
      });
      return;
    }
    if (!expense.price.trim() || Number(expense.price) <= 0) {
      setErrors({
        category: "",
        price: "Поле не должно быть пустым и меньше или равно 0",
      });
      return;
    }

    addExpense();
  };

  const handlerChangeInput = (key, value) => {
    setExpense((prev) => ({
      ...prev,
      [key]: value,
    }));

    if (key === "category" && errors.category) {
      setErrors((prev) => ({ ...prev, category: "" }));
    }

    if (key === "price" && errors.price) {
      setErrors((prev) => ({ ...prev, price: "" }));
    }
  };

  return (
    <div className="home">
      <Header />
      <main className="main">
        <AddForm
          expense={expense}
          errors={errors}
          handlerChangeInput={handlerChangeInput}
          submitVisibiliErrors={submitVisibiliErrors}
          validateForm={validateForm}
        />
        <ExpenseTotal totalExpense={totalExpense} />
        <ExpenseList expenses={expenses} />
      </main>
    </div>
  );
};
