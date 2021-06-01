import React from 'react';

import SignIn from '../../Components/sign-in/sign-in.component';
import SignUp from '../../Components/sign-up/sign-up.component';
import './sign.css'
const SignInAndSignUpPage = (props) => {

  return(
  <div className='sign-in-and-sign-up'>
    <SignIn login={props.login}/>
    <SignUp login={props.login}/>
  </div>
)
}

export default SignInAndSignUpPage;
