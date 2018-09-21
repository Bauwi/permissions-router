import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { withTheme } from "styled-components";

import { startLogin } from "../../actions/auth";

const FormContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
`;

const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: ${p => p.theme.colors.background};
  height: 30vh;
  width: 30vw;
`;
const FormTitle = styled.h2`
  color: ${p => p.theme.colors.main};
  font-size: ${p => p.theme.title2.fontSize};
  font-weight: 600;
  text-transform: uppercase;
`;
const Inputs = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
`;

export class Login extends Component {
  state = {
    permission: 0,
    step: 0
  };

  onPermissionChange = e => {
    const permission = parseInt(e.target.value, 10);
    this.setState({ permission });
  };

  onStepChange = e => {
    const step = parseInt(e.target.value, 10);
    this.setState({ step });
  };

  onSubmit = e => {
    e.preventDefault();
    const user = {
      nom: "Pere",
      Prenom: "Ubu",
      level: parseInt(this.state.permission, 10),
      step: parseInt(this.state.step, 10)
    };
    this.props.startLogin(user);
  };

  render() {
    console.log(this.state.permission);
    return (
      <FormContainer>
        <Form>
          <FormTitle>Login config</FormTitle>
          <Inputs>
            <label for="permission">
              Permission Level:
              <input
                id="permission"
                value={this.state.permission}
                onChange={this.onPermissionChange}
                type="number"
                placeholder="permission level"
              />
            </label>
            <label for="step">
              Step:
              <input
                id="step"
                value={this.state.step}
                onChange={this.onStepChange}
                type="number"
                placeholder="step"
              />
            </label>
          </Inputs>
          <button onClick={this.onSubmit}>Submit</button>
        </Form>
      </FormContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startLogin: user => dispatch(startLogin(user))
});

export default connect(
  undefined,
  mapDispatchToProps
)(withTheme(Login));
