import { useState } from "react";
import Form from "./form.js";
const NewTask = ({ addedNewTask }) => {
  const [state, setState] = useState(false);
  const toggleBox = () => {
    setState(!state);
  };

  return (
    <>
      <div className="newtaskWrapper" onClick={toggleBox}>
        New Task
      </div>
      {state && <Form borderlands={addedNewTask} />}
    </>
  );
};

export default NewTask;
