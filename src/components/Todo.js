import React, { useState } from "react";

import { TiEdit } from "react-icons/ti";
import { RiCloseCircleLine } from "react-icons/ri";
import TodoForm from "./TodoForm";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edits, setEdit] = useState({ id: null, value: "" });

  /**
   * Handles the submission of an updated todo.
   *
   * @param {string} value - The updated value of the todo.
   * @returns {void}
   */
  const onSubmitUpdate = (value) => {
    updateTodo(edits.id, value);
    setEdit({ id: null, value: "" });
  };

  if (edits.id) {
    return <TodoForm edits={edits} onSubmit={onSubmitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div
        className="todo-text"
        key={todo.id}
        onClick={() => completeTodo(todo.id)}
      >
        {todo.text}
      </div>

      <div className="icons">
        <RiCloseCircleLine
          className="delete-icon"
          onClick={() => removeTodo(todo.id)}
        />

        <TiEdit
          className="edit-icon"
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
        />
      </div>
    </div>
  ));
}

export default Todo;
