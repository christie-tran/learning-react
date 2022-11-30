import { Link } from 'react-router-dom';
import { useContext } from 'react';

import AuthContext from '../../store/auth-context';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const ctxValue = useContext(AuthContext);

  const logoutHandler = () => {
    ctxValue.onLogout();

    // optional: redirect the user
  };

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {!ctxValue.isLoggedIn && (
            <li>
              <Link to='/auth'>Login</Link>
            </li>
          )}
          {ctxValue.isLoggedIn && (
            <>
              <li>
                <Link to='/profile'>Profile</Link>
              </li>
              <li>
                <button onClick={logoutHandler}>Logout</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
