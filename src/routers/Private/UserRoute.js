import React from "react";
import PermissionRoute from "../PermissionRoute";

// Level1 layout
import permissions from "../permissions/permissions";

export const EmployeeRoute = ({ component: Component, ...rest }) => {
  return (
    <PermissionRoute
      permission={permissions[1]}
      component={props => <Component {...props} />}
      {...rest}
    />
  );
};

export default EmployeeRoute;
