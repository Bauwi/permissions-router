import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import steps from "../../mock/steps";

const BaseNavItem = styled(NavLink)`
  border: 3px solid transparent;
  // border-left: 3px solid
  //   ${p => (p.shouldBeAuthorized.includes(p.level) ? "#0080ff" : "red")};
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.1);
  color: white;
  display: flex;
  margin: 0.2rem 1rem;
  padding: 0.2rem 1rem;
  text-decoration: none;
`;

const NavItem = styled(({ className, ...props }) => (
  <BaseNavItem {...props} activeClassName={className} />
))`
  background: rgba(0, 128, 255, 0.1);
  border: 3px solid #0080ff;
`;

const Sidebar = styled.aside`
  background: lightgray;
  color: lightgrey;
  height: calc(100vh - 150px);
  width: 20rem;
`;

const NavBar = styled.nav`
  display: flex;
  flex-direction: column;
`;

export class SidebarComp extends Component {
  renderSteps = () => {
    const {
      level,
      role: { name, hasStep }
    } = this.props;

    const stepMax = steps[level].stepMax;
    const isInStep = steps[level].hasStep
      ? steps[level].hasStep > steps[level].stepMax
      : false;

    return Array.from(Array(stepMax + 1).keys()).map((el, i) => {
      if (!hasStep) return null;
      return (
        <NavItem
          key={i}
          to={`/steps/${name}/${i}`}
          shouldBeAuthorized={[i]}
          level={level}
          isInStep={isInStep}
        >{`Step${i}${name}`}</NavItem>
      );
    });
  };

  render() {
    const {
      level
      // userStep,
    } = this.props;
    // const stepMax = steps[level].stepMax;
    const isInStep = steps[level].hasStep
      ? steps[level].hasStep > steps[level].stepMax
      : false;
    return (
      <Sidebar>
        <NavBar>
          {this.renderSteps()}
          <NavItem
            to="/app/employee/activities/25"
            level={level}
            shouldBeAuthorized={[1, 3, 4]}
            isInStep={isInStep}
          >
            /app/employee/activities/25
          </NavItem>
          <NavItem
            to="/app/employee/activities/25/practices/12"
            level={level}
            shouldBeAuthorized={[1, 3, 4]}
            isInStep={isInStep}
          >
            /app/employee/activities/25/practices/12
          </NavItem>
          <NavItem to="/login" level={level} shouldBeAuthorized={[]}>
            LoginPage
          </NavItem>
          <NavItem
            to="/notfound"
            level={level}
            shouldBeAuthorized={[0, 1, 2, 3, 4]}
          >
            404
          </NavItem>
        </NavBar>
      </Sidebar>
    );
  }
}

const mapStateToProps = state => ({
  userStep: state.auth.user.step,
  level: state.auth.user.level,
  role: steps[state.auth.user.level],
  authorizedStep: state.auth.user.step
});

export default connect(mapStateToProps)(SidebarComp);
