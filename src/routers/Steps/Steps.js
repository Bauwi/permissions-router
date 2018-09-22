//PrivateRoute component is used to manage private only pages
import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import steps from "../../permissions/permissions";

export const Steps = ({ userStep, role }) => {
  return <Redirect to={`/steps/${role.name}/${userStep}`} />;
};

const mapStateToProps = state => ({
  role: steps[state.auth.user.level],
  userStep: state.auth.user.step
});

export default connect(mapStateToProps)(Steps);
