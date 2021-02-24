import Task from "./task.js";
import Counter from "./count.js";
import Taskwrapper from "./taskwrapper.js";
import DateComponent from "./date.js";
import NewTask from "./newtask.js";
import { useState } from "react";

export default function Home() {
  const [state, setState] = useState({ random: 5 });
  const randomNumber = () => {
    setState({ random: Math.floor(Math.random() * 5) + 1 });
  };
  const toDoTasks = [
    {
      priority: "high",
      title: "Get healthy",
      children: "Exercise & Eat well",
    },
    {
      priority: "medium",
      title: "Learn something new",
      children: "Dealine is the end of the week",
    },
    {
      priority: "low",
      title: "Practice giving massages",
      children: "read  on different techniques and sweet spots",
    },
  ];
  const [toDoTaskState, setTaskState] = useState(toDoTasks);
  const addNewTask = (task) => {
    setTaskState([task, ...toDoTaskState]);
    console.log("addNewTask function ");
  };
  return (
    <>
      <div className="flex-header">
        <DateComponent></DateComponent>
        <NewTask addedNewTask={addNewTask}></NewTask>
      </div>
      <div className="tasks">
        <Counter name="Naomi" />
        <Taskwrapper title="To Do">
          {toDoTaskState.map((task) => (
            <>
              <Task priority={task.priority} title={task.title}>
                {task.children}
              </Task>
            </>
          ))}
        </Taskwrapper>
        <Taskwrapper title="Completed">
          <Task priority="complete" title="React">
            Coding with Nihir , Rebecca, Holly, Dhara and Mandaline
          </Task>
        </Taskwrapper>
      </div>
      <style jsx>
        {`
          .flex-header {
            display: flex;
            justify-content: space-between;
          }
        `}
      </style>
    </>
  );
}
