import React, {Component} from 'react';
import './App.css';
import axios from 'axios' //Huh you actually need this in react

class App extends Component{
  constructor(props){
    super(props);
    this.state={

      obj : {}
    }
  }

  //This function is wierd ...
  axiosSet(){
    axios.get("https://pokeapi.co/api/v2/pokemon/pikachu").then((response=>{
      this.setState({
        obj: response.data
      })
    }))
  }


  render(){
    this.axiosSet()
    return(
      <div>
        {/* It won't read arrays within an object. */}
        <h1>Name: {this.state.obj.name}</h1> 
        <h1>Height: {this.state.obj.height}</h1>
        <h1>Id: {this.state.obj.id}</h1>
        <h1>Weight: {this.state.obj.weight}</h1>
      </div>
    )
  }
}

export default App;
