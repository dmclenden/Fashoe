import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header.js";
import ProductList from "./Components/ProductList/ProductList";
import { Switch, Route } from "react-router-dom";
import Menu from "./Components/Menu/Menu";
import CartDialog from "./Components/CartDialog/CartDialog";
import Details from "./Components/Details/Details";
import Order from "./Components/Order/Order";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/register";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import Footer from "./Components/Footer/Footer";
import Payment from "./Components/Payment/payment";
import Shipping from "./Components/Shipping/shipping";
import Information from "./Components/Information/information";
import mailingList from "./Components/mailingList/mailinglist";
import thankYou from "./Components/thankYou/thankyou";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Menu />
          <div className="content">
            <CartDialog />
            <Switch>
              <Route path="/" exact component={ProductList} />
              <Route path="/details/:id" component={Details} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/payment" component={Payment} />
              <Route path="/shipping" component={Shipping} />
              <Route path="/information" component={Information} />
              <Route path="/mailinglist" component={mailingList} />
              <Route path="/thankYou" component={thankYou} />
              <ProtectedRoute path="/order" component={Order} />
              <Route
                component={() => (
                  <div style={{ padding: 20 }}>Page not found</div>
                )}
              />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
