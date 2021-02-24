import React from "react";
const Form = ({ borderlands }) => {
  const inputHandler = (input) => {
    console.log(input);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e);
    const { priority, title, description } = e.target.elements;
    borderlands({
      priority: priority.value,
      title: title.value,
      children: description.value,
    });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label for="priorityValue">Select the Priority of your task</label>
        <br />
        <select id="priorityValue" name="priority">
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <br />
        <label for="title" onChange={inputHandler}>
          What is your new task?
          <br />
          <input type="text" name="title" />
        </label>
        <br />
        <label for="task" onChange={inputHandler}>
          Can you provide more details about this new task?
          <br />
          <input type="text" name="description" />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { date: new Date() };
//   }
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>{" "}
//       </div>
//     );
//   }
// }

// const Clock = () => {
//   const [currentdate, setDate] = useState({ date: new Date() });
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It's {currentdate.date.toLocaleTimeString()}</h2>
//     </div>
//   );
// };
