import React, { Component } from 'react';
import { Container, Card, Spinner, ListGroup } from 'react-bootstrap';


class Time extends Component {

    constructor(props){
        super(props);
        this.state = {
            toWork : [],
            toLove : [],
            isLoadedWork : false,
            isLoadedLove : false
        }
    }
    componentDidMount() {
        const BaseLocation = "Via Mazzini 19 Gallarate Varese";
        const TargetLocation = "Via per Cedrate 388 Cavaria con premezzo";
        const TargetLocation2 = "Via Mottarone 15 Arona Novara";

        const  API_ACCESS_KEY = 'wVdnuFIlVQmmifCVz6BqhpFm4axngMwG';
        const API_Altered_Key = 'Y1mOG4V2qzRgksSGPjWi7KczVIoCnYJf';
        let corsLink = 'https://cors-anywhere.herokuapp.com/';
        let apiUrl = 'http://www.mapquestapi.com/directions/v2/route?';
        
        let paramsWork = `key=${API_ACCESS_KEY}&from=${BaseLocation}&to=${TargetLocation}`;
        let paramsLove = `key=${API_ACCESS_KEY}&from=${BaseLocation}&to=${TargetLocation2}`;
          
        let finalApiURLWork = `${corsLink}${apiUrl}${encodeURI(paramsWork)}`;
        let finalApiURLLove = `${corsLink}${apiUrl}${encodeURI(paramsLove)}`;

        //let linkApi = 'http://www.mapquestapi.com/directions/v2/route?key=wVdnuFIlVQmmifCVz6BqhpFm4axngMwG&from=varese&to=Milano';
        console.log(finalApiURLWork);
        fetch(finalApiURLWork)
            .then(res => res.json())
            .then(json =>
                this.setState({
                    isLoadedWork : true,
                    toWork : json
                })
        );
        fetch(finalApiURLLove)
            .then(res => res.json())
            .then(json =>
                this.setState({
                    isLoadedLove : true,
                    toLove : json
                })
        );
            
        
    }

    render(){
        
        var { isLoadedWork, isLoadedLove, toWork, toLove} = this.state;
        if(toWork !== undefined && isLoadedLove){
            console.log('porco dio');
        }
        if(!isLoadedWork && !isLoadedLove){
            return(
                <Spinner animation="grow" variant="info" />
            )
        }
        else{
            let distanceToWork = 0;
            let distanceToLove = 0;
            let timelove = 0, timework = 0;
            

            if(isLoadedWork){
                console.log('towork funziona')
                timework = toWork['route']['formattedTime']
                distanceToWork = toWork['route']['distance']  ;
                if(isLoadedLove){
                    console.log('tolove funziona')
                    console.log(toLove);
                    distanceToLove = toLove['route']['distance']  ;
                    timelove = toLove['route']['formattedTime'];
                    
                }else{
                    console.log('tolove non funziona')

                }
                
            }
            return (
                <div className="Meteo">
                    <Container>
                        <Card
                            border="info"
                            className='big-meteo-card'
                        >
                            <ListGroup className='listTime'>
                                <ListGroup.Item>
                                    <p className='lead'><strong>To Work</strong>  {distanceToWork}km in {timework}min</p>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <p className='lead'><strong>To Love</strong>  {distanceToLove}km in {timelove}min</p>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                        
                        
                    </Container>
                </div>
              );
        }
        
    }
}

export default Time;
