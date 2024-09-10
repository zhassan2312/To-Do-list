import React, { useEffect, useState } from "react";
import ToDoInput from "./components/toDoInput";
import ToDoList from "./components/toDoList";

function App() {
  const [toDos, setTodos] = useState([]);

  function persistData(newTodos) {
    localStorage.setItem("toDos", JSON.stringify(newTodos));
  }

  function handleAddTodos(newTodo) {
    const newTodos = [...toDos, newTodo];
    setTodos(newTodos);
    persistData(newTodos);
  }

  function handleRemoveTodos(todoIndex) {
    const newTodos = toDos.filter((_, index) => index !== todoIndex);
    setTodos(newTodos);
    persistData(newTodos);
  }

  function handleEditTodos(todoIndex) {
    const newTodo = prompt("Edit to-do:", toDos[todoIndex]);
    if (newTodo !== null && newTodo.trim() !== "") {
      const newTodos = toDos.map((todo, index) => {
        if (index === todoIndex) {
          return newTodo;
        }
        return todo;
      });
      setTodos(newTodos);
      persistData(newTodos);
    }
  }

  useEffect(() => {
    const data = localStorage.getItem("toDos");
    if (data) {
      const parsedData = JSON.parse(data);
      if (Array.isArray(parsedData)) {
        setTodos(parsedData);
      } else {
        setTodos([]);
      }
    }
  }, []);

  return (
    <main id="main">
      <ToDoInput handleAddTodos={handleAddTodos} />
      <ToDoList toDos={toDos} handleRemoveTodos={handleRemoveTodos} handleEditTodos={handleEditTodos} />
    </main>
  );
}

export default App;