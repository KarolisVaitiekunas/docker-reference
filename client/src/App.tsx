import React from "react";
import logo from "./logo.svg";
import "./App.css";
//redux
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/app/store";
import { fetchAddExample, manualAddExample } from "./redux/feature/exampleSlice";

function App() {
  const dispatch = useDispatch();
  const examples = useSelector((state: RootState) => state.example.value);
  const addManual = () => {
    dispatch(manualAddExample("JOHN CENA"));
  };

  const addFetch = () => {
    dispatch(fetchAddExample());
  };
  return (
    <div className="App">
      <button onClick={addManual}>Add manual</button>
      <button onClick={addFetch}>Add fetch</button>

      <div>
        <h1>Names</h1>
        {examples.map((name, index: number) => {
          return <h4 key={index}>{name}</h4>;
        })}
      </div>
    </div>
  );
}

export default App;
