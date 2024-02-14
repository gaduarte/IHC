import React, { useState } from "react";
import CadastroCliente from "./cliente";
import CadastroEmpresa from "./empresa";
import './css/style.css';

const CadastrarUsuario = () => {
  const [opcao, setOpcao] = useState("cliente");

  const handleChangeOpcao = (event) => {
    setOpcao(event.target.value);
  };

  return (
    <div className="select-sel">
      <select className="select-op" value={opcao} onChange={handleChangeOpcao}>
        <option value="cliente">Cliente</option>
        <option value="empresa">Empresa</option>
      </select>

      {opcao === "cliente" && <CadastroCliente />}
      {opcao === "empresa" && <CadastroEmpresa />}
    </div>
  );
};

export default CadastrarUsuario;