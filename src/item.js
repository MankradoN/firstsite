import { useState } from "react";

const Item = (props) => {
  const [counter, setCounter] = useState(1);

  const IncrementItem = () => {
    props.setTotal(props.totalTotal + props.price);
    setCounter(counter + 1);
  };
  const DecreaseItem = () => {
    props.setTotal(props.totalTotal - props.price);
    setCounter(counter - 1);
  };
  const itemTotal = props.price * counter;

  const [basketbutton, changeAddToCart] = useState(true);
  const basketHandler = () => {
    changeAddToCart(!basketbutton);
  };
  return (
    <>
      <div className="eachItem">
        <div className="itemImage">
          <img src={props.pic} />
        </div>
        <div className="itemMetadata">
          <h3>
            <b>Product : </b>
            <span>{props.product}</span>
          </h3>
          <h3>
            <b>Description : </b>
            <span>{props.description}</span>
          </h3>
          <h3>
            <b>Price : </b>
            <span>£{props.price}</span>
          </h3>
          <button onClick={IncrementItem}>+</button>
          <input className="inputnumber" value={counter} />
          <button onClick={counter > 0 && DecreaseItem}>-</button>
          <h2>{itemTotal}</h2>
          <button
            className="button"
            onClick={() => props.removeItem(props.product)}
          >
            x
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .button {
            padding: 0;
            border: none;
            background: none;
            color: red;
            position: relative;
            left: 86%;
            bottom: 50%;
            padding: 20px;
            font-size: 1.5em;
            font-weight: 800;
          }
          span {
            font-weight: normal;
          }
          img {
            height: 200px;
            width: 200px;
          }
          .itemMetadata {
            background-color: rgba(220, 220, 220, 0.5);
            border-radius: 15px;
            padding-left: 10px;
            width: 100%;
          }
          .eachItem {
            display: flex;
            padding: 40px;
          }
        `}
      </style>
    </>
  );
};

export default Item;
