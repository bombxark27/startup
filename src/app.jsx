import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Gamecast } from './gamecast/gamecast';
import { Stats } from './stats/stats';
import { About } from './about/about';

export default function App() {
  return (
    <BrowserRouter>
    <div className="body">
      <header className="container-fluid">
        <nav className="navbar navbar-dark">
          <div className="navbar-brand">
            DiscTrack<sup>&reg;</sup>
          </div>
          <menu className="navbar-nav flex-row gap-4">
            <li className="nav-item">
              <NavLink className='nav-link' to=''>Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className='nav-link' to='gamecast'>Gamecast</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className='nav-link' to='stats'>Stats</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className='nav-link' to='about'>About</NavLink>
            </li>
          </menu>
        </nav>
      </header>

      <Routes>
        <Route path='/' element={<Login />} exact />
        <Route path='/gamecast' element={<Gamecast />} />
        <Route path='/stats' element={<Stats />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <footer>
        <div className="container-fluid d-flex justify-content-between">
            <span className="text-reset">Shan Leung-Choi</span>
            <a className="text-reset" href="https://github.com/bombxark27/startup">
                Source
            </a>
        </div>
      </footer>
    </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}