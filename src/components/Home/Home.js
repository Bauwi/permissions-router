import React, { Component } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import { slide } from "../../routers/transitions";

import Button from "../User/styled/Button";

const HomeContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
`;

const Home = styled.div`
  display: flex;
  background: lightgray;
  position: absolute;
  height: 50vh;
  width: 30vw;
`;

export class HomeComp extends Component {
  render() {
    return (
      <HomeContainer>
        <Home>
          <p className="App-intro">THIS IS HOME !</p>
          <Button
            onClick={() =>
              this.props.history.push({
                pathname: "/login",
                state: slide
              })
            }
          >
            /login
          </Button>
        </Home>
      </HomeContainer>
    );
  }
}
export default withRouter(HomeComp);
