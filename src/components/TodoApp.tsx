import { TodoList } from "./TodoList";
import React, { useState } from "react";
export interface TodoI {
  title: string;
  id: number;
}
export const TodoApp = () => {
  const [todo, setTodo] = useState<TodoI>({ title: "", id: 0 });
  const [todos, setTodos] = useState<TodoI[]>([]);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ title: e.target.value, id: 0 });
  };
  const onEnter = (e: React.MouseEvent) => {
    const id = Math.floor(Math.random() * 100);
    console.log(id);
    setTodos([...todos, { title: todo.title, id }]);
  };

  const deleteTodo = (id: number) => {
    const nonDeletedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(nonDeletedTodos);
  };

  return (
    <div>
      <div
        style={{
          //   backgroundColor: "red",
          padding: "20px",
          textAlign: "center",
          color: "white",
        }}
      >
        <div style={{ color: "red", padding: "20px", fontWeight: 700 }}>
          <label>Please Enter Your Todo</label>
        </div>
        <div>
          <input
            placeholder="Todo"
            onChange={onChange}
            style={{ padding: "10px", borderRadius: "5px", width: "50%" }}
          />
          <button
            onClick={onEnter}
            style={{
              padding: "10px",
              marginLeft: "5px",
              borderRadius: "7px",
              color: "white",
              background: "black",
            }}
          >
            Enter
          </button>
        </div>
      </div>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};
