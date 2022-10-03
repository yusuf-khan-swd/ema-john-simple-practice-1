import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-5">
      <div className="md:col-span-4 grid md:grid-cols-3 gap-11 md:pt-32 md:pl-28 md:pr-20">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
      <div>
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Shop;
