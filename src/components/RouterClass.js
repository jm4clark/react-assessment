import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavbarClass from './NavbarClass'
import Home from './Home'
import LoginAndRegister from './LoginandRegister'
import AllUsers from './AllUsers'

export default class RouterClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: props.user,
            data: props.data
        }
    }

    render() {
        console.log("router user: " + this.props.user)
        return (
            <Router>
                <NavbarClass user={this.props.user} />

                <Route exact path="/" component={Home} />
                <Route path="/login" render={() => <LoginAndRegister passedFunction={this.props.passedFunction} passedLogin={this.props.passedLogin}/>} />
                <Route path="/allUsers" render={() => <AllUsers data={this.props.data} passedFunction={this.props.passedFunction} />} />
            </Router>
        )
    }
}