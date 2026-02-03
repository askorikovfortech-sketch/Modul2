import { useState } from "react";
import { ExpenseList } from "../../components/ExpenseList";
import { Header } from "../../components/Header";
import { expenses as initialExpenses } from "../../components/constants";
import "./styles.scss";

export const HomePages = () => {
const [expenses, setExpenses] = useState(initialExpenses);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    category: "",
    date: "",
    price: ""
  });
  const [errors, setErrors] = useState({});

 const startEditing = (expense) => {
    setEditingId(expense.id);
    setEditForm({
      category: expense.category,
      date: expense.date,
      price: expense.price
    });
    setErrors({});
  };

  const cancelEditing = () => {
    setEditingId(null);
    setErrors({});
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditForm(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

     if (!editForm.category.trim()) {
      newErrors.category = "Поле не должно быть пустым";
      isValid = false;
    }

     if (!editForm.date.trim()) {
      newErrors.date = "Поле не должно быть пустым";
      isValid = false;
    } else if (!editForm.date.includes(".")) {
      newErrors.date = "Поле не должно быть пустым";
      isValid = false;
    }

     if (!editForm.price.trim()) {
      newErrors.price = "Поле не должно быть пустым";
      isValid = false;
    } else if (isNaN(Number(editForm.price))) {
      newErrors.price = "Поле не должно быть пустым";
      isValid = false;
    } else if (Number(editForm.price) <= 0) {
      newErrors.price = "Поле не должно быть пустым";
      isValid = false;
    }

   setErrors(newErrors);
    return isValid;
  };

   const saveEdit = () => {
     if (!validateForm()) {
      return;
    }

 setExpenses(prev => 
      prev.map(expense => 
        expense.id === editingId 
          ? { ...expense, ...editForm }
          : expense
      )
    );

    cancelEditing();
  };

 const getDisplayExpenses = () => {
    return expenses.map(expense => ({
      ...expense,
      isEditing: expense.id === editingId,
      editForm: editForm,
      errors: errors,
      onEditChange: handleEditChange,
      onStartEdit: () => startEditing(expense),
      onCancelEdit: cancelEditing,
      onSaveEdit: saveEdit,
    }));
  };

  return (
    <div className="home">
      <Header />

      <main className="main">
        <ExpenseList expenses={getDisplayExpenses()} />
      </main>
    </div>
  );
};
