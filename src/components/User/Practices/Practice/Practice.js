import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Main from "../../styled/Main";

export class Practice extends Component {
  render() {
    const { id, practiceId } = this.props.match.params;
    return (
      <Main>
        <h1>{`/app/user/activities/${id}/practices/${practiceId}`}</h1>
      </Main>
    );
  }
}

export default withRouter(Practice);
