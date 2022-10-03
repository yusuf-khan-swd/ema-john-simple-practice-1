import React from "react";

const Product = ({ product }) => {
  const { img, name, price, seller, ratings } = product;

  return (
    <div className="border rounded-lg flex flex-col justify-between">
      <div className="p-2">
        <img className="rounded-lg" src={img} alt="" />
        <h5> {name} </h5>
        <h5>Price: ${price} </h5>
      </div>
      <div className="p-2">
        <p>Manufacturer: {seller} </p>
        <p>Ratings: {ratings} Star</p>
      </div>
      <button className="bg-amber-300 w-full rounded-b-lg py-1 hover:bg-amber-500">Add to Cart</button>
    </div>
  );
};

export default Product;
