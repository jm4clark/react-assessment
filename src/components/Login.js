import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
    Col
} from 'reactstrap'

export default class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            email: ''
        }

        this.handleRegister = (e) => {
            e.preventDefault();
            let userLogin = {
                username: e.target[0].value,
                password: e.target[1].value
            }
            this.props.passedLogin(userLogin);
            this.props.passedFunction();
            /*axios
            .get(`http://localhost:5000/user/name/${itemToAdd.username}/${itemToAdd.password}`)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => console.log(err));*/
        }
    }


    render() {
        return (
            <div style={{paddingLeft: '50px'}}>
                <h1>Login</h1>
                <Form id="loginForm" onSubmit={this.handleRegister}>
                    <FormGroup row>
                        <Label for="inutNameL" sm="2">Name: </Label>
                        <Col sm="5">
                            <Input id="inputNameL" />
                        </Col>
                    </FormGroup>                    
                    <FormGroup row>
                        <Label for="inutpasswordL" sm="2">Password: </Label>
                        <Col sm="7">
                            <Input type="password" id="inputpasswordL" />
                        </Col>
                    </FormGroup>
                    
                    <Button type="submit">Login</Button>
                </Form>
            </div>
        )
    }
}