import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { startLogin } from "../actions/auth";

export class ConfirmEmail extends Component {
  state = {
    level: 0
  };

  onLevelChange = e => {
    const level = parseInt(e.target.value, 10);
    this.setState({ level });
  };

  onConfirm = () => {
    this.props.startLogin({ ...this.props.user, level: this.state.level });
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <label htmlFor="level">
          <input
            onChange={this.onLevelChange}
            name="level"
            type="number"
            value={this.state.level}
          />
        </label>

        <button onClick={this.onConfirm}>Confirm</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user
});

const mapDispatchToProps = dispatch => ({
  startLogin: user => dispatch(startLogin(user))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ConfirmEmail)
);
