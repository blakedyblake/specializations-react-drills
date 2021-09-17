import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      list : ["Spagetti","Mushrooms", "Mariokart", "Dark Sun"]
    }
  }
 
  render(){
    //Note this use of map
    let items = this.state.list.map((e,index)=>{
      return <h2 key={index}>{e}</h2> //That's not how return normally works but ok...
    })
    return (
      <div className="App">
          {items}
      </div>
    );
  }
 
}

export default App;
