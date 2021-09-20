import React, {Component} from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import router from './router'










class App extends Component {
  constructor(props){
    super(props);

  }
  render(){
    return(
      <div>
        <Link to="/">Home</Link><br/>
        <Link to="/details">Details</Link><br/>
        <Link to='/signup'>Sign Up</Link><br/>

        <br/><br/>

        {router}
      </div>
    )
  }
}

export default App;
