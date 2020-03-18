import React, {Component} from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class info extends Component {
    render() {
        return(<div style={{ padding: 20 }}>faSHOE is an online shoe store created using:
        <br/>
        <br/>
        This is Ayan and Desiree's final project. Its been a LOONNGGGGGGG journey but we made it!</div>)
    }
}


const Information = withRouter(connect()(info));
export default Information;