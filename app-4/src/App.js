import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      userName: "",
      userPassword:""
    }
    this.badSecurity = this.badSecurity.bind(this)
  }
 badSecurity(){
   console.log('bad security')
    let {userName, userPassword} = this.state
    alert(`User Name: ${userName}  User Password:${userPassword}`)

 }
  render(){
    //Note this use of map
    
    return (
      <div className="App">
          <fieldset>
            <legend>sign in</legend>
          <input id="userName" placeholder="username" onChange={event=>this.state.userName = event.target.value}/>
          <input id="password" placeholder="password" onChange= {event=> this.state.userPassword = event.target.value}/>
          <button id="login" type='submit' onClick={this.badSecurity}>Log in</button>
          </fieldset>
        
          

      </div>
    );
  }
 
}

export default App;
