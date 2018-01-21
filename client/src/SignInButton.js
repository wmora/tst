import React, { Component } from 'react';

class SignInButton extends Component {
  render() {
    return (
      <button type="button" onClick={startSignInFlow}>
        Click Me!
      </button>
    );
  }
}

const startSignInFlow = () => {
  // TODO: start sign in flow
  // fetchRequestToken()
  // redirectUser()
};

export default SignInButton;
