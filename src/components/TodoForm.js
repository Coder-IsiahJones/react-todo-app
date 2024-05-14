import React, { useState, useEffect, useRef } from "react";

function TodoForm(props) {
  const [input, setInputs] = useState("");

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
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a todo"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
        ref={inputRef}
      />
      <button className="todo-button">Add todo</button>
    </form>
  );
}

export default TodoForm;
