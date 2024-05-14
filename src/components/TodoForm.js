import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInputs] = useState(props.edits ? props.edits.value : "");

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });

  /**
   * Handles the change event of the input field.
   * @param {Object} e - The event object.
   */
  const handleChange = (e) => {
    setInputs(e.target.value);
  };

  /**
   * Handles the form submission.
   *
   * @param {Event} e - The form submit event.
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInputs("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edits ? (
        <>
          <input
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="todo-input edit"
          />
          <button onClick={handleSubmit} className="todo-button edit">
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Add a todo"
            value={input}
            onChange={handleChange}
            name="text"
            className="todo-input"
            ref={inputRef}
          />
          <button onClick={handleSubmit} className="todo-button">
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
