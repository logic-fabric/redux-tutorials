import React from "react";

import { Counter } from "./features/counter/Counter";

import "./App.css";

export function App() {
  return (
    <div className="content-wrapper">
      <h1>React Redux Counter</h1>

      <Counter />
    </div>
  );
}
