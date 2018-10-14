import React, { Component } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import { Route, Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserDetails: [],
      showLoginComponent: false,
      showSignUpComponent: true
    };
  }

  addUserDetailHandler = singupData => {
    this.setState({
      UserDetails: [...this.state.UserDetails, singupData]
    });
    this.setState({
      showLoginComponent: true,
      showSignUpComponent: false
    });
  };
  handlePage = () => {
    this.setState({
      showSignUpComponent: true,
      showLoginComponent: false
    });
  };
  render() {
    console.log(this.state.UserDetails);

    return (
      <div>
        <div>{/* <Link to="/signup">Sign Up</Link> */}</div>
        {/* <Route exact path="/" component={Login} /> */}
        {/* <Route exact path="/signup" component={SignUp} 
        render ={()=> <SignUp UserDetails ={this.addUserDetailHandler}/>} /> */}
        <button onClick={this.handlePage}> SignUp</button>

        {this.state.showSignUpComponent ? (
          <SignUp addUserDetailHandler={this.addUserDetailHandler} />
        ) : (
          <div style={{ alignItems: "center" }}>Login to continue</div>
        )}

        {this.state.showLoginComponent ? (
          <Login UserDetails={this.state.UserDetails} />
        ) : null}
      </div>
    );
  }
}

export default App;
