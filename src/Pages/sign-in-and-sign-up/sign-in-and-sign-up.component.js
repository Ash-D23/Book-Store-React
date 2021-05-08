import React from 'react';

import SignIn from '../../Components/sign-in/sign-in.component';

const SignInAndSignUpPage = (props) => {
  console.log(props)
  return(
  <div className='sign-in-and-sign-up'>
    <SignIn login={props.login}/>
  </div>
)
}

export default SignInAndSignUpPage;
