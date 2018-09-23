import React, { Component } from "react";
import styled from "styled-components";

const Main = styled.main`
  background: #0080ff;
  min-height: calc(100vh - 150px);
  width: 70vw;
  position: absolute;
  display: flex;
  // padding: 3rem;
`;

export default class MainStyled extends Component {
  render() {
    return <Main>{this.props.children}</Main>;
  }
}
