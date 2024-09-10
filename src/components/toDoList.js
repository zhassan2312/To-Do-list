import React from "react";
import ToDoCard from "./toDoCard";

function ToDoList({ toDos, handleRemoveTodos, handleEditTodos }) {
  return (
    <ul id="todoList">
      {toDos.map((toDo, todoIndex) => (
        <ToDoCard
          key={todoIndex}
          toDo={toDo}
          handleRemoveTodos={() => handleRemoveTodos(todoIndex)}
          handleEditTodos={() => handleEditTodos(todoIndex)}
        />
      ))}
    </ul>
  );
}

export default ToDoList;