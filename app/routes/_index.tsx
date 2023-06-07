import type { V2_MetaFunction } from "@remix-run/node";
import {
  add,
  subtract,
  multiply,
  divide,
  modulo,
} from "@laurysva/my-calculator";
import { useState } from "react";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Npm uppgift" }];
};

export default function Index() {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [select, setSelect] = useState("");

  const calculateFunction = () => {
    switch (select) {
      case "add":
        return add(input1, input2);
      case "subtract":
        return subtract(input1, input2);
      case "multiply":
        return multiply(input1, input2);
      case "divide":
        return divide(input1, input2);
      case "modulo":
        return modulo(input1, input2);
    }
  };

  return (
    <div className="container">
      <h1>Calculator</h1>
      <label>Number 1</label>
      <input
        type="number"
        onChange={(e) => setInput1(parseInt(e.target.value))}
        required={true}
      />
      <label>Number 2</label>

      <input
        type="number"
        onChange={(e) => setInput2(parseInt(e.target.value))}
        required={true}
      />
      <label>Select an Operator</label>
      <select onChange={(e) => setSelect(e.target.value)}>
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">*</option>
        <option value="divide">/</option>
        <option value="modulo">%</option>
      </select>
      <button onClick={() => calculateFunction()}>Calculate</button>
    </div>
  );
}
