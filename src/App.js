import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';

import StdCard from './componets/crad'
import Meteo from './componets/meteo'
import Time from './componets/timeGoogle'
import Bitcoin from './componets/bitcoin'
import Calendar from './componets/calndar'
import Quotes from './componets/quotes'
function App() {
  const Bit = <Bitcoin />
  const Mete = <Meteo />
  const Tim = <Time />
  const Cal = <Calendar />
  const Quot = <Quotes />
  return (
    <div className="App">
      <Container>
        <h1>Smart Dashboard</h1>
        <Row>
        <Col>
          <StdCard 
              componente = {Tim}
              />
          </Col>
          <Col>
          </Col>
          <Col>
            <StdCard 
              componente = {Mete}
              />
          </Col>
          
        </Row>
          <Col>
            <StdCard
              componente = {Bit}
            />
          </Col>
        <Col>
            <StdCard
              componente = {Quot}
            />
        </Col>
      </Container>
    </div>
  );
}

export default App;
