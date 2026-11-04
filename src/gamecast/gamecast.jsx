import React from 'react';
import './gamecast.css';

export function Gamecast() {
  return (
    <main className="gamecast-page">
      <h2>Gamecast</h2>

      {/* Game information */}
      <section>
        <h3>Team White vs Team Black</h3>
        <p>Location: Provo, UT</p>
        <p>Game Status: In Progress</p>
      </section>

      <hr />

      {/* Live Game Updates */}
      <section>
        <h3>Live Game Updates</h3>
        <ul>
          <li>Team White scored! Score is now 6-7.</li>
          <li>Joe recorded an assist.</li>
          <li>Team Black gained possession.</li>
        </ul>
      </section>

      <hr />

      {/* Game Field */}
      <section>
        <h3>Game Field</h3>

        <table className="game-field">
          <tbody>
            <tr>
              <th rowSpan="5">End Zone</th>
              <td></td>
              <td></td>
              <td></td>
              <th rowSpan="5">End Zone</th>
            </tr>
            <tr>
              <td>●</td>
              <td></td>
              <td>●</td>
            </tr>
            <tr>
              <td></td>
              <td>○</td>
              <td></td>
            </tr>
            <tr>
              <td>●</td>
              <td></td>
              <td>●</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </section>

      <hr />

      {/* Score */}
      <section>
        <h3>Score</h3>
        <p>Team White: <strong>6</strong></p>
        <p>Team Black: <strong>7</strong></p>
      </section>

      {/* Game controls */}
      <section>
        <h3>Game Controls</h3>
        <button type="button">Team White Scores</button>
        <button type="button">Team Black Scores</button>
        <button type="button">Record Turnover</button>
        <button type="button">Advance Game</button>
      </section>

      <hr />

      {/* Weather */}
      <section>
        <h3>Game Weather</h3>
        <p>Temperature: --°F</p>
        <p>Conditions: --</p>
        <p>Wind: -- mph</p>
        <p>Precipitation: --%</p>
      </section>
    </main>
  );
}
