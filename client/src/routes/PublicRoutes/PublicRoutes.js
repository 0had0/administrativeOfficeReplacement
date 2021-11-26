import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Route, Navigate } from "react-router-dom";

import selectors from "store/root.selectors";

type PublicRouteProps = {
  component: ComponentType<any>,
  isAuth: boolean,
  location: {
    state: any,
  },
};

function PublicRoute({
  component: Component,
  isAuth,
  ...rest
}: PublicRouteProps): Element<typeof Route> {
  return (
    <Route
      {...rest}
      render={
        (props) =>
          isAuth ? (
            <Navigate to={props.location.state?.from ?? "/"} />
          ) : (
            <Component {...rest} {...props} />
          )
        // eslint-disable-next-line react/jsx-curly-newline
      }
    />
  );
}

const mapStateToProps = createStructuredSelector({
  isAuth: selectors.selectIsAuth,
});

export default (connect(mapStateToProps)(PublicRoute): Function);
