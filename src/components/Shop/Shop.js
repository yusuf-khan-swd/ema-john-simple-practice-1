import React, { useEffect, useState } from "react";
import { getAlreadySavedCart, setIdToLocalStorage } from "../../utilities/fakeDB";
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

  useEffect(() => {
    const savedCart = getAlreadySavedCart();

    const previouslySavedProducts = [];
    for (let key in savedCart) {
      const previouslySavedProduct = products.find(product => product.id === key);
      if (previouslySavedProduct) {
        previouslySavedProduct.quantity = savedCart[key];
        previouslySavedProducts.push(previouslySavedProduct)
      }
    }

    setCart(previouslySavedProducts)
  }, [products]);

  const handleAddToCart = selectedProduct => {
    let newCart = [];
    const productExistInCart = cart.find(product => product.id === selectedProduct.id);
    if (productExistInCart) {
      productExistInCart.quantity += 1;
      const resOfProduct = cart.filter(product => product.id !== selectedProduct.id);
      newCart = [...resOfProduct, productExistInCart];
    }
    else {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    }

    setCart(newCart);
    setIdToLocalStorage(selectedProduct.id);
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
