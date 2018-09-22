import React from "react";
import PermissionRoute from "../PermissionRoute";

// Level2 layout
import permissions from "../../permissions/permissions";

export const ProviderRoute = ({ component: Component, ...rest }) => {
  return (
    <PermissionRoute
      permission={permissions[2]}
      component={props => <Component {...props} />}
    />
  );
};

export default ProviderRoute;
