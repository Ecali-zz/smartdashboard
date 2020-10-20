import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

class Bitcoin extends Component{
    constructor(props){
        super(props);
        this.state = {
            value : '',
            isLoaded : false
        }
        this.currency  = 'EUR';
        this.corsLink = 'https://cors-anywhere.herokuapp.com/';
        this.API_LINK = 'https://api.nomics.com/v1/currencies/ticker?';
        this.id = 'BTC';
        this.API_KEY = '069a7c9630bfed5a67d4ed49c724b18b';
        this.params = `key=${this.API_KEY}&ids=${this.id}&convert=${this.currency}`;
        this.finalApiURL = `${this.corsLink}${this.API_LINK}${encodeURI(this.params)}`;
        this.apicall = this.apicall.bind(this);
    }
    componentDidMount(){
        /*let corsLink = 'https://cors-anywhere.herokuapp.com/';
        const API_LINK = 'https://api.nomics.com/v1/currencies/ticker?';
        const id = 'BTC';
        const currency = 'EUR';
        const API_KEY = '069a7c9630bfed5a67d4ed49c724b18b';
        const params = `key=${API_KEY}&ids=${id}&convert=${currency}`;
        const finalApiURL = `${corsLink}${API_LINK}${encodeURI(params)}`;*/
        this.apicall();
        
    }
    apicall(){
        var link = this.finalApiURL;
        fetch(link)
        .then(res => res.json())
        .then(json =>
            this.setState({
                value : json,
                isLoaded : true
            })
    );
    }
    render(){
        var value= 0;
        var min, sec;
        var today = new Date();
        if(today.getMinutes() < 10){
            min = ("0" + today.getMinutes()).slice(-2);
        }else{
            min = today.getMinutes();
        }
        if(today.getSeconds() < 10){
            sec = ("0" + today.getSeconds()).slice(-2);
        }else{
            sec = today.getSeconds();
        }
        var timeStamp = 0;

        if(this.state.isLoaded){
            value = parseFloat(this.state.value[0]['price']).toFixed(2);
            timeStamp = today.getHours() + ':' + min + ':' + sec;
            return(
                <div>
                <h3>valore {this.state.value[0]['symbol']}</h3>
                <h5>{value} {this.currency}</h5>
                <p className='lead'>At time {timeStamp}</p>
                <Button
                    onClick= {this.apicall} 
                >
                    aggiorna
                </Button>
            </div>
            );
        }else{
            return(
                <h5>is loading ... </h5>
            );
        }
        
    }
}
export default Bitcoin;