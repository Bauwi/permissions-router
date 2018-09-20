import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import { login } from "../../actions/auth";

const Button = styled.button`
  border-radius: 50%;
  color: white;
  cursor: pointer;
  font-weight: 600;
  font-size: 2rem;
  font-style: italic;
  flex-basis: 5rem;
  height: 5rem;
  background: ${p => (p.isActive ? "#00FE00" : "transparent")};
  outline: none;

  transition: all 0.5s ease-out;

  &:hover {
    transition: all 0.225s ease-out;
    transform: scale(1.4);
  }
`;

export class SwitchItem extends Component {
  onClick = () => {
    const user = {
      nom: "Pere",
      Prenom: "Ubu",
      level: this.props.fakePermission.id,
      step: 0
    };
    this.props.login(user);
  };

  render() {
    const isActive = this.props.user.level === this.props.fakePermission.id;
    return (
      <Button onClick={this.onClick} isActive={isActive}>
        {this.props.fakePermission.id}
      </Button>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SwitchItem)
);
