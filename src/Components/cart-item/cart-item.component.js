import React from 'react';
import './cart-item.css'

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className='cart-item'>
    <div className='item-details'>
      <span className='name'>{name}</span>
    </div>
  </div>
);

export default CartItem;
