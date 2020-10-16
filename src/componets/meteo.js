import React, { Component } from 'react';
import { Container, Card } from 'react-bootstrap';


class Meteo extends Component {

    constructor(props){
        super(props);
        this.state = {
            items : [],
            isLoaded : false
        }
        //const key = '45c049b068ec0fe819d536d46ec7f95f';
        //const ApiLink = 'api.openweathermap.org/data/2.5/';
        //const CompleteApiLink = 'http://api.openweathermap.org/data/2.5/weather?q=gallarate&units=metric&appid=45c049b068ec0fe819d536d46ec7f95f';
    }
    componentDidMount() {
        fetch('https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=gallarate&units=metric&appid=45c049b068ec0fe819d536d46ec7f95f')
            .then(res => res.json())
            .then(json => 
                this.setState({
                    isLoaded : true,
                    items : json
                })
            );
        console.log(this.state.items); 
    }
    render(){

        var { isLoaded, items } = this.state;
        if(!isLoaded){
            return(
                <div>Loading ...</div>
            )
        }
        else{
            console.log(items['main'])
            return (
                
                <div className="Meteo">
                    <Container>
                        <Card
                            style={{ width: '15rem'}}
                            border="info"
                            className='big-meteo-card'
                        >
                            <p className='lead'>
                                <strong>{items['name']}</strong>
                            </p>
                            <p className='lead temp'>
                                <strong>{items['main']['temp']}°</strong>
                            </p>
                            <p className='lead pic'>Fell Like : 
                            <strong> 10° </strong>
                            </p>
                            <p className='lead pic'>
                                Min :<strong> {items['main']['temp_min']}° </strong>
                                Max :<strong> {items['main']['temp_max']}° </strong>                        
                            </p>
                        </Card>
                        
                        
                    </Container>
                </div>
              );
        }
        
    }
}

export default Meteo;
