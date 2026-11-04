import React from 'react';
import './gamecast.css';

export function Gamecast() {
  return (
    <main className="container-fluid bg-secondary text-center">
      <h2>Gamecast</h2>

        {/* <!-- Game information --> */}
        <section>
            <h3>Team White vs Team Black</h3>
            <p>Location: Provo, UT</p>
            <p>Game Status: In Progress</p>
        </section>

        <hr />

        {/* <!-- Live Game Updates --> */}
        <section>
            <h3>Live Game Updates</h3>

            <ul>
                <li>Team White scored! Score is now 6-7.</li>
                <li>Joe recorded an assist.</li>
                <li>Team Black gained possession.</li>
            </ul>
        </section>

        <hr />
        {/* <!-- Game Field --> */}
        <section>
            <h3>Game Field</h3>

            <table border="1">
                <tr>
                    <th rowspan="5">End Zone</th>

                    <td></td>
                    <td></td>
                    <td></td>

                    <th rowspan="5">End Zone</th>
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
            </table>
        </section>

        <hr />

        {/* <!-- Score --> */}
        <section>
            <h3>Score</h3>

            <p>
                Team White:
                <strong>6</strong>
            </p>

            <p>
                Team Black:
                <strong>7</strong>
            </p>
        </section>

        {/* <!-- Game controls --> */}
        <section>
            <h3>Game Controls</h3>

            <button>Team White Scores</button>
            <button>Team Black Scores</button>
            <button>Record Turnover</button>
            <button>Advance Game</button>
        </section>

        <hr />

        {/* <!-- Weather --> */}
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