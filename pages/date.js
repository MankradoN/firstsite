const DateComponent = () => {
  return (
    <>
      <div>
        <time className="icon">
          <em>
            {new Date().toLocaleString("en-GB", {
              weekday: "long",
            })}
          </em>
          <strong>
            {new Date().toLocaleString("en-GB", {
              month: "long",
              //year: "numeric",
            })}
          </strong>
          <span>
            {new Date().toLocaleString("en-GB", {
              day: "numeric",
            })}
          </span>
        </time>
      </div>
      <style jsx>
        {`
          .icon {
            font-size: 0.75em;
            display: block;
            position: relative;
            width: 7em;
            height: 7em;
            background-color: #fff;
            border-radius: 0.6em;
            box-shadow: 0 1px 0 #bdbdbd, 0 2px 0 #fff, 0 3px 0 #bdbdbd,
              0 4px 0 #fff, 0 5px 0 #bdbdbd, 0 0 0 1px #bdbdbd;
            overflow: hidden;
          }
          * {
            display: block;
            width: 100%;
            font-size: 1em;
            font-weight: bold;
            font-style: normal;
            text-align: center;
          }
          strong {
            position: absolute;
            top: 0;
            padding: 0.4em 0;
            color: #fff;
            background-color: #fd9f1b;
            border-bottom: 1px dashed #f37302;
            box-shadow: 0 2px 0 #fd9f1b;
          }
          em {
            position: absolute;
            bottom: 0.3em;
            color: #fd9f1b;
          }
          span {
            font-size: 2.8em;
            letter-spacing: -0.05em;
            padding-top: 0.8em;
            color: #2f2f2f;
          }
        `}
      </style>
    </>
  );
};

export default DateComponent;
