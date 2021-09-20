import React, { Component } from 'react';
import './App.css';
class Todo extends Component {
  render(){
    return <p>{this.props.task}</p>
  }
}//This is the same...

class List extends Component{
  constructor(props){
    super(props)
  }
  render(){
    //arr props makes the list
    let list = this.props.arr.map((e,i)=> {return <Todo key={i} task={e}/>})
    return(
      <div>{list}</div>
    )
  }
}
class NewTask extends Component{
  constructor(props){
    super(props);
    this.state = {
      userInput:""
    }
    this.add= this.add.bind(this) //
    this.changeVal = this.changeVal.bind(this)
  }
  add(){
    this.props.add(this.state.userInput)//This links it, sending info to App allowing List to access it
    this.setState({
      // arr: [...this.state.arr, this.state.userInput],
      userInput: "",

  })
  }
  changeVal(val){
    this.setState({
      userInput: val
    })
  }
  render(){
    return (
            <fieldset>
              <legend>Add a task</legend>
              <input value={this.state.userInput} placeholder="New Task" id="input" onChange= {event=> this.changeVal(event.target.value)}></input>
              <button onClick= {this.add}>Add</button>
            </fieldset>
    )
  }
}

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
          list:[]
        }        
        this.add = this.add.bind(this)
    }
    add(task){
      this.setState({list: [...this.state.list, task]})
    }
    render(){

        return(
          <div className="App">
            <h1>My to-do List:</h1>
            <NewTask add={this.add}/>
            <br/>
            <List arr={this.state.list}></List>
            

          </div>
        )
    }

}

export default App