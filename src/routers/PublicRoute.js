import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import steps from "../mock/steps";

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  landPage,
  ...rest
}) => {
  console.log(landPage);
  return (
    <Route
      {...rest}
      component={props =>
        isAuthenticated ? <Redirect to={landPage} /> : <Component {...props} />
      }
    />
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: !!state.auth.user.nom,
    landPage:
      state.auth.user.level >= 0 ? steps[state.auth.user.level].landPage : "/"
  };
};

export default connect(mapStateToProps)(PublicRoute);
