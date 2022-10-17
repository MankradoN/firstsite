import { useState } from "react";
const Product = (props) => {
  const addToCost = () => {
    props.setTotal(props.totalTotal + props.price);
  };
  return (
    <>
      <div className="wholeProduct">
        <div className="productImage">
          <img src={props.pic} />
        </div>
        <div className="productDescription">
          <h6>{props.product}</h6>
          <div class="heartWrapper">
            <i class="heart fa fa-heart-o"></i>
            <label class="heart" for="heart-checkbox" />
          </div>
          <h3>{props.description}</h3>
          <strong>£{props.price}</strong>
          <button
            onClick={() => {
              addToCost();
              props.addProductsToBasket(props);
            }}
          >
            Add to basket
          </button>
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
};
export default Product;
