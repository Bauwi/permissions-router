import React from "react";
import PermissionRoute from "../PermissionRoute";

// Level0 layout
import permissions from "../../mock/steps";

export const Level0 = ({ component: Component, ...rest }) => {
  return (
    <PermissionRoute
      permission={permissions[0]}
      component={props => <Component {...props} />}
    />
  );
};

export default Level0;
