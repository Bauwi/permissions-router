import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Home = styled.div`
  display: flex;
`;

export default class HomeComp extends Component {
  render() {
    return (
      <Home>
        <p className="App-intro">THIS IS HOME !</p>
        <Link to="/login">Login</Link>
      </Home>
    );
  }
}
