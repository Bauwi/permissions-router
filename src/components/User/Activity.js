import React, { Component } from "react";
import { withRouter } from "react-router-dom";

export class Activity extends Component {
  render() {
    return <div>{`/app/user/activities/${this.props.match.params.id}`}</div>;
  }
}

export default withRouter(Activity);
