import React,{Component} from "react";
import AuthService from './components/AuthService';
import withAuth from './components/WithAuth';
import Dashboard from './templates/Dashboard/Dashboard';
const Auth = new AuthService();

class App extends Component{
  
  handleLogout(){
    Auth.logout()
    this.props.history.replace('/login');
  }

  render(){
    return(
      <Dashboard />
    );
  }
}

export default withAuth(App);