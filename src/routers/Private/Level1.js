import React from "react";
import PermissionRoute from "../PermissionRoute";

// Level1 layout
import fakePermissions from "../../mock/fakePermissions";
export const Level0 = ({ component: Component, ...rest }) => {
  return (
    <PermissionRoute
      permission={fakePermissions[1]}
      component={props => <Component {...props} />}
      {...rest}
    />
  );
};

export default Level0;
