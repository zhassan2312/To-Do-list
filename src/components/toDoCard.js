import React from "react";

function ToDoCard({ toDo, handleRemoveTodos, handleEditTodos }) {
  return (
    <li id="todoItem">
      <p>{toDo}</p>
      <div className="actionsContainer">
        <i className="fa-solid fa-pen-to-square" onClick={handleEditTodos}></i>
        <i className="fa-solid fa-trash" onClick={handleRemoveTodos}></i>
      </div>
    </li>
  );
}

export default ToDoCard;