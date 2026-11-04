import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <div className="body">
      <header className="container-fluid">
        <nav className="navbar navbar-dark">
          <div className="navbar-brand">
            DiscTrack<sup>&reg;</sup>
          </div>
          <menu className="navbar-nav flex-row gap-4">
            <li className="nav-item">
              <a className="nav-link" href="index.html">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="gamecast.html">
                Gamecast
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="stats.html">
                Stats
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about.html">
                About
              </a>
            </li>
          </menu>
        </nav>
      </header>

      <main>App components go here</main>

      <footer>
        <div className="container-fluid d-flex justify-content-between">
            <span className="text-reset">Shan Leung-Choi</span>
            <a className="text-reset" href="https://github.com/bombxark27/startup">
                Source
            </a>
        </div>
      </footer>
    </div>
  );
}