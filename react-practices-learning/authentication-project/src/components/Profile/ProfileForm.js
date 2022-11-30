import React, { useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import AuthContext from '../../store/auth-context';
import classes from './ProfileForm.module.css';

const ProfileForm = () => {
  const history = useHistory();
  const ctxValue = useContext(AuthContext);

  console.log(ctxValue);
  const newPasswordInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    // add validation

    const url = 'https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAJduIilKFzG5NrUL880TiqQjYdSDn5u5o';

    const updatePassword = async (idToken, password) => {
      try {
        const response = await fetch(url, {
          method: 'POST',
          body: JSON.stringify({
            idToken: idToken,
            password: password,
            returnSecureToken: false
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error.message);
        }

        console.log(data);
        history.replace('/');
      } catch (error) {
        console.log(error);
      }
    };

    updatePassword(ctxValue.token, enteredNewPassword);

    newPasswordInputRef.current.value = '';
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={newPasswordInputRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
