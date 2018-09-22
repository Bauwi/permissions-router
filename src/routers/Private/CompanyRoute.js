import React from "react";
import PermissionRoute from "../PermissionRoute";

// Level13layout
import permissions from "../permissions/permissions";

export const CompanyRoute = ({ component: Component, ...rest }) => {
  return (
    <PermissionRoute
      permission={permissions[3]}
      component={props => <Component {...props} />}
    />
  );
};

export default CompanyRoute;
