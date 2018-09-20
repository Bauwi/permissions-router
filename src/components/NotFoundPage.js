import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { setInterval } from "timers";

export class NotFoundPage extends Component {
  state = {
    count: 5,
    intervalId: {}
  };

  componentDidMount() {
    var intervalId = setInterval(this.timer, 1000);
    // store intervalId in the state so it can be accessed later:
    this.setState({ intervalId: intervalId });
  }

  componentWillUnmount() {
    // use intervalId from the state to clear the interval
    console.log("componentWillUnmount");
    clearInterval(this.state.intervalId._id);
  }

  timer = () => {
    console.log("still here", this.state.intervalId);
    if (!this.state.count) {
      clearInterval(this.state.intervalId._id);
      return this.redirect();
    }
    this.setState(prevProps => {
      return {
        count: prevProps.count - 1
      };
    });
  };

  redirect = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <p>404 - Not found</p>
        <p>{this.state.count}</p>
      </div>
    );
  }
}

export default withRouter(NotFoundPage);
