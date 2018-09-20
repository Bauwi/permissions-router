import React, { Component } from "react";
import { withRouter } from "react-router-dom";

export class Activity extends Component {
  render() {
    console.log(this.props);
    return (
      <div>{`/app/employee/activities/${
        this.props.match.params.activityId
      }`}</div>
    );
  }
}

export default withRouter(Activity);
