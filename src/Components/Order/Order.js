import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { setCheckedOutItems } from "../../Redux/Actions";
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import {toast} from 'react-toastify';

import "react-toastify/dist/ReactToastify.css";


toast.configure();

const mapStateToProps = state => {
  return {
    checkedOutItems: state.checkedOutItems
  };
};

async function handleToken(token) {
  //console.log({token, addresses})
  const response = await axios.post('https://8ef7h.sse.codesandbox.io/checkout' , {
        token
        //mapStateToProps
  });

  const { status } = response.data;
  console.log("Response:", response.data);
  if (status === "success") {
    toast("Success! Check email for details.", { type: "success" }, <button> Go home</button>);
  } else {
    toast("Success! Check email for details.", { type: "success" }, <button> Go home</button>);
  }
}

// This component shows the items user checked out from the cart.
class ConnectedOrder extends Component {
  render() {
    let totalPrice = this.props.checkedOutItems.reduce((accumulator, item) => {
      return accumulator + item.price * item.quantity;
    }, 0);

    return (
      <div style={{ padding: 10 }}>
        <div style={{ fontSize: 24, marginTop: 10 }}>
          Order summary
        </div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Item name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.checkedOutItems.map((item, index) => {
              return (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.price}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>

        <div
          style={{
            color: "#504F5A",
            marginLeft: 5,
            marginTop: 50,
            fontSize: 22
          }}
        >
          Total price: $ {totalPrice} 
        </div>

        <Button
          color="secondary"
          variant="outlined"
          disabled={totalPrice === 0}
          onClick={() => {
            this.props.dispatch(setCheckedOutItems([]));
          }}
          style={{ margin: 5, marginTop: 30 }}>
          Discard
        </Button>

          <StripeCheckout
          stripeKey = "pk_test_FI8OrjnUuaMSJ6c9uzcB6eUP002sbgDKhy"
          token = {handleToken}
          billingAddress
          shippingAddress
          amount = {totalPrice * 100}
          />
        
      </div>
    );
  }
}
const Order = withRouter(connect(mapStateToProps)(ConnectedOrder));

export default Order;
