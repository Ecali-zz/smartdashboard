import React, { Component } from 'react';
import { Container, Card } from 'react-bootstrap';


class StdCard extends Component {

    render(){
            return (
                
                <div className="std-card">
                    <Container>
                        <Card
                            className='std-card'
                            border="info"
                            className='big-meteo-card'
                        >
                            {this.props.componente}
                        </Card>
                    </Container>
                </div>
              );
        }
 }

export default StdCard;
