import React, {Component} from 'react';
import Header from "../header/header";
import UseScript from "../hooks/useScript";
import Cart from "../cart/cart";
import Home from "../pages/home/home";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";

class App extends Component {


    render() {

        return (
            <Router>
                <Header/>
                <Cart/>
                <Switch >
                    <Route exact path={"/"}>
                        <Home/>
                    </Route>
                    <Route exact path={"/Register"}>

                    </Route>
                </Switch>
                <UseScript url={"js/active.js"}/>
            </Router>
        );
    }
}

export default App;