import React from "react";
import PermissionRoute from "../PermissionRoute";

// Level4 layout
import permissions from "../../permissions/permissions";
export const AdminRoute = ({ component: Component, ...rest }) => {
  return (
    <PermissionRoute
      permission={permissions[4]}
      component={props => <Component {...props} />}
    />
  );
};

export default AdminRoute;
