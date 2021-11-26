// @flow
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Route, Navigate } from "react-router-dom";

import selectors from "store/root.selectors";

type PrivateRouteProps = {
  component: ComponentType<any>,
  isAuth: boolean,
};

const CURRENT_PATHNAME = window.location.href.split("/").pop();

function PrivateRoute({
  component: Component,
  isAuth,
  ...rest
}: PrivateRouteProps): Element<typeof Route> {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return <Component {...rest} {...props} />;
        }
        return (
          <Navigate
            to={{
              pathname: "/login",
              state: { from: `/${CURRENT_PATHNAME}` },
            }}
          />
        );
      }}
    />
  );
}

const mapStateToProps = createStructuredSelector({
  isAuth: selectors.selectIsAuth,
});

export default (connect(mapStateToProps)(PrivateRoute): Function);
