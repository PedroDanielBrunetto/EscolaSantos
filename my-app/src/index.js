import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import logo from './images/logo.png';
import menu from './images/menu_white_36dp.svg';
import close from './images/close_white_36dp.svg';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <header>
      <nav className='nav-bar'>
        <div className='logo'>
          <img src={logo} alt="Logo da Empresa"/>
        </div>

        <div class="nav-list">
          <ul>
              <li className='nav-item'><a href='#' className='nav-link'>Início</a></li>
              <li className='nav-item'><a href='#' className='nav-link'>Sobre</a></li>
              <li className='nav-item'><a href='#' className='nav-link'>Contato</a></li>
          </ul>
        </div>

        <div class="login-button">
          <button><a href='#'>Área do aluno</a></button>
          <button><a href='#'>Área do professor</a></button>
        </div>

        <div className='mobile-menu-icon'>
          <button id='menuButton' onClick={menuShow}><img src={menu} alt="menu"/></button>
        </div>
      </nav>

      <div className='mobile-menu'>
        <ul>
            <li className='nav-item'><a href='#' className='nav-link'>Início</a></li>
            <li className='nav-item'><a href='#' className='nav-link'>Sobre</a></li>
            <li className='nav-item'><a href='#' className='nav-link'>Contato</a></li>
        </ul>

        <div className='login-button'>
          <button><a href='#'>Área do aluno</a></button>
          <button><a href='#'>Área do professor</a></button>
        </div>
      </div>

    </header>
  </React.StrictMode>
);

function menuShow(){
  let menuMobile = document.querySelector('.mobile-menu');
  let menuButton = document.querySelector('#menuButton img');
  
  if (menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open');
    menuButton.src = menu;
  } else {
    menuMobile.classList.add('open');
    menuButton.src = close;
  }
}

//<img src={logo} alt="Logo da Empresa"/>
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
