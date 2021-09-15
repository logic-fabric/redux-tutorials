import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Incrémenter le compteur"
          onClick={() => dispatch(increment())}
        >
          Incrémenter
        </button>

        <span>{count}</span>

        <button
          aria-label="Décrémenter le compteur"
          onClick={() => dispatch(decrement())}
        >
          Décrémenter
        </button>
      </div>
    </div>
  );
}
