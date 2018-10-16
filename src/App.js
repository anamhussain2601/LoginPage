import React, { Component } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";

import { Route, Link, Switch } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  render() {
    return (
      <div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Link to="/signup" style={{ marginLeft: "15px" }}>
            Sign Up
          </Link>
          <div />
          <div>
            <Link to="/login" style={{ marginLeft: "15px" }}>
              Login
            </Link>
          </div>
        </div>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
