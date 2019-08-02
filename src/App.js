import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

import RouterClass from './components/RouterClass'

class App extends Component {
  componentDidMount = () => {
    this.loadData();
  }

  loadData = () => {
    axios.get('http://localhost:5000/user/all').then(res => {
      console.log("got data")
    }).catch(() => console.log("didn't get data"));
  }

  render() {
    return (
      <div className="App" >
        <RouterClass />
      </div>
    );
  }
}

export default App;
