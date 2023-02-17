import "./App.css";
import { Form } from "./Form";
import { Display } from "./Display";
import { useState } from "react";

function App() {
  const [op, setOp] = useState("");
  return (
    <div>
      <Form ram={setOp} />
      <Display cat={op} />
    </div>
  );
}

export default App;
