import React from "react";
import PermissionRoute from "../PermissionRoute";

// Level2 layout
import fakePermissions from "../../mock/fakePermissions";
export const Level0 = ({ component: Component, ...rest }) => {
  return (
    <PermissionRoute
      permission={fakePermissions[2]}
      component={props => <Component {...props} />}
    />
  );
};

export default Level0;
