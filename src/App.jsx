import React, { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter, NavLink } from 'react-router-dom';
import { Home } from './pages/home';
import CadastrarUsuario from './pages/cadastro';
import './App.css';
import LoginUsuario from './pages/login';
import { Horario } from './pages/empresa/horario';

function App() {
  const [firebaseReady, setFirebaseReady] = useState(false);

  useEffect(() => {
    const checkFirebase = async () => {
      try {
        // Simulando uma operação assíncrona para verificar se o Firebase está pronto
        await new Promise(resolve => setTimeout(resolve, 2000));
        setFirebaseReady(true);
      } catch (error) {
        console.error(error);
      }
    };
    checkFirebase();
  }, []);

  if (!firebaseReady) {
    return <div>Carregando Firebase....</div>;
  }

  return (
    <BrowserRouter>
      <div className='landing-page-frame'>
        <header className='Upper-Menu-Bg'>
          <nav>
            <ul className='Main-Menu-Item'>
              <li><NavLink to='/' className='logo'>Home</NavLink></li>
              <li><NavLink to='/cadastro' className='registro'>Cadastrar-se</NavLink></li>
              <li><NavLink to='/login' className='login'>Login</NavLink></li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cadastro/*' element={<CadastrarUsuario />} />
          <Route path='/login' element={<LoginUsuario />} />
          <Route path='/horarios' element={<Horario/>} />
        </Routes>

        <div className="Rectangle-11"></div>
      </div>
    </BrowserRouter>
  );
}

export default App;

