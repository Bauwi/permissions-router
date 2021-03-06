import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { withTheme } from "styled-components";

import permissions from "../../routers/permissions/permissions";
import { startLogout } from "../../actions/auth";
import StepCounter from "../Steps/StepCounter";

const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  background-color: lightgray;
  height: 150px;
  padding: 0 20px 0 0;
  color: white;
`;
const Permission = styled.p`
  align-items: center;
  background: ${p => p.theme.colors.main};
  color: white;
  display: flex;
  font-size: 2.5rem;
  font-style: italic;
  font-weight: 900;
  height: 100%;
  justify-content: center;
  flex-basis: 25%;
  text-transform: uppercase;
  min-width: calc(30vw - 10px);
`;

const CounterContainer = styled.div`
  align-items: center;
  display: flex;
  flex-basis: 50%;
  flex-direction: column;
  justify-content: center;
`;
const CatTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 900;
  text-transform: uppercase;
  font-style: italic;
`;

const Button = styled.button`
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  font-style: italic;
  flex-basis: 5rem;
  text-transform: uppercase;

  outline: none;

  transition: all 0.5s ease-out;

  &:hover {
    transition: all 0.225s ease-out;
    color: #0080ff;
  }
`;
export class HeaderComp extends Component {
  render() {
    const { permission, startLogout, isAuthenticated } = this.props;
    if (!isAuthenticated) return null;
    return (
      <Header>
        <Permission>{permission}</Permission>
        <CounterContainer>
          <CatTitle>Switch step</CatTitle>
          <StepCounter />
        </CounterContainer>
        <Button onClick={startLogout}>logout</Button>
      </Header>
    );
  }
}

const mapStateToProps = state => ({
  permission: permissions[state.auth.user.level]
    ? permissions[state.auth.user.level].name
    : "",
  isAuthenticated: !!state.auth.user.nom
});

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withTheme(HeaderComp));
