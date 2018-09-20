import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import { incrementStep, decrementStep } from "../../actions/auth";

const Counter = styled.div`
  align-items: center;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  padding: 2rem;
`;

const Count = styled.h2`
  font-size: 4rem;
  color: white;
`;

const Button = styled.button`
  background: transparent;
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  font-weight: 600;
  font-size: 2rem;
  font-style: italic;
  flex-basis: 5rem;
  height: 4rem;
  max-width: 4rem;
  outline: none;

  transition: all 0.5s ease-out;

  &:hover {
    transition: all 0.225s ease-out;
    transform: scale(1.4);
  }
`;

export class StepCounter extends Component {
  onIncrement = () => {
    this.props.incrementStep();
    this.props.history.push("/");
  };

  onDecrement = () => {
    this.props.decrementStep();
    this.props.history.push("/");
  };

  render() {
    return (
      <Counter>
        <Button onClick={this.onDecrement}>-</Button>
        <Count>{this.props.step}</Count>
        <Button onClick={this.onIncrement}>+</Button>
      </Counter>
    );
  }
}

const mapStateToProps = state => ({
  step: state.auth.user.step
});

const mapDispatchToProps = dispatch => ({
  incrementStep: () => dispatch(incrementStep()),
  decrementStep: () => dispatch(decrementStep())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(StepCounter)
);
