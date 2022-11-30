import { useState, useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import classes from './AuthForm.module.css';

import AuthContext from '../../store/auth-context';

const AuthForm = () => {
  const history = useHistory();

  console.log(history);
  const ctxValue = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = e => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // Optional: Add validation

    setIsLoading(true);

    let url;

    if (isLogin) {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAJduIilKFzG5NrUL880TiqQjYdSDn5u5o';
    } else {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAJduIilKFzG5NrUL880TiqQjYdSDn5u5o';
    }

    const createUser = async (email, password) => {
      try {
        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const data = await response.json();

        if (!response.ok) {
          setIsLoading(false);
          throw new Error(data.error.message);
        }

        setIsLoading(false);

        const expirationTime = new Date(new Date().getTime() + (+data.expiresIn * 1000));

        ctxValue.onLogin(data.idToken, expirationTime.toISOString());
        history.replace('/');
        // Log user in
      } catch(error) {
        alert(error.message);
      }
    };

  createUser(enteredEmail, enteredPassword);

  emailInputRef.current.value = '';
  passwordInputRef.current.value = '';
};

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordInputRef} />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {isLoading && <p>Sending the data</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
