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
    this.setState({ intervalId: intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId._id);
  }

  timer = () => {
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
