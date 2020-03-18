import React, {Component} from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class ship extends Component {
    render() {
        return(<div style={{ padding: 20 }}>Shipping availible worldwide.
        <br/>
        Please allow 2-5 business days for delivery.
        <br/>
        Items purchsed can be returned within 30 days of delivery.</div>)
    }
}


const Shipping = withRouter(connect()(ship));
export default Shipping;