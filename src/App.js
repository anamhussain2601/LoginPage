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
    console.log('hanldeLoginPage')
    this.setState({
      showSignUpComponent: false,
      showLoginComponent: true
    });
  };

  render() {

    return (
      <div>
        {/* <div><Link to="/signup" onClick={this.handleLoginPage}>Sign Up</Link></div>
        <div><Link to="/login" onClick={this.handleSignUpPage}>Login</Link></div>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />        */}

        {this.state.showSignUpComponent ? (
          <div>
           <Route exact path="/login" component={Login} />

           <div><Link to="/signup" onClick={this.handleLoginPage}>Sign Up</Link></div>
          </div>
        ) : (
          <div style={{ alignItems: "center" }}>Login to continue</div>
        )}

        {this.state.showLoginComponent ? (
          <div>
           <Route exact path="/signup" component={SignUp} />
           <div><Link to="/login" onClick={this.handleSignUpPage}>Login</Link></div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
