import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import * as actionTypes from "./store/actions";

import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);
    this.props.loginHandler();

    this.state = {
      email: "",
      password: "",
      login: null
    };
  }
  handleEmailInput = e => {
    this.setState({
      email: e.target.value
    });
  };
  handlePasswordInput = e => {
    this.setState({
      password: e.target.value
    });
  };
  handleLogin = () => {
    this.setState({
      login: false
    });

    // this.props.loginHandler();
    // for (let i = 0; i <= this.props.UserDetails.length; i++) {
    //   let data = this.props.UserDetails[i];
    //   console.log(data ,'data', this.state.email,'emial' )
    //   if (this.state.email === data.email) {
    //     if (this.state.password === data.password) {
    //       this.setState({
    //         login: true
    //       });
    //       console.log("success");
    //       break;
    //     }
    //     else if (this.state.password !== data.password) {
    //       console.log("fail");
    //     }
    //     break;
    //   }
    // }

    let isLogin = this.props.UserDetails.some(user => {
      return (
        user.email === this.state.email && user.password === this.state.password
      );
    });

    if (isLogin) {
      this.setState({ login: true });
    }

    this.setState({
      email: "",
      password: ""
    });
  };
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <TextField
          id="outlined-email-input"
          label="Email"
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.handleEmailInput}
          autoComplete="email"
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          value={this.state.password}
          onChange={this.handlePasswordInput}
          margin="normal"
          variant="outlined"
        />
        <Button variant="contained" color="primary" onClick={this.handleLogin}>
          Login
        </Button>

        {this.state.login !== null ? (
          this.state.login ? (
            <div>Login Successful</div>
          ) : !this.state.login ? (
            <div>Incorrect email or password</div>
          ) : null
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    UserDetails: state.UserDetails
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loginHandler: () => dispatch({ type: actionTypes.LOGIN })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
