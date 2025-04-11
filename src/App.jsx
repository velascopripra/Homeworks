import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementBy,
  decrementBy
} from "./store/slices/counterSlice";
import { useState } from "react";
import { push, pop } from "./store/slices/stackSlice";
import "./App.css";

export const App = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);
  const stack = useSelector((state) => state.stack.numbers);
  const [value, setValue] = useState("");

  const handleAdd = () => {
    dispatch(increment());
  };

  const handleSubstract = () => {
    dispatch(decrement());
  };

  const handleIncrementBy = () => {
    const num = parseInt(value);
    if (!isNaN(num)) {
      dispatch(incrementBy(num));
    }
  };

  const handleDecrementBy = () => {
    const num = parseInt(value);
    if (!isNaN(num)) {
      dispatch(decrementBy(num));
    }
  };

  const handlePush = () => {
    dispatch(push(count));
  };

  const handlePop = () => {
    dispatch(pop());
  };

  return (
    <div className="app-wrapper">
      <div className="section">
        <h1>Contador</h1>
        <p>Valor actual: <strong>{count}</strong></p>

        <div className="buttons">
          <button onClick={handleAdd}>Incrementar</button>
          <button onClick={handleSubstract}>Decrementar</button>
        </div>

        <input
          type="number"
          placeholder="Valor personalizado"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="buttons">
          <button onClick={handleIncrementBy}>Incrementar por</button>
          <button onClick={handleDecrementBy}>Disminuir por</button>
        </div>
      </div>

      <div className="section">
        <h1>Pila</h1>
        <p>Push actual: <strong>{count}</strong></p>
        <div className="buttons">
          <button onClick={handlePush}>Push (contador)</button>
          <button onClick={handlePop}>Pop</button>
        </div>
        <ul className="stack-list">
          {stack.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
