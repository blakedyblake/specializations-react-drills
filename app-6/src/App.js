import React, { Component } from 'react';
import './App.css';
class Todo extends Component {
  render(){
    return <p>{this.props.task}</p>
  }
}
class App extends Component{
    constructor(props){
        super(props);
        this.state = {
          userInput:"",
          list:[]
        }
        this.append =this.append.bind(this)
        this.changeVal = this.changeVal.bind(this)
        
    }
    append(){
      // document.getElementById("input").innerText = " " //This isn't resetting the value for some reason ... it should
      // let {userInput,list} = this.state
      // list.push(userInput)
      // console.log(list)
      this.setState({ //couldn't just update the list automatically...
        //How to reset the input??

        list: [...this.state.list, this.state.userInput],
        userInput: ""
      })
      
      
    }

    changeVal(val){
      this.setState({
        userInput: val
      })
    }

    render(){
      let list = this.state.list.map((e,i)=>{
        return <p key={i} >{e}</p>
      })

        return(
          <div className="App">
            <h1>My to-do List:</h1>
            <fieldset>
              <legend>Add a task</legend>
              <input value={this.state.userInput} placeholder="New Task" id="input" onChange= {event=> this.changeVal(event.target.value)}></input>
              <button onClick= {this.append}>Add</button>
            </fieldset>
            <br/>
            <div id = "list">
              {list}
            </div>
            

          </div>
        )
    }

}

export default App