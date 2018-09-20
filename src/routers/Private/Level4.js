import React from "react";
import PermissionRoute from "../PermissionRoute";

// Level4 layout
import fakePermissions from "../../mock/fakePermissions";
export const Level0 = ({ component: Component, ...rest }) => {
  return (
    <PermissionRoute
      permission={fakePermissions[4]}
      component={props => <Component {...props} />}
    />
  );
};

export default Level0;
