import React, { Component } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import Welcome from "./Welcome";
import BookList from "./BookList";

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
          <div>
            <Link to="/booklist" style={{ marginLeft: "15px" }}>
              Book List 
            </Link>
          </div>
        </div>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/" component={Welcome} />
          <Route exact path="/booklist" component={BookList} />
        </Switch>
      </div>
    );
  }
}

export default App;
