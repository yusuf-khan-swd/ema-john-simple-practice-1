import React from 'react';

const Cart = ({ cart }) => {
  console.log(cart)
  return (
    <div className='sticky top-0'>
      <h3 className='text-xl text-center mt-7'>Order Summery</h3>
      <div className='p-6'>
        <p>Selected Items: {cart.length} </p>
      </div>
    </div>
  );
};

export default Cart;