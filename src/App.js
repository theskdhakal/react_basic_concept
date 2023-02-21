import "./App.css";
import { Form } from "./Form";
import { Display } from "./Display";
import { useState } from "react";

function App() {
  const [op, setOp] = useState([]);

  const handleOnSubmit = (newData) => {
    setOp([...op, newData]);
  };

  return (
    <div>
      <Form handleOnSubmit={handleOnSubmit} />
      <Display op={op} />
    </div>
  );
}

export default App;
