import Item from "../src/item";
import { useState } from "react";
import Product from "./product";

export default function Home() {
  const removeItem = (productName) => {
    const products = productsBasket.filter(
      (item) => item.product !== productName
    );

    basketUpdate(products);
  };

  const productsPage = [
    {
      product: "Red Bicycle",
      description:
        "Ride in style with our cherry red cycle , perfect for road or off road",
      pic: "./image/bicycle.jpg",
      price: 139.99,
    },
    {
      product: "Bucket Hat",
      description:
        "Stay looking cool with our water proof ,lightweight bucket hait",
      pic: "./image/bucketHat.jpg",
      price: 15.68,
    },
    {
      product: "Chain Top",
      description:
        "Stand out and shine bright like silver in our Rihanna inspired Jewellery top",
      pic: "./image/chain.jpg",
      price: 314.69,
    },
    {
      product: "Wooden Bowl",
      description: "Rare wooden bowl with hand-drawn painting",
      pic: "./image/Bowl.jpg",
      price: 1549.99,
    },
    {
      product: "Pouch",
      description: "lightweight designer purse",
      pic: "./image/pouch.jpg",
      price: 15.68,
    },
    {
      product: "Pretty socks",
      description: "One of a kind ,hand wovven socks ",
      pic: "./image/socks.png",
      price: 15.68,
    },
  ];

  const [total, setTotal] = useState(5000 + 6.99 + 3.5);

  const [productsBasket, basketUpdate] = useState([
    {
      pic: "./image/charger.jpeg",
      product: "Charger",
      description: "USB-C charger",
      price: 6.99,
    },
    {
      pic: "./image/laptop.jpg",
      product: "Laptop",
      description: "A powerful beast of a machine",
      price: 5000,
    },
    {
      pic: "./image/mug.webp",
      product: "Mug",
      description: "A cylindrical shape holder for liquids",
      price: 3.5,
    },
  ]);
  const addProductsToBasket = (x) => {
    console.log(x);
    basketUpdate([x, ...productsBasket]);
  };
  return (
    <>
      <div className="saleItems">
        {productsPage.map((products) => (
          <Product
            {...products}
            addProductsToBasket={addProductsToBasket}
            setTotal={setTotal}
            totalTotal={total}
          />
        ))}
      </div>
      <div className="basketPage">
        <div className="Total">
          <img src="./image/basket.png" className="basketImage" />
        </div>
        <div className="all">
          <h1>Shopping Basket</h1>
          <div>
            <div>
              {productsBasket.map((individualItem) => (
                <Item
                  {...individualItem}
                  setTotal={setTotal}
                  totalTotal={total}
                  removeItem={removeItem}
                />
              ))}
            </div>
            <div>
              <h1>Total = {total.toFixed(2)}</h1>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .all {
            padding: 25px 100px;
          }
          .Total {
            float: right;
          }
          .basketImage {
            width: 10%;
          }
          .saleItems {
          }
          .wholeProduct {
          }
        `}
      </style>
    </>
  );
}
