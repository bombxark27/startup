
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
        
    <header className="site-header">
    <div className="header-content">
        <h1>DiscTrack</h1>

        <nav>
        <menu>
            <li>
            <NavLink to="/">Home</NavLink>
            </li>
            <li>
            <NavLink to="/gamecast">Gamecast</NavLink>
            </li>
            <li>
            <NavLink to="/stats">Stats</NavLink>
            </li>
            <li>
            <NavLink to="/about">About</NavLink>
            </li>
        </menu>
        </nav>
    </div>
    </header>


        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/gamecast" element={<Gamecast />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <footer>
          <div className="container-fluid">
            <span>Shan Leung-Choi</span>
            <div>
              <a href="https://github.com/bombxark27/startup">
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <main>
      <h1>404: Return to sender. Address unknown.</h1>
    </main>
  );
}