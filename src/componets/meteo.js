import React, { Component } from 'react';
import { Container, Card, Spinner } from 'react-bootstrap';


class Meteo extends Component {

    constructor(props){
        super(props);
        this.state = {
            items : [],
            isLoaded : false
        }
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
        
    }
    render(){
        //console.log('gigi : ' + this.state.items['main']); 
        var { isLoaded, items } = this.state;
        if(!isLoaded){
            return(
                <Spinner animation="grow" variant="info" />
            )
        }
        else{
            console.log(items)
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
                            <strong> {items['main']['feels_like']}° </strong>
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
