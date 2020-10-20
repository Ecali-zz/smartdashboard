import React, { Component } from 'react'

class Quotes extends Component{

    constructor (props){
        super(props);
        this.state = {
            quote : '',
            auth : ''
        }
        
    }
    componentDidMount(){

        var rndNumber = this.randomInt( 0, 1000) 

        fetch("https://type.fit/api/quotes")
            .then(res => res.json())
            .then(json =>
                this.setState({
                    quote : json[rndNumber]['text'],
                    auth : json[rndNumber]['author']
                })
            );
            this.unknownAuth();
    }
    randomInt(min, max) {
        return min + Math.floor((max - min) * Math.random());
    }
    unknownAuth(){
        if(this.state.auth === null){
            this.setState({
                auth : 'unknown'
            })
        }
    }
    render(){
        
        return(
            <div>
                <h2>{this.state.quote}</h2>
                <h5>- {this.state.auth}</h5>
            </div>
        );
    }

}

export default Quotes;