
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
              <h1>DiscTrack</h1>
            </div>

            <menu className="navbar-nav flex-row gap-4">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/gamecast">
                  Gamecast
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/stats">
                  Stats
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
            </menu>
          </nav>
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