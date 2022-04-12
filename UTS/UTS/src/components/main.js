import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./home";
import About from "./about";
import './style.css';
import ListKeranjang from "../container/listKeranjang";
import ListProduk from "../container/listProduct";

class Main extends Component {
    render() {
        return (
            <Router>
                <div>
                    <h1 className="title">Online Shop Refridgerator</h1>
                    <ul className="header">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/listProduct">List Product</Link>
                        </li>
                        <li>
                            <Link to="/cart">Cart</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                    <hr />
                    <div className="content">
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/listProduct">
                                <ListProduk />
                            </Route>
                            <Route path="/cart">
                                <ListKeranjang />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

export default Main;