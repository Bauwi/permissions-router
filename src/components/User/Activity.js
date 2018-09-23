import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Main from "./styled/Main";

export class Activity extends Component {
  render() {
    return (
      <Main>
        <h1>{`/app/user/activities/${this.props.match.params.id}`}</h1>
      </Main>
    );
  }
}

export default withRouter(Activity);
