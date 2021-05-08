import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { withRouter } from 'react-router-dom';

import { toggleCartHidden } from '../../redux/cart/cart.actions.js';
import './cart-dropdown.css'


const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));