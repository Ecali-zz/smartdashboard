import React, { Component } from 'react';
import { Container, Card } from 'react-bootstrap';


class StdCard extends Component {

    constructor(props){
        super(props);
        this.classN = 'std-card';
    }

    setClass(){
        
        if(this.props.min === 'true'){
            this.classN = this.classN + ' min-card';
        }
    }

    render(){
        this.setClass();
            return (
                <div className="">
                        <Card
                            className={this.classN}
                            border="info"
                        >
                            {this.props.componente}
                        </Card>
                </div>
              );
        }
 }

export default StdCard;
