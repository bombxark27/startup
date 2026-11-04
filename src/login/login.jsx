import React from 'react';
import './login.css';

export function Login() {
  return (
    <main className="container-fluid bg-secondary text-center">
      <h2>Welcome to DiscTrack</h2>
      <form method="get" action="gamecast.html">
        <div>
          <span>@</span>
          <input type="text" placeholder="your@email.com" />
        </div>
        <div>
          <span>🔒</span>
          <input type="password" placeholder="password" />
        </div>
        <button type="submit">Login</button>
        <button type="submit">Create</button>
      </form>
    </main>
  );
}