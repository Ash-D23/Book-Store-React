import React from 'react';
import { connect } from 'react-redux';

import CheckoutItem from '../../Components/checkout-item/checkout-item.component';
import './checkout.css'

const CheckoutPage = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <h3>Cart Items</h3>
      </div>

    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className='total'>TOTAL: ${total}</div>
  </div>
);

const mapStateToProps = (state) => {

  let carttotal = state.cart.cartItems.reduce(
      (accumalatedQuantity, cartItem) =>
        accumalatedQuantity + cartItem.quantity * cartItem.price,
      0
    )
  return {cartItems: state.cart.cartItems,
  total: carttotal}
}

export default connect(mapStateToProps)(CheckoutPage);
