import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const ProtectedRoute = ({ component: Component, ...props }) => {
  const { authStatus } = useContext(AuthContext);

  return (
    <Route
      {...props}
      render={(props) =>
        authStatus.isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={props.redirectTo ? props.redirectTo : '/'} />
        )
      }
    />
  );
};
export default ProtectedRoute;
