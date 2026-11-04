
import React from 'react';
import './login.css';

export function Login() {
  return (
    <main className="auth-layout">
      <h1>Welcome to DiscTrack</h1>

      <form method="get" action="/gamecast">
        <div>
          <span>@</span>
          <input
            type="email"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <span>🔒</span>
          <input
            type="password"
            placeholder="password"
          />
        </div>

        <button type="submit">Login</button>
        <button type="submit">Create</button>
      </form>
    </main>
  );
}
