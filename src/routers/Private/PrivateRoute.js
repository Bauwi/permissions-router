import React from "react";
import PermissionRoute from "../PermissionRoute";

// PrivateRoute layout
import permissions from "../../permissions/permissions";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <PermissionRoute
      permission={permissions[0]}
      component={props => <Component {...props} />}
    />
  );
};

export default PrivateRoute;
