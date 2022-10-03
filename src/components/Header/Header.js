import React from 'react';
import logo from '../../images/Logo.svg';

const Header = () => {
  return (
    <nav className='bg-slate-900 text-white h-20 flex justify-between items-center pl-28 pr-28'>
      <img src={logo} alt="" />
      <ul className='flex'>
        <li><a className='mr-8 text-lg' href="/order">Order</a></li>
        <li><a className='mr-8 text-lg' href="/review">Order Review</a></li>
        <li><a className='mr-8 text-lg' href="/inventory">Manage Inventory</a></li>
        <li><a className='mr-8 text-lg' href="/login">Login</a></li>
      </ul>
    </nav>
  );
};

export default Header;