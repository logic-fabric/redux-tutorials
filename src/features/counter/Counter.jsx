import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  decrement,
  increment,
  incrementAsyncByStep,
  incrementByStep,
} from "./counterSlice";

import "./Counter.css";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [incrementStep, setIncrementStep] = useState("2");

  return (
    <div>
      <div className="counter__row">
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

      <div className="counter__row">
        <input
          className="counter__input"
          value={incrementStep}
          label-aria="Fixer le pas d'incrémentation"
          onChange={(e) => setIncrementStep(e.target.value)}
        />

        <button
          className="counter__btn"
          onClick={() => dispatch(incrementByStep(+incrementStep || 0))}
        >
          incrémenter d'un pas
        </button>
      </div>

      <div className="counter__row">
        <button
          className="counter__btn"
          onClick={() => dispatch(incrementAsyncByStep(+incrementStep || 0))}
        >
          incrémenter de manière asynchrone
        </button>
      </div>
    </div>
  );
}
