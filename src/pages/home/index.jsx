import React from "react";
import { Link, NavLink } from "react-router-dom";
import R from '../empresa/horario/img/R.png';


// Componente para representar informações fictícias de um ônibus
function BusInfo({ name, origin, destination, zone }) {
  return (
    <div className="Rectangle-8">
      <div className="bus-info">
        <div className="bus-name">{name}</div>
        <div className="bus-img">
        <img src={R} alt="onibus" />
        </div>
        <div className="origin-destination">{origin} - {destination} (Zona {zone})</div>
        <div className="route-indicator"></div>
        <Link to='/horarios' className="ver-horarios-button">Ver Horários</Link>
      </div>
    </div>
  );
}

export function Home() {
  // Informações fictícias dos ônibus
  const buses = [
    { name: "Ônibus A", origin: "Local A", destination: "Local B", zone: "A" },
    { name: "Ônibus B", origin: "Local C", destination: "Local D", zone: "B" },
  ];

  return (
    <div className="Rectangle-2">
      <h1>Bem-vindo à nossa aplicação de transporte público!</h1>
      <div className="home-container">
        {buses.map((bus, index) => (
          <BusInfo key={index} {...bus} />
        ))}
      </div>
    </div>
  );
}
