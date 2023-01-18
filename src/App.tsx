import React from "react";
import { TodoApp } from "./\bcomponents/TodoApp";

import "./App.css";

function App() {
  return (
    <div style={{ backgroundColor: "pink" }}>
      <div>
        <h1
          style={{
            textAlign: "center",
            color: "white",
            padding: "20px",
            margin: "0px",
          }}
        >
          React Typescript Todo App
        </h1>
        <TodoApp />
      </div>
    </div>
  );
}

export default App;
