import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'

import RouterClass from './components/RouterClass'

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      user: ''
    }
  }

  componentDidMount = () => {
    this.loadData();
  }

  loadData = () => {
    axios.get('http://localhost:5000/user/all').then(res => {
      console.log("current user: " + this.state.user);
      this.setState({
        data: res.data,
        user: this.state.user
      })

    }).catch((err) => console.log("didn't get data" + err));
  }

  login = (userLogin) => {
    console.log("login function called!");
    console.log("logging in as " + userLogin.username);
    axios
      .get(`http://localhost:5000/user/name/${userLogin.username}/${userLogin.password}`)
      .then(res => {
        if (res.data.Status === "Logged In") {
          console.log(res.data.Status)

          this.setState({
            user: userLogin.username
          })
        } else if (res.data.Status === "Not Logged In"){
            console.log("not logged in")
        }
      })
      .catch(err => console.log(err));
  }

  render() {

    return (
      <div>
        <RouterClass data={this.state.data} user={this.state.user} passedFunction={this.loadData} passedLogin={this.login} />
      </div>
    );
  }
}

export default App;
