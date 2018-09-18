import React, { Component } from 'react';
import QRCode from 'qrcode.react';
import './App.css';

class App extends Component {

  state = {
    token:''
  }

  componentWillMount(){
    fetch('/login')
    .then((res) => res.text())
    .then(tk => this.setState({token:tk}))
  }

  render() {
    return (
      <div>
        <QRCode value={this.state.token} />
      </div>
    );
  }
}

export default App;