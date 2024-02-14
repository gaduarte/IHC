import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { CadastroProvider } from './pages/cadastro/cliente/cadastro_cliente.jsx';
import { CadastroEmpresaProvider } from './pages/cadastro/empresa/cadatro_empresa.jsx';

ReactDOM.render(
  <React.StrictMode>
    <CadastroProvider>
      <CadastroEmpresaProvider>
        <App />
      </CadastroEmpresaProvider>
    </CadastroProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
