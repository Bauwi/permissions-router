import React, { Component } from "react";
import { withRouter } from "react-router-dom";

export class Practice extends Component {
  render() {
    const { id, practiceId } = this.props.match.params;
    return <div>{`/app/user/activities/${id}/practices/${practiceId}`}</div>;
  }
}

export default withRouter(Practice);
