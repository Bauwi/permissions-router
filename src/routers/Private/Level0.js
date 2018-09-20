import React from "react";
import PermissionRoute from "../PermissionRoute";

// Level0 layout
import fakePermissions from "../../mock/fakePermissions";
console.log(fakePermissions[0]);
export const Level0 = ({ component: Component, ...rest }) => {
  return (
    <PermissionRoute
      permission={fakePermissions[0]}
      component={props => <Component {...props} />}
    />
  );
};

export default Level0;
