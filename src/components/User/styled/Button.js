import React, { Component } from "react";
import styled from "styled-components";

const Button = styled.div``;

export default class ButtonComp extends Component {
  render() {
    return <Button {...this.props} />;
  }
}
