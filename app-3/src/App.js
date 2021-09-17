import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      list : ["Spagetti","Mushrooms", "Mariokart", "Dark Sun"],
      userInput:"",
      items: []
    }
    this.update = this.update.bind(this)
  }
 update(val){
        this.setState({userInput: val})
    }
 
  render(){
    //Note this use of map
    let list = this.state.list.filter((e,i)=>{ //This includes it but not just if it starts with it
      return e.includes(this.state.userInput)
    }).map((e,i)=>{
      return <h2 key= {i}>{e}</h2>
    })   
    return (
      <div className="App">
        <input id="filter" onChange={event=>this.update(event.target.value)} />
          <div id='list'>
              {list}
          </div>
      </div>
    );
  }
 
}

export default App;
