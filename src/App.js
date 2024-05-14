import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="todo-app">
      <h1>What are todays tasks?</h1>

      <TodoList />
    </div>
  );
}

export default App;
