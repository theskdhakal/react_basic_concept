import { Chat } from "./Chat";
import { useState } from "react";

export const Form = ({ ram }) => {
  const [text, setText] = useState("");

  const onChangeGetData = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    ram(text);
  };

  return (
    <div>
      <Chat mango={text} />
      <form action="" onSubmit={handleOnSubmit}>
        <input onChange={onChangeGetData} type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
