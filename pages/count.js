import { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button type="button" id="add" onClick={() => setCount(count + 1)}>
        +
      </button>
      {count}
      <button type="button" id="subtract" onClick={() => setCount(count - 1)}>
        -
      </button>
      <div>{count > 4 && <em>{props.name}</em>}</div>
    </div>
  );
};

export default Counter;
