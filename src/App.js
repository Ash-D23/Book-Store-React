import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './Pages/homepage/homepage.component';
import ShopPage from './Pages/shop/shop.component';
import SignInAndSignUpPage from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './Components/header/header.component';
import CheckoutPage from './Pages/checkout/checkout.component';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { GlobalStyle } from './global.styles';


class App extends React.Component {


  componentDidMount() {
    const { setCurrentUser } = this.props;
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
