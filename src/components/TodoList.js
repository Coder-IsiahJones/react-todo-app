import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);

  /**
   * Adds a new todo to the list of todos.
   * @param {Object} todo - The todo object to be added.
   * @param {string} todo.text - The text of the todo.
   */
  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  /**
   * Marks a todo as complete or incomplete.
   * @param {number} id - The ID of the todo to be marked.
   */
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  /**
   * Removes a todo item from the todos array based on the provided id.
   *
   * @param {number} id - The id of the todo item to be removed.
   * @returns {void}
   */
  const removeTodo = (id) => {
    const removeArray = [...todos].filter((todo) => todo.id !== id);

    setTodos(removeArray);
  };

  /**
   * Updates a todo item with the given ID.
   *
   * @param {number} id - The ID of the todo item to update.
   * @param {object} newValue - The new value for the todo item.
   * @param {string} newValue.text - The updated text for the todo item.
   * @returns {void}
   */
  const updateTodo = (id, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) => prev.map((item) => (item.id === id ? newValue : item)));
  };

  return (
    <div>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default TodoList;
