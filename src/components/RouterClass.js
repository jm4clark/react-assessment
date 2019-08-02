import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavbarClass from './Navbar'
import Home from './Home'
import Login from './Login'
import AllUsers from './AllUsers'

export default class RouterClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: props.user
        }
    }

    render() {
        return (
            <div>
                <Router>
                    <NavbarClass currentUser={this.state.currentUser}/>

                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/allUsers" component={AllUsers} />
                </Router>
            </div>
        )
    }
}