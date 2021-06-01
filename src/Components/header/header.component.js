import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { signout } from '../../redux/user/user.actions';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import Searchbar from '../Searchbar/Searchbar.component'
import SearchContainer from '../SearchContainer/SearchContainer'
import './header.css'

const Header = (props) => {
  return(
  <div className='header'>
    <Link className='logo-container' to='/'>
      <i class="fas fa-book-open"></i>
    </Link>
    <Searchbar />
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
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
    {props.searchhidden ? null : <SearchContainer />}
    {props.hidden ? null : <CartDropdown />}
  </div>
)
}

const mapStateToProps = (state) => {
  return {current: state.user.currentUser,
  hidden: state.cart.hidden,
  searchhidden: state.search.searchhidden
}
}

const mapDispatchToProps = dispatch => ({
  setsignout: () => dispatch(signout())
});


export default connect(mapStateToProps,mapDispatchToProps)(Header);
