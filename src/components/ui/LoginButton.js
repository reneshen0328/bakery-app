import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import classes from './LoginButton.module.css'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className={classes.buttonPrimary}
      onClick={() => loginWithRedirect()}
    >
      <span className={classes.text}>
        Log In
      </span>
    </button>
  );
};

export default LoginButton;