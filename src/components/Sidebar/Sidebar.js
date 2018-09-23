import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, NavLink } from "react-router-dom";
import styled from "styled-components";

import { slide, scale } from "../../routers/transitions";

import steps from "../../routers/permissions/permissions";

const BaseNavItem = styled(NavLink)`
  border: 3px solid transparent;
  // border-left: 3px solid
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
  min-width: 30vw;
  overflow-y: scroll;
  z-index: 9;
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #0080ff;
  }

  &::-webkit-scrollbar {
    width: 10px;
    background-color: #0080ff;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #003467;
    width: 13px;
  }
`;

const NavBar = styled.nav`
  display: flex;
  flex-direction: column;
  h1 {
    font-weight: 600;
    color: #222;
    text-align: center;
  }
`;

const NavBlock = styled.div`
  margin-bottom: 1rem;
  // padding: 0 1rem;
`;

const Button = styled.button`
  border: none;
  border-left: ${p =>
    p.isActive ? "10px solid #0080ff" : "10px solid transparent"};

  background: ${p =>
    p.isActive ? "rgba(0, 52, 103, 0.3)" : "rgba(0, 52, 103, 0.1)"};
  color: white;
  cursor: pointer;
  display: flex;
  font-size: 0.8rem;
  font-style: italic;
  padding: 1rem 1rem;
  text-decoration: none;
  width: 100%;
  text-transform: uppercase;
  transition: all 0.7s ease-out;
  outline: none;
  &:hover {
    background: rgba(0, 52, 103, 0.3);
  }
`;
export class SidebarComp extends Component {
  renderSteps = () => {
    const {
      level,
      role: { name, hasStep }
    } = this.props;

    const stepMax = steps[level].stepMax;

    return Array.from(Array(stepMax + 1).keys()).map((el, i) => {
      if (!hasStep) return null;
      return (
        <NavItem
          key={i}
          to={`/steps/${name}/${i}`}
          level={level}
        >{`Step${i}${name}`}</NavItem>
      );
    });
  };

  render() {
    const { level, history, isAuthenticated } = this.props;
    if (!isAuthenticated) return null;
    console.log(this.props);
    return (
      <Sidebar>
        <button
          isActive={this.props.location.pathname === "/app/user/activities/"}
          onClick={() =>
            history.push({ pathname: "/app/user/activities/", state: slide })
          }
        >
          Slide
        </button>
        <button
          isActive={this.props.location.pathname === "/app/user/activities/25"}
          onClick={() =>
            history.push({ pathname: "/app/user/activities/25", state: slide })
          }
        >
          slide
        </button>

        <NavBar>
          <h2>Steps</h2>
          <NavBlock>{this.renderSteps()}</NavBlock>
          <NavBlock>
            <Button
              isActive={this.props.location.pathname === "/app/admin"}
              onClick={() =>
                history.push({ pathname: "/app/admin", state: slide })
              }
            >
              /app/admin
            </Button>
          </NavBlock>
          <h2>User</h2>
          <NavBlock>
            <Button
              isActive={this.props.location.pathname === "/app/user/activities"}
              onClick={() =>
                history.push({ pathname: "/app/user/activities", state: slide })
              }
            >
              /app/user/activities
            </Button>
            <Button
              isActive={
                this.props.location.pathname === "/app/user/activities/25"
              }
              onClick={() =>
                history.push({
                  pathname: "/app/user/activities/25",
                  state: slide
                })
              }
            >
              /app/user/activities/25
            </Button>
            <Button
              isActive={
                this.props.location.pathname ===
                "/app/user/activities/25/practices/12"
              }
              onClick={() =>
                history.push({
                  pathname: "/app/user/activities/25/practices/12",
                  state: slide
                })
              }
            >
              /app/user/activities/25/practices/12
            </Button>
            <Button
              isActive={
                this.props.location.pathname ===
                "/app/user/activities/13/practices/create"
              }
              onClick={() =>
                history.push({
                  pathname: "/app/user/activities/13/practices/create",
                  state: slide
                })
              }
            >
              /app/user/activities/13/practices/create
            </Button>
          </NavBlock>
          <NavBlock>
            <Button
              isActive={this.props.location.pathname === "/app/user/practices"}
              onClick={() =>
                history.push({
                  pathname: "/app/user/practices",
                  state: slide
                })
              }
            >
              /app/user/practices
            </Button>
            <Button
              isActive={
                this.props.location.pathname === "/app/user/practices/open"
              }
              onClick={() =>
                history.push({
                  pathname: "/app/user/practices/open",
                  state: slide
                })
              }
            >
              /app/user/practices/open
            </Button>
          </NavBlock>
          <NavBlock>
            <Button
              isActive={
                this.props.location.pathname === "/app/user/account/profile"
              }
              onClick={() =>
                history.push({
                  pathname: "/app/user/account/profile",
                  state: slide
                })
              }
            >
              /app/user/account/profile
            </Button>
            <Button
              isActive={
                this.props.location.pathname === "/app/user/account/activities"
              }
              onClick={() =>
                history.push({
                  pathname: "/app/user/account/activities",
                  state: slide
                })
              }
            >
              /app/user/account/activities
            </Button>
            <Button
              isActive={
                this.props.location.pathname === "/app/user/account/history"
              }
              onClick={() =>
                history.push({
                  pathname: "/app/user/account/history",
                  state: slide
                })
              }
            >
              /app/user/account/history
            </Button>
            <Button
              isActive={
                this.props.location.pathname === "/app/user/account/payment"
              }
              onClick={() =>
                history.push({
                  pathname: "/app/user/account/payment",
                  state: slide
                })
              }
            >
              /app/user/account/payment
            </Button>
            <Button
              isActive={
                this.props.location.pathname === "/app/user/account/financement"
              }
              onClick={() =>
                history.push({
                  pathname: "/app/user/account/financement",
                  state: slide
                })
              }
            >
              /app/user/account/financement
            </Button>
            <Button
              isActive={
                this.props.location.pathname ===
                "/app/user/account/notification"
              }
              onClick={() =>
                history.push({
                  pathname: "/app/user/account/notification",
                  state: slide
                })
              }
            >
              /app/user/account/notification
            </Button>
          </NavBlock>

          <NavBlock>
            <NavItem to="/login" level={level}>
              LoginPage
            </NavItem>
          </NavBlock>
          <NavBlock>
            <NavItem to="/notfound" level={level}>
              404
            </NavItem>
          </NavBlock>
        </NavBar>
      </Sidebar>
    );
  }
}

const mapStateToProps = state => ({
  userStep: state.auth.user.step,
  level: state.auth.user.level,
  role: steps[state.auth.user.level],
  authorizedStep: state.auth.user.step,
  isAuthenticated: !!state.auth.user.nom
});

export default withRouter(connect(mapStateToProps)(SidebarComp));
