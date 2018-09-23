//PrermissionRoute component is used to manage private only pages
import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import styled from "styled-components";

import RouteWrapper from "../components/User/styled/Main";

import steps from "./permissions/permissions";

const Wrapper = styled.div`
  display: flex;
`;

export const PermissionRoute = ({
  component: Component,
  permission,
  isAuthorized,
  shouldBeHijacked,
  role,
  userStep,
  ...rest
}) => {
  //If user is not ok with his steps
  if (shouldBeHijacked) {
    return <Redirect to={`/steps/${role.name}/${userStep}`} />;
  }
  return (
    <RouteWrapper>
      <Route
        {...rest}
        component={props =>
          isAuthorized ? (
            <Wrapper>
              <Component {...props} />
            </Wrapper>
          ) : (
            <Redirect to="/" />
          )
        }
      />
    </RouteWrapper>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { level, step } = state.auth.user;
  const role = steps[state.auth.user.level];
  return {
    isAuthorized: ownProps.permission.authorized.includes(parseInt(level, 10)),
    shouldBeHijacked:
      steps[level] && steps[level].hasStep && step <= steps[level].stepMax,
    role,
    userStep: step
  };
};

export default connect(mapStateToProps)(PermissionRoute);
