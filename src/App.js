import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';

import Meteo from './componets/meteo'

function App() {
  return (
    <div className="App">
      <Container>
        <h1>Smart Dashboard</h1>
        <Row>
          <Col>
          </Col>
          <Col>
          </Col>
          <Col>
            <Meteo />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
