import React from 'react';

const Cart = ({ cart }) => {

  let totalPrice = 0;
  let shippingCharge = 0;
  for (let product of cart) {
    totalPrice += product.price;
    shippingCharge += product.shipping;
  }

  const tax = totalPrice * 0.1;
  const grandTotal = totalPrice + shippingCharge + tax;

  return (
    <div className='sticky top-0'>
      <h3 className='text-xl text-center mt-7 mb-6 font-medium'>Order Summery</h3>
      <div className='p-6'>
        <p className='mb-6'>Selected Items: {cart.length} </p>
        <p className='mb-6'>Total Price: ${totalPrice} </p>
        <p className='mb-6'>Total Shipping Charge: ${shippingCharge} </p>
        <p className='mb-6'>Tax: ${tax.toFixed(2)} </p>
        <p className='mb-6 text-xl font-medium'>Grand Total: ${grandTotal.toFixed(2)} </p>
      </div>
    </div>
  );
};

export default Cart;