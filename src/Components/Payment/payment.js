import React, {Component} from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class pay extends Component {
    render() {
        return(<div style={{ padding: 20 }}>Payment processed using Stripe API</div>)
    }
}


const Payment = withRouter(connect()(pay));
export default Payment;