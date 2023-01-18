import React from "react";
import { TodoI } from "./TodoApp";
interface TodoItemProps {
  todo: TodoI;
  deleteTodo: (id: number) => void;
}
export const TodoItem = ({ todo, deleteTodo }: TodoItemProps) => {
  return (
    <div
      style={{
        background: "white",
        padding: "10px",
        width: "50%",
        margin: "10px 0px",
        borderRadius: "7px",
        border: " 1px solid black",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3> {todo.title}</h3>
        <button
          style={{
            padding: "10px",
            marginLeft: "5px",
            borderRadius: "7px",
            color: "white",
            background: "black",
          }}
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
