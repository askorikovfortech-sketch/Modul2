import { useState, useEffect } from "react";
import { ExpenseList } from "../../components/ExpenseList";
import { Header } from "../../components/Header";
import { expenses as initialExpenses } from "../../helpers/constants";
import "./styles.scss";

export const HomePages = () => {
  const [expenses, setExpenses] = useState([]);
  const [editedExpenseId, setEditedExpenseId] = useState(null);

  useEffect(() => {
    setExpenses(initialExpenses);
  }, []);
  const [editingData, setEditingData] = useState({
    category: "",
    date: "",
    price: "",
  });
  const [errors, setErrors] = useState({
    category: "",
    date: "",
    price: "",
  });

  const openingEditingForm = (expense) => {
    setEditedExpenseId(expense.id);
    setEditingData({
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

  const cancel = () => {
    setEditedExpenseId(null);
    setErrors({
      category: "",
      date: "",
      price: "",
    });
  };

  const change = (e) => {
    const { name, value } = e.target;
    setEditingData((prev) => ({
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
    const newErrors = {
      category: "",
      date: "",
      price: "",
    };

    if (!editingData.category.trim()) {
      newErrors.category = "Поле не должно быть пустым";
    }
    if (!editingData.date.trim()) {
      newErrors.date = "Поле не должно быть пустым";
    }
    if (!editingData.price.trim()) {
      newErrors.price = "Поле не должно быть пустым";
    }

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some((error) => error !== "");

    if (!hasError) {
      save();
      return true;
    }

    return false;
  };

  const save = () => {
    setExpenses((prev) => {
      const index = prev.findIndex((expense) => expense.id === editedExpenseId);

      if (index === -1) return prev;

      const newExpenses = [...prev];
      newExpenses[index] = {
        ...newExpenses[index],
        category: editingData.category.trim(),
        date: editingData.date.trim(),
        price: editingData.price.trim(),
      };

      return newExpenses;
    });

    cancel();
  };

  return (
    <div className="home">
      <Header />

      <main className="main">
        <ExpenseList
          expenses={expenses}
          editedExpenseId={editedExpenseId}
          editingData={editingData}
          errors={errors}
          openingEditingForm={openingEditingForm}
          cancel={cancel}
          change={change}
          save={() => validateForm()}
        />
      </main>
    </div>
  );
};
