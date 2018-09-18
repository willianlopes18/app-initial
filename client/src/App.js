import React, { Component } from 'react';
import QRCode from 'qrcode.react';


class App extends Component {
  
  state = {
    tokenUser:''
  }
  
  componentWillMount(){
  
    fetch('/login',{
      method:"POST",
      headers: {'Content-Type':'application/json'},
      body:JSON.stringify(
        {user:{"login":"willian.lopes@hotmail.com","senha":"123"}}
      )
    })
    .then((res) => res.text())
    .then(tk => this.setState({tokenUser:tk}))
  }
  
  render() {
    return (
      <div>
        <div style={{margin:"15%"}}>
         <QRCode value={this.state.tokenUser} />
        </div>
        
      </div>
      );
    }
  }
  
  export default App;