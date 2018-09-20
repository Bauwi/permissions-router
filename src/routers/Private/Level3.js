import React from "react";
import PermissionRoute from "../PermissionRoute";

// Level13layout
import fakePermissions from "../../mock/fakePermissions";
export const Level0 = ({ component: Component, ...rest }) => {
  return (
    <PermissionRoute
      permission={fakePermissions[3]}
      component={props => <Component {...props} />}
    />
  );
};

export default Level0;
