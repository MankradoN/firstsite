const Task = (props) => {
  return (
    <>
      <div className="tasks">
        <h2 className="taskheader">{props.title}</h2>
        <p>{props.children}</p>
      </div>
      <style jsx>
        {`
          .tasks {
            margin: 40px;
            background: ${get_color_from_priority(props.priority)};
            padding: 30px;
            border-radius: 12px;
            color: white;
            box-shadow: 6px 6px 17px 15px #b5a6a270;
          }
          .taskheader {
            margin: 0;
          }
        `}
      </style>
    </>
  );
};
const get_color_from_priority = (priority) => {
  let backgroundColor = "";
  if (priority === "high") {
    backgroundColor = "#DD4124";
  } else if (priority === "medium") {
    backgroundColor = "#D65076";
  } else if (priority === "low") {
    backgroundColor = "#EFC050";
  } else {
    backgroundColor = "#0072B5";
  }
  return backgroundColor;
};
export default Task;
