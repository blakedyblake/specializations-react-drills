import React,{Component} from 'react';
import './App.css';

export default class App extends Component{
  constructor(props){
    super(props)
      this.state = {
        userInput: ""
      
    }
    this.update = this.update.bind(this)
  }
  update(event){

    //It wants me to use setState... but I don't wanna
      this.state.userInput = event.target.value
      document.getElementById('result').innerText = this.state.userInput;

  }
  render(){
      return (
        <div className="App">
            <input onChange={event=>this.update(event)}/>
            <span id="result"></span>
        </div>
      )
  }
}