import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { signout } from '../../redux/user/user.actions';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.css'

const Header = (props) => {
  console.log(props)
  return(
  <div className='header'>
    <Link className='logo-container' to='/'>
      Home
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <br />
      {props.current ? (
       <div className='option' onClick={() => props.setsignout()}>
         SIGN OUT
       </div>
     ) : (
       <Link className='option' to='/signin'>
         SIGN IN
       </Link>
     )}
     <CartIcon />
    </div>
    {props.hidden ? null : <CartDropdown />}
  </div>
)
}

const mapStateToProps = (state) => {
  return {current: state.user.currentUser,
  hidden: state.cart.hidden}
}

const mapDispatchToProps = dispatch => ({
  setsignout: () => dispatch(signout())
});


export default connect(mapStateToProps,mapDispatchToProps)(Header);
