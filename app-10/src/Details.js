import React, {Component} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
class Details extends Component{
    constructor(props){
        super(props)
        this.state = {
            url: '',
            name:'',
            weight:null,
            id: this.props.match.params.id
        }
    }

    render(){
        axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.id}`).then((res)=>{
            this.setState({
                url: res.data.sprites.front_default,
                name: res.data.name,
                weight:res.data.weight
            })
        })
        return (
            <div>
                <img alt ='pokemon' src={this.state.url}></img>
                <h3>Name: {this.state.name}</h3>
                <h3>Weight: {this.state.weight}</h3>
                <h3>ID: {this.state.id}</h3>
                <Link to='/'>Back to Main</Link>
            </div>
        )
    }
}

export default Details;