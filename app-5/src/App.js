import React, { Component } from 'react';
import './App.css';

import Img from './Img'

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
          <Img></Img>
        
          

      </div>
    );
  }
 
}

export default App;
