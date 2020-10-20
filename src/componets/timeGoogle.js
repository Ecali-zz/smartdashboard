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
        //const API_Altered_Key = 'Y1mOG4V2qzRgksSGPjWi7KczVIoCnYJf';
        let corsLink = 'https://cors-anywhere.herokuapp.com/';
        let apiUrl = 'http://www.mapquestapi.com/directions/v2/route?';
        
        let paramsWork = `key=${API_ACCESS_KEY}&from=${BaseLocation}&to=${TargetLocation}`;
        let paramsLove = `key=${API_ACCESS_KEY}&from=${BaseLocation}&to=${TargetLocation2}`;
          
        let finalApiURLWork = `${corsLink}${apiUrl}${encodeURI(paramsWork)}`;
        let finalApiURLLove = `${corsLink}${apiUrl}${encodeURI(paramsLove)}`;



        //let linkApi = 'http://www.mapquestapi.com/directions/v2/route?key=wVdnuFIlVQmmifCVz6BqhpFm4axngMwG&from=varese&to=Milano';
        
        if(localStorage.getItem('isLoadedW') === null){
            console.log('Call API');
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
        }else{
            console.log('USE LOCAL STORAGE');

        }
        
    }

    setLocalStorage(){
        localStorage.setItem('timeToWork', this.state.toWork['route']['formattedTime']);  
        localStorage.setItem('distToWork', this.state.toWork['route']['distance']);  
        localStorage.setItem('timeToLove', this.state.toLove['route']['formattedTime']);  
        localStorage.setItem('distToLove', this.state.toLove['route']['distance']);
        localStorage.setItem('isLoadedW' , this.state.isLoadedWork);
        localStorage.setItem('isLoadedL' ,  this.state.isLoadedLove);
    }

    render(){
        
        var { isLoadedWork, isLoadedLove, toWork, toLove} = this.state;
        var loadedW = false;
        var loadedL = false;

        if(localStorage.getItem('isLoadedW') && localStorage.getItem('isLoadedL')){
            loadedL = localStorage.getItem('isLoadedL');
            loadedW = localStorage.getItem('isLoadedW');
        }else{
            loadedL = isLoadedLove;
            loadedW = isLoadedWork;
        }
        
        
        if(!loadedL && !loadedW){
            return(
                <Spinner animation="grow" variant="info" />
            )
        }
        else{
            let distanceToWork = 0;
            let distanceToLove = 0;
            let timelove = 0, timework = 0;
            
            if(localStorage.getItem('timeToWork') != null){
                timework = localStorage.getItem('timeToWork');
                timelove = localStorage.getItem('timeToLove');
                distanceToLove = localStorage.getItem('distToLove');
                distanceToWork = localStorage.getItem('distToWork');
            } else if(isLoadedWork){
                timework = toWork['route']['formattedTime'];
                distanceToWork = toWork['route']['distance'];
                if(isLoadedLove){
                    distanceToLove = toLove['route']['distance'];
                    timelove = toLove['route']['formattedTime'];
                    this.setLocalStorage();
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
