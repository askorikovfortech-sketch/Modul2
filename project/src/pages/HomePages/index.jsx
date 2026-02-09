import { useState, useEffect, useMemo } from "react";
import { ExpenseList } from "../../components/ExpenseList";
import { Header } from "../../components/Header";
import { ExpenseTotal } from "../../components/ExpenseTotal";
import { AddForm } from "../../components/ExpenseForm";
import { formatDate } from "../../helpers/formatDate.js";
import { initialExpenses } from "../../components/constants.js";
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

  const [editingErrors, setEditingErrors] = useState({
    category: "",
    date: "",
    price: "",
  });

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

  const handlChangeInput = (key, value) => {
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

  const openEditingForm = (expense) => {
    setIdEditedExpense(expense.id);
    setEditedExpense({
      category: expense.category,
      date: expense.date,
      price: expense.price,
    });
    setEditingErrors({
      category: "",
      date: "",
      price: "",
    });
  };

  const cancelEditingExpense = () => {
    setIdEditedExpense(null);
    setEditingErrors({
      category: "",
      date: "",
      price: "",
    });
  };

  const handleChangeEditingForm = (e) => {
    const { name, value } = e.target;
    setEditedExpense((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (editingErrors[name]) {
      setEditingErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateEditingForm = () => {
    setEditingErrors({
      category: "",
      date: "",
      price: "",
    });

    if (!editedExpense.category.trim()) {
      setEditingErrors({
        category: "Поле не должно быть пустым",
        date: "",
        price: ""
      })
      return;
    }
    if (!editedExpense.date.trim()) {
      setEditingErrors({
        category: "",
        date: "Поле не должно быть пустым",
        price: ""
      })
      return
    }
    if (!editedExpense.price.trim() || Number(editedExpense.price.trim()) <= 0) {
      setEditingErrors({
        category: "",
        date: "",
        price: "Поле не должно быть пустым",
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

    cancelEditingExpense();
  };

  return (
    <div className="home">
      <Header />
      <main className="main">
        <AddForm
          expense={expense}
          errors={errors}
          handlChangeInput={handlChangeInput}
          validateForm={validateForm}
        />
        <ExpenseTotal totalExpense={totalExpense} />
        <ExpenseList
          expenses={expenses}
          idEditedExpense={idEditedExpense}
          editedExpense={editedExpense}
          editingErrors={editingErrors}
          openEditingForm={openEditingForm}
          cancelEditingExpense={cancelEditingExpense}
          handleChangeEditingForm={handleChangeEditingForm}
          validateEditingForm={validateEditingForm}
        />
      </main>
    </div>
  );
};
