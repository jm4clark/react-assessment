import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
    Col
} from 'reactstrap'

export default class Register extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            email: '',
            warnings: {
                username: '',
                email: '',
                password: '',
                password2:''        
            }
        }

        const headers = {
            'Content-Type': 'application/json'
        };

        this.handleRegister = (e) => {
            e.preventDefault();
            let itemToAdd = {
                username: e.target[0].value,
                email: e.target[1].value,
                password: e.target[2].value,
                password2: e.target[3].value
            }
            console.log(itemToAdd)
            axios
            .post('http://localhost:5000/user/createuser', itemToAdd, { headers: headers})
            .then(res => {
                let s = res.data.Status;
                if(s !== "Account successfully created"){
                    console.log(s);
                    this.setState({
                        warnings: s
                        })
                        
                    
                    this.props.passedFunction()
                }
                console.log(res.data) 
            })
            .catch(err => console.log(err));
        }
    }


    render() {
        return (
            <div style={{paddingLeft: '50px'}}>
                <h1>Register</h1>
                <Form id="registerForm" onSubmit={this.handleRegister}>
                    <FormGroup row>
                        <Label for="inutName" sm="2">Name: </Label>
                        <Col sm="5">
                            <Input id="inputName" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="inutemail" sm="2">Email: </Label>
                        <Col sm="7">
                            <Input id="inputemail" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="inutpassword" sm="2">Password: </Label>
                        <Col sm="7">
                            <Input type="password" id="inputpassword" />{//placeholder={this.state.warnings.password}/>
                            }
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="inutpassconfirm" sm="2">Confirm password: </Label>
                        <Col sm="7">
                            <Input type="password" id="inputpassconfirm" />
                        </Col>
                    </FormGroup>
                    <Button type="submit">Create account</Button>
                </Form>
            </div>
        )
    }
}