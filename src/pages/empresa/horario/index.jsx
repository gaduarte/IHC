import React from "react";
import { Card, CardBody, Row, Col } from 'react-bootstrap';
import R from './img/R.png';
import { Link } from "react-router-dom";

function generateRandomTime() {
  const hours = Math.floor(Math.random() * 20);
  const minutes = Math.floor(Math.random() * 60);
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}

export function Horario() {
  const randomTimes = [];

  for (let i = 0; i < 5; i++) {
    randomTimes.push(generateRandomTime());
  }

  return (
    <div>
      <h2>Horários Disponíveis:</h2>
      <Card className="getninjas-card">
        <CardBody>
          <Row className="getninjas-row">
            <Col md={3}>
              <strong className="getninjas-strong">Ônibus A </strong>
            </Col>
            <Col>
                <img src={R} alt="onibus" className="getninjas-img" />
            </Col>
            <Row>
            <Col md={12}>
            <ul className="getninjas-ul">
            <select name="horario" id="horario" className="getninjas-select">
                <option value="">Selecione um horário</option>
                {randomTimes.map((time, index) => (
                <option key={index} value={time}>{time}</option>
                ))}
            </select>
            </ul>
            </Col>
          </Row>
          </Row>
          <Row>
            <Col md={9}>
              <p className="getninjas-p">Local de Origem: Zona A</p>
              <p className="getninjas-p">Local do Destino: Zona B</p>
            </Col>
          </Row>
          <Link to='/'>Voltar</Link>
        </CardBody>
      </Card>
    </div>
  );
}

