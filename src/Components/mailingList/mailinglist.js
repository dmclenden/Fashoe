import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { NavLink } from "react-router-dom";
import fire from '../firebase/firebase';


class list extends Component {
    state = {
      email: ""
    };

    handleText=e=>{
        this.setState({
            email: e.target.value
        })
    };

    handleJoin=e=>{
        let messgeRef = fire.database().ref('messages').orderByKey().limitToLast(100);
        fire.database().ref('messages').push(this.state.email)
        this.setState({
            email: ""
        })
    };

    
    render() {
  
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
              Join mailing list to recieve 15% OFF
              {" "}
            </div>
           

            <TextField 
              value={this.state.firstName}
              placeholder="Enter Email Address"
              onChange={e => {
            this.setState({ email: e.target.value });
              }}
            />

            <NavLink
            to={"/thankyou"}>
            <Button
              style={{ marginTop: 20, width: 200 }}
              variant="outlined"
              color="primary"
              onClick={this.handleJoin}>

              JOIN
            </Button>
            </NavLink>
            
          </div>
        </div>
      );
    }
  }
  const mailingList = withRouter(connect()(list));
  
  export default mailingList;
  