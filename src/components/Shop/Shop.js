import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = product => {
    const newCart = [...cart, product];
    setCart(newCart)
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-0">
      <div className="md:col-span-4 grid md:grid-cols-3 gap-11 md:pt-32 md:pl-28 md:pr-20">
        {products.map((product) => (
          <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>
        ))}
      </div>
      <div className="bg-orange-200 relative">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
