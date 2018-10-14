import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import {unregister} from './serviceWorker'

class SignUp extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      showLoginPage:false
    };
  }

  handleNameInput = e => {
    this.setState({
      name: e.target.value
    });
  };
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
  OnSubmit = () => {
    let obj = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
    this.props.addUserDetailHandler(obj);

    this.setState({
      name:'',
      email:'',
      password:'',
      showLoginPage:true
    })
  };
  render() {
    console.log(this.state.UserDetails);
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <TextField
          id="outlined-name"
          label="Name"
          value={this.state.name}
          onChange={this.handleNameInput}
          margin="normal"
          variant="outlined"
        />
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
        <Button variant="contained" color="primary" onClick={this.OnSubmit}>
          Sign Up
        </Button>

        
      </div>
    );
  }
}

export default SignUp;
