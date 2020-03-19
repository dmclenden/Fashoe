import React, {Component} from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class thanks extends Component {
    render() {
        return(<div style={{ padding: 20 }}>Thank you for joining our mailing list! 
        <br/>
        Please check you email for you discount code.</div>)
    }
}


const thankYou = withRouter(connect()(thanks));
export default thankYou;