import React from "react";

function ToDoInput({ handleAddTodos }) {
  const [todoValue, setTodoValue] = React.useState("");

  return (
    <div id="inputContainer">
      <input
        id="todoInput"
        type="text"
        value={todoValue}
        placeholder="Enter a to-do"
        onChange={(e) => setTodoValue(e.target.value)}
      />
      <button
        id="addButton"
        onClick={() => {
          handleAddTodos(todoValue);
          setTodoValue(""); // Clear input after adding
        }}
      >
        Add
      </button>
    </div>
  );
}

export default ToDoInput;