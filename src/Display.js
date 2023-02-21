import { useEffect, useState } from "react";

export const Display = ({ op }) => {
  return (
    <div>
      Display End result:
      <ul>
        {op.map((item, i) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};
