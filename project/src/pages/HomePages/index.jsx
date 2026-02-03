import { useState } from "react";
import { ExpenseList } from "../../components/ExpenseList";
import { Header } from "../../components/Header";
import { expenses as initialExpenses } from "../../components/constants";
import "./styles.scss";

export const HomePages = () => {
const [expenses, setExpenses] = useState(initialExpenses);
  const [editingId, setEditingId] = useState(null);
  const [edit, setEdit] = useState({
    category: "",
    date: "",
    price: ""
  });
  const [errors, setErrors] = useState({});

 const startEditing = (expense) => {
    setEditingId(expense.id);
    setEdit({
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
    setEdit(prev => ({
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

     if (!edit.category.trim()) {
      newErrors.category = "Поле не должно быть пустым";
      isValid = false;
    }

     if (!edit.date.trim()) {
      newErrors.date = "Поле не должно быть пустым";
      isValid = false;
    } else if (!edit.date.includes(".")) {
      newErrors.date = "Поле не должно быть пустым";
      isValid = false;
    }

     if (!edit.price.trim()) {
      newErrors.price = "Поле не должно быть пустым";
      isValid = false;
    } else if (isNaN(Number(edit.price))) {
      newErrors.price = "Поле не должно быть пустым";
      isValid = false;
    } else if (Number(edit.price) <= 0) {
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
          ? { ...expense, ...edit }
          : expense
      )
    );

    cancelEditing();
  };

 const getDisplayExpenses = () => {
    return expenses.map(expense => ({
      ...expense,
      Editing: expense.id === editingId,
      edit: edit,
      errors: errors,
      EditChange: handleEditChange,
      StartEdit: () => startEditing(expense),
      CancelEdit: cancelEditing,
      SaveEdit: saveEdit,
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
