import React, { Component } from 'react';
import { BrowserRouter as Link } from "react-router-dom";

import {
    Navbar,
    NavbarBrand,
    NavItem,
    Button
} from 'reactstrap'

export default class NavbarClass extends Component {
    constructor(props) {
        super(props);

        this.loginLink = <Link to="/login" > <Button color="primary">Register/Login</Button></Link>
        this.allUsersLink = <Link to="/allUsers"><Button color="primary">See all users</Button></Link>

        this.state = {
            currUser: props.currentUser
        }
    }
    render() {
        if (this.state.currUser === '') {
            return (
                <Navbar color="light" light expand="md">
                    <NavItem>
                        <Link to="/"><NavbarBrand>REACT ASSESSMENT</NavbarBrand></Link>
                    </NavItem>
                    <NavItem>
                        {this.allUsersLink}
                    </NavItem>
                    <NavItem>
                        {this.loginLink}
                    </NavItem>

                </Navbar>
            )
        } else {
            return (
                <Navbar color="light" light expand="md">
                    <Link to="/"><NavbarBrand>REACT ASSESSMENT</NavbarBrand></Link>
                    {this.allUsersLink}
                    <p>Logged in as {this.state.currUser}</p>
                    <Button>Logout</Button>

                </Navbar>
            )
        }
    }

}