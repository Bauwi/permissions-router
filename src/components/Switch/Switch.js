import React, { Component } from "react";
import styled from "styled-components";
import fakePermissions from "../../mock/fakePermissions";
import SwitchItem from "./SwitchItem";

const Switch = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 50%;
`;

const SwitchContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
`;

const SwitchTitle = styled.h2`
  font-weight: 900;
  font-size: 3rem;
  font-style: italic;
  width: 25%;
`;

export default class SwitchComp extends Component {
  renderSwitch = () =>
    fakePermissions.map(fakePermission => (
      <SwitchItem fakePermission={fakePermission} />
    ));

  render() {
    return (
      <SwitchContainer>
        <SwitchTitle />
        <Switch>{this.renderSwitch()}</Switch>
        <SwitchTitle>PERMISSION LEVEL</SwitchTitle>
      </SwitchContainer>
    );
  }
}
