import React, { Component } from 'react';
import '../App.css';

import Login from './Login'
import Register from './Register'

export default class LoginAndRegister extends Component{
    constructor(props){
        super(props);

        this.state = {};
    }

    render() {
        return(
            <div>
              <div className="split left">
                <Register data={this.props.data} passedFunction={this.props.passedFunction}/>
              </div>
              <div className="split right">
                <Login passedLogin={this.props.passedLogin} passedFunction={this.props.passedFunction}/>
              </div>
            </div>
        )
    }
}