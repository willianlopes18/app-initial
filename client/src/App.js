import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {

  state = {
    token:''
  }

  componentWillMount(){
    fetch('/user')
    .then((res) => res.text())
    .then(tk => this.setState({token:tk}))
  }

  render() {
    return (
      <div>
        {this.state.token}
      </div>
    );
  }
}

export default App;