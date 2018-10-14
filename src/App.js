import React, { Component } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import Button from "@material-ui/core/Button";

import { Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginComponent: false,
      showSignUpComponent: true
    };
  }

  // addUserDetailHandler = singupData => {
  //   this.setState({
  //     UserDetails: [...this.state.UserDetails, singupData]
  //   });
  //   this.setState({
  //     showLoginComponent: true,
  //     showSignUpComponent: false
  //   });
  // };
  handleSignUpPage = () => {
    this.setState({
      showSignUpComponent: true,
      showLoginComponent: false
    });
  };

  handleLoginPage = () => {
    this.setState({
      showSignUpComponent: false,
      showLoginComponent: true
    });
  };

  render() {
    console.log(this.state.UserDetails);

    return (
      <div>
        <div><Link to="/signup">Sign Up</Link></div>
        <div><Link to="/login">Login</Link></div>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />       

        {/* {this.state.showSignUpComponent ? (
          <div>
            <SignUp />
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleLoginPage}
            >
              Login
            </Button>
          </div>
        ) : (
          <div style={{ alignItems: "center" }}>Login to continue</div>
        )}

        {this.state.showLoginComponent ? (
          <div>
            <Login  />
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleSignUpPage}
            >
              {" "}
              SignUp
            </Button>
          </div>
        ) : null} */}
      </div>
    );
  }
}

export default App;
