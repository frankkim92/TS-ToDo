import React from "react";
import { TodoI } from "./TodoApp";
import { TodoItem } from "./TodoItem";

interface TodoListProps {
  todos: TodoI[];
  deleteTodo: (id: number) => void;
}
export const TodoList = ({ todos, deleteTodo }: TodoListProps) => {
  return (
    <div
      style={{
        background: "pink",
        padding: "30px",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
};
