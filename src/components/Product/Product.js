import React from "react";

const Product = ({ product }) => {
  const { img, name, price, seller, ratings } = product;

  return (
    <div>
      <img src={img} alt="" />
      <div>
        <h5> {name} </h5>
        <h5>Price: ${price} </h5>
        <div>
          <p>Manufacturer: {seller} </p>
          <p>Ratings: {ratings} Star</p>
          <button className="bg-amber-300">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
