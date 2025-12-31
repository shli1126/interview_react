import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "./features/todos/todosSlice";
function App() {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const onAdd = () => {
    const trimmed = text.trim();
    if (!trimmed) return;
    dispatch(addTodo(trimmed));
    setText("");
  };
  return (
    <div>
      <h2>Todo List</h2>
      <div>
        <input
          value={text}
          placeholder="Add a todo"
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={onAdd}>Add</button>
      </div>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <label>
              <span>{t.text}</span>
            </label>
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => dispatch(toggleTodo(t.id))}
            />
            <button onClick={() => dispatch(deleteTodo(t.id))}>Delete</button>
          </li>
        ))}
      </ul>
      {todos.length === 0 && <p>No todos yet...</p>}
    </div>
  );
}

export default App;
