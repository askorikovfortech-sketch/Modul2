import { useState, useEffect } from "react";
import { ExpenseList } from "../../components/ExpenseList";
import { Header } from "../../components/Header";
import { expenses as initialExpenses } from "../../helpers/constants";
import "./styles.scss";

export const HomePages = () => {
  const [expenses, setExpenses] = useState([]);
  const [idEditedExpense, setIdEditedExpense] = useState(null);
  const [editedExpense, setEditedExpense] = useState({
    category: "",
    date: "",
    price: "",
  });
  const [errors, setErrors] = useState({
    category: "",
    date: "",
    price: "",
  });

  useEffect(() => {
    setExpenses(initialExpenses);
  }, []);

  const openingEditingForm = (expense) => {
    setIdEditedExpense(expense.id);
    setEditedExpense({
      category: expense.category,
      date: expense.date,
      price: expense.price,
    });
    setErrors({
      category: "",
      date: "",
      price: "",
    });
  };

  const cancelEditing = () => {
    setIdEditedExpense(null);
    setErrors({
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

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    setErrors({
      category: "",
      date: "",
      price: "",
    });

    if (!editedExpense.category.trim() || !editedExpense.date.trim() || !editedExpense.price.trim()) {
      setErrors({
        category: !editedExpense.category.trim() ? "Поле не должно быть пустым" : "",
        date: !editedExpense.date.trim(".") ? "Поле не должно быть пустым" : "",
        price: !editedExpense.price.trim() ? "Поле не должно быть пустым" : "",
      });
      return;
    }
    if (Number(editedExpense.price.trim()) <= 0) {
      setErrors({
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
      const index = prev.findIndex((expense) => expense.id === idEditedExpense);

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
        <ExpenseList
          expenses={expenses}
          idEditedExpense={idEditedExpense}
          editedExpense={editedExpense}
          errors={errors}
          openingEditingForm={openingEditingForm}
          cancelEditing={cancelEditing}
          changeField={changeField}
          validateForm={validateForm}
        />
      </main>
    </div>
  );
};
