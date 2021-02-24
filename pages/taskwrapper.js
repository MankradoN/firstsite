const Taskwrapper = (props) => {
  return (
    <div>
      <div className="tasktitle">{props.title}</div>
      <div>{props.children}</div>
      <style jsx>
        {`
          .tasktitle {
            text-align: center;
            line-height: 50px;
            font-size: 20px;
            font-weight: 100;
          }
        `}
      </style>
    </div>
  );
};

export default Taskwrapper;
