import { Chat } from "./Chat";
import { useState } from "react";

export const Form = ({ handleOnSubmit }) => {
  const [text, setText] = useState("");

  const onChangeGetData = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const handleOnFormSubmit = (e) => {
    e.preventDefault();
    handleOnSubmit(text);
  };

  return (
    <div>
      <Chat mango={text} />
      <form action="" onSubmit={handleOnFormSubmit}>
        <input onChange={onChangeGetData} type="text" value={text} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
