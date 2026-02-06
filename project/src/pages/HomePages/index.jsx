import { useMemo } from "react";
import { useState } from "react";
import { ExpenseList } from "../../components/ExpenseList";
import { Header } from "../../components/Header";
import { ExpenseTotal } from "../../components/ExpenseTotal";
import { AddForm } from "../../components/ExpenseForm";
import { initialExpenses } from "../../helpers/constants";
import { formatDate } from "../../helpers/date";
import "./styles.scss";

export const HomePages = () => {

  const [expenseAdd, setExpenseAdd] = useState({
    category: "",
    price: "",
  });

  const [errorsAdd, setErrorsAdd] = useState({
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
      category: expenseAdd.category.trim(),
      date: formatDate(),
      price: expenseAdd.price.trim(),
    };

    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
    setExpenseAdd({
      category: "",
      price: "",
    });
    setErrorsAdd({ category: "", price: "" });
    setSubmitVisibiliErrors(false);
  };

  const validateForm = () => {
    setSubmitVisibiliErrors(true);
    setErrorsAdd({ category: "", price: "" });

    if (!expenseAdd.category.trim() && !expenseAdd.price.trim()) {
      setErrorsAdd({
        category: "Поле не должно быть пустым и меньше или равно 0",
        price: "Поле не должно быть пустым и меньше или равно 0",
      });
      return;
    }
    if (!expenseAdd.category.trim()) {
      setErrorsAdd({
        category: "Поле не должно быть пустым и меньше или равно 0",
        price: "",
      });
      return;
    }
    if (!expenseAdd.price.trim() || Number(expenseAdd.price) <= 0) {
      setErrorsAdd({
        category: "",
        price: "Поле не должно быть пустым и меньше или равно 0",
      });
      return;
    }

    addExpense();
  };

  const handlerChangeField = (key, value) => {
    setExpenseAdd((prev) => ({
      ...prev,
      [key]: value,
    }));

    if (key === "category" && errorsAdd.category) {
      setErrorsAdd((prev) => ({ ...prev, category: "" }));
    }

    if (key === "price" && errorsAdd.price) {
      setErrorsAdd((prev) => ({ ...prev, price: "" }));
    }
  };

  return (
    <div className="home">
      <Header />
      <main className="main">
        <AddForm
          expenseAdd={expenseAdd}
          errorsAdd={errorsAdd}
          handlerChangeField={handlerChangeField}
          submitVisibiliErrors={submitVisibiliErrors}
          validateForm={validateForm}
        />
        <ExpenseTotal totalExpense={totalExpense} />
        <ExpenseList expenses={expenses} />
      </main>
    </div>
  );
};
