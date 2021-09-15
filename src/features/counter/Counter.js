import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from "./counterSlice";

import styles from "./Counter.module.css";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Décrémenter la valeur"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>

        <span className={styles.value}>{count}</span>
        
        <button
          className={styles.button}
          aria-label="Incrementer la valeur"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>

      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Fixer le pas d'incrémentation"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />

        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Ajouter la valeur
        </button>

        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Ajouter en asynchrone
        </button>

        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Ajouter si impair
        </button>
      </div>
    </div>
  );
}
