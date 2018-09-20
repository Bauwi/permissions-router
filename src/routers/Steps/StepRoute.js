//PrivateRoute component is used to manage private only pages
import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";
import styled from "styled-components";

import steps from "../../mock/steps";

import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
const Wrapper = styled.div`
  display: flex;
`;

export const StepRoute = ({
  props,
  component: Component,
  userStep,
  userLevel,
  ...rest
}) => {
  // Steps finished ? Route with no steps?
  const step = steps[userLevel];
  const hasStep = step ? step.hasStep : false;
  const role = step ? step.name : null;
  const noMoreStep = step ? userStep > step.stepMax : true;
  const shouldLeaveSteps = noMoreStep || !hasStep;

  if (shouldLeaveSteps) {
    return <Redirect to="/" />;
  }

  // Route has step. Is it the expected one?
  const expectedStep = `/steps/${role}/${userStep}`;
  const isExpectedStep = rest.location.pathname === expectedStep;
  return (
    <Route
      {...rest}
      component={props =>
        isExpectedStep ? (
          <Fragment>
            <Header />
            <Wrapper>
              <Sidebar />
              <Component {...props} />
            </Wrapper>
          </Fragment>
        ) : (
          <Redirect to={expectedStep} />
        )
      }
    />
  );
};

const mapStateToProps = state => {
  const { level, step } = state.auth.user;
  return {
    userStep: step,
    userLevel: level
  };
};

export default withRouter(connect(mapStateToProps)(StepRoute));
