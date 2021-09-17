import React, { Component } from 'react';
import './App.css';

class Img extends Component{
    constructor(props){
        super(props);
        this.state = {
            url : 'https://www.bing.com/th?id=OIP.jthQDHDYpeC-g3852XKg9AAAAA&w=143&h=160&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2'
        }
        
    }
    render(){
        return(
            <img src={this.state.url} alt="The Quacken"/>
        )
    }

}

export default Img