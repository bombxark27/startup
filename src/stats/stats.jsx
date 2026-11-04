import React from 'react';
import './stats.css';

export function Stats() {
  return (
    <main className="stats-page">
      <h2>Stats</h2>

      <section>
        <table>
          <thead>
            <tr>
              <th>Player</th>
              <th>Team</th>
              <th>Points</th>
              <th>Assists</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Billy</td>
              <td>Team White</td>
              <td>5</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Bob</td>
              <td>Team Black</td>
              <td>3</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Joe</td>
              <td>Team White</td>
              <td>0</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}