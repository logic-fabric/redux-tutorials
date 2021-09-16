import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { decrement, increment } from "./counterSlice";

import "./Counter.css";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter-container">
      <button
        className="counter__btn"
        aria-label="Incrémenter le compteur"
        onClick={() => dispatch(increment())}
      >
        incrémenter
      </button>

      <span className="counter__value">{count}</span>

      <button
        className="counter__btn"
        aria-label="Décrémenter le compteur"
        onClick={() => dispatch(decrement())}
      >
        décrémenter
      </button>
    </div>
  );
}
