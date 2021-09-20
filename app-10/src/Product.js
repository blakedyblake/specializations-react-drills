import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
class Img extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: this.props.id,
            src: this.props.src
        }
    }

    render(){
        return(
            <Link to={`/details/${this.state.id}`}>
                    <img src={this.state.src} alt="pokeImage"></img>
            </Link>
        )
    }
}
class Product extends Component {
    constructor(props){
        super(props)
        this.state = {
            pokeIndex: [],
            detailData:[]
        }
    }

    render(){
        //Axios call
        axios.get('https://pokeapi.co/api/v2/pokemon'
            ).then((response)=>{
                this.setState({
                    pokeIndex: [...response.data.results]
                })
            }).catch(()=>console.log('Issue Reachin PokeIndex'))
        console.log(this.state.pokeIndex.length)
        for(let i = 0; i < this.state.pokeIndex.length; i ++){
            axios.get(this.state.pokeIndex[i].url)
            .then(res=>{
                this.setState({
                    detailData: [...this.state.detailData,res.data]
                })
            })
        }
        let list = this.state.detailData.map((e,i)=>{
            console.log(e)
            return <Img id = {e.id} key = {i} src={e.sprites.front_default}/>
        })
        //Array of Img
        return(
            <div>
                {list}
            </div>
        )
    }
}
export default Product