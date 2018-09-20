import React, { Component } from "react";
import { withRouter } from "react-router-dom";

export class Practice extends Component {
  render() {
    console.log(this.props);
    const { activityId, practiceId } = this.props.match.params;
    return (
      <div
      >{`/app/employee/activities/${activityId}/practices/${practiceId}`}</div>
    );
  }
}

export default withRouter(Practice);
