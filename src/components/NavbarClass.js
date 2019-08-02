import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'
import {
    Navbar,
    Nav,
    NavbarBrand,
    NavItem,
    Button
} from 'reactstrap'

export default class NavbarClass extends Component {
    constructor(props) {
        super(props);

        this.loginLink = <Link to="/login"><Button color="primary">Register/Login</Button></Link>//<Link to="/login" > <button>Register/Login</button></Link>//(<Button tag={Link} to="/login" color="primary">Register/Login</Button>);//
        this.allUsersLink = <Link to="/allUsers"><Button color="primary">See all users</Button></Link>//(<Button tag={Link} to="/allUsers" color="primary">See all users</Button>);//

        this.state = {
            currUser: props.user
        }
    }

    render() {
        console.log("current user: " + this.props.user);
        if (this.props.user === '') {
            return (
                <Navbar color="light" light expand="md">
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Link to="/"><NavbarBrand>REACT ASSESSMENT</NavbarBrand></Link>
                        </NavItem>
                        <NavItem>
                            {this.allUsersLink}
                        </NavItem>
                        <NavItem>
                            {this.loginLink}
                        </NavItem>
                    </Nav>
                </Navbar>
            )
        } else {
            return (
                <Navbar color="light" light expand="md">
                    <Nav className="ml-auto" navbar>
                        <Link to="/"><NavbarBrand>REACT ASSESSMENT</NavbarBrand></Link>
                        <NavItem>
                            {this.allUsersLink}
                        </NavItem>
                        <NavItem>
                            <p>Logged in as {this.props.user}</p>
                        </NavItem>
                        <NavItem>
                            <Button>Logout</Button>
                        </NavItem>
                    </Nav>
                </Navbar>
            )
        }
    }

}