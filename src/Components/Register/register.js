import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { NavLink } from 'react-router-dom'

class signUp extends Component {
    state = {
      firstName: "",
      lastName: "",
      email: "",  
      userName: "",
      pass: "",
      redirectToReferrer: false
    };
    render() {
      const { from } = this.props.location.state || { from: { pathname: "/" } };
  
      // If user was authenticated, redirect her to where she came from.
      if (this.state.redirectToReferrer === true) {
        return <Redirect to={from} />;
      }
  
      return (
        <div style={{
          height: "100%",
          display: "flex",
          justifyContent: "center",
  
          alignItems: "center",
        }}>
          <div
            style={{
              height: 300,
              width: 200,
              padding: 30,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column"
            }}
          >
            <Avatar style={{ marginBottom: 10 }}>
              <LockOutlinedIcon />
            </Avatar>
            <div
              style={{
                marginBottom: 20,
                fontSize: 24,
                textAlign: "center"
              }}
            >
              {" "}
              Register
              {" "}
            </div>
            <TextField
              value={this.state.firstName}
              placeholder="First Name"
              onChange={e => {
                this.setState({ firstName: e.target.value });
              }}
            />

            <TextField
              value={this.state.lastName}
              placeholder="Last Name"
              onChange={e => {
                this.setState({ lastName: e.target.value });
              }}
            />

          <TextField
            value={this.state.email}
            placeholder="Email Address"
            onChange={e => {
              this.setState({ email: e.target.value });
            }}
            />

            <TextField
            value={this.state.userName}
            placeholder="Username"
            onChange={e => {
              this.setState({ userName: e.target.value });
            }}
            />

            <TextField
              value={this.state.pass}
              type="password"
              placeholder="Password"
              onChange={e => {
                this.setState({ pass: e.target.value });
              }}
            />
          <NavLink to="/login">
            <Button
              style={{ marginTop: 20, width: 200 }}
              variant="outlined"
              color="primary">

              Register
            </Button>
            </NavLink>
            
          </div>
        </div>
      );
    }
  }
  const Register = withRouter(connect()(signUp));
  
  export default Register;
  