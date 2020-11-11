import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from 'react-redux';

export const PrivateRoute = ({ component: Component, ...rest}) => {
  console.log("REST!!!")

  return (
    <Route
      {...rest}
      render={(props) =>
        rest.needLogin === true ? (
          <Redirect to="/login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  )
};

export const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      rest.needLogin !== true ? <Redirect to="/" /> : <Component {...props} />
    }
  />
);

export const ProtectedArtistRoute = ({ component: Component, ...rest }) => {
  // const user = useSelector((state) => state.user.data);

  // if(!user) {
  //   return null
  // }

  return (
    <Route
      {...rest}
      render={(props) =>
        rest.needLogin !== true ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  )
}