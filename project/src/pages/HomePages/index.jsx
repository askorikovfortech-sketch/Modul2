import { useState, useEffect, useMemo } from "react";
import { ExpenseList } from "../../components/ExpenseList";
import { Header } from "../../components/Header";
import { ExpenseTotal } from "../../components/ExpenseTotal";
import { AddForm } from "../../components/ExpenseForm";
import { formatDate } from "../../helpers/formatDate";
import { initialExpenses } from "../../components/constants";
import "./styles.scss";

export const HomePages = () => {
  const [expense, setExpense] = useState({
    category: "",
    price: "",
  });

  const [idEditedExpense, setIdEditedExpense] = useState(null);
  const [editedExpense, setEditedExpense] = useState({
    category: "",
    date: "",
    price: "",
  });

  const [errors, setErrors] = useState({
    category: "",
    price: "",
  });

  const [editErrors, setEditErrors] = useState({
    category: "",
    date: "",
    price: "",
  });

  const [submitVisibiliErrors, setSubmitVisibiliErrors] = useState(false);
  const [expenses, setExpenses] = useState(initialExpenses);

  useEffect(() => {
    setExpenses(initialExpenses);
  }, []);

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

  const openingEditingForm = (expenseItem) => {
    setIdEditedExpense(expenseItem.id);
    setEditedExpense({
      category: expenseItem.category,
      date: expenseItem.date,
      price: expenseItem.price,
    });
    setEditErrors({
      category: "",
      date: "",
      price: "",
    });
  };

  const cancelEditing = () => {
    setIdEditedExpense(null);
    setEditErrors({
      category: "",
      date: "",
      price: "",
    });
  };

  const changeField = (e) => {
    const { name, value } = e.target;
    setEditedExpense((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (editErrors[name]) {
      setEditErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateEditForm = () => {
    setEditErrors({
      category: "",
      date: "",
      price: "",
    });

    if (
      !editedExpense.category.trim() ||
      !editedExpense.date.trim() ||
      !editedExpense.price.trim()
    ) {
      setEditErrors({
        category: !editedExpense.category.trim()
          ? "Поле не должно быть пустым"
          : "",
        date: !editedExpense.date.trim() ? "Поле не должно быть пустым" : "",
        price: !editedExpense.price.trim() ? "Поле не должно быть пустым" : "",
      });
      return;
    }
    if (Number(editedExpense.price.trim()) <= 0) {
      setEditErrors({
        category: "",
        date: "",
        price: "Цена должна быть больше 0",
      });
      return;
    }

    updateExpense();
  };

  const updateExpense = () => {
    setExpenses((prev) => {
      const index = prev.findIndex(
        (expenseItem) => expenseItem.id === idEditedExpense,
      );

      if (index === -1) return prev;

      const newExpenses = [...prev];
      newExpenses[index] = {
        ...newExpenses[index],
        category: editedExpense.category.trim(),
        date: editedExpense.date.trim(),
        price: editedExpense.price.trim(),
      };

      return newExpenses;
    });

    cancelEditing();
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
        <ExpenseList
          expenses={expenses}
          idEditedExpense={idEditedExpense}
          editedExpense={editedExpense}
          editErrors={editErrors}
          openingEditingForm={openingEditingForm}
          cancelEditing={cancelEditing}
          changeField={changeField}
          validateForm={validateEditForm}
        />
      </main>
    </div>
  );
};
