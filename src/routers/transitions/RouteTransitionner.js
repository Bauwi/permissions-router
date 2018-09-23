import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";

import Sidebar from "../../components/Sidebar/Sidebar";
import Transitions from ".";

const Perspective = styled.div`
  width: 100%;
  height: calc(100vh - 150px);
  perspective: 1200px;
`;
const UserWrapper = styled.div`
  display: flex;
`;

export default class UserTransition extends Component {
  render() {
    return (
      <Route
        render={({ location }) => (
          <UserWrapper>
            <Sidebar />
            <Perspective>
              <Transitions pageKey={location.key} {...location.state}>
                <Switch>{this.props.children}</Switch>
              </Transitions>
            </Perspective>
          </UserWrapper>
        )}
      />
    );
  }
}
