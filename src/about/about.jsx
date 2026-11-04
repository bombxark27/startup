import React from 'react';
import './about.css';

export function About() {
  return (
    <main className="container-fluid bg-secondary text-center">
      <div id="picture" class="picture-box text-center">
        <img
          class="img-fluid rounded"
          src="ultimateFrisbeeArt.jpg"
          alt="Ultimate frisbee illustration"
        />
      </div>

      <hr />

      <div class="row justify-content-center">
        <div class="col-12 col-lg-10">
          <p>
            DiscTrack is a web application designed to make tracking ultimate frisbee games easier.
            Players can create or join games, keep track of scores and individual statistics, and see game updates in real time.
            The app also provides weather information for the game location, including temperature, conditions, and wind.
          </p>

          <p>
            Whether you're playing a casual pickup game or a competitive match, DiscTrack keeps the important information
            in one place so players can focus more on the game and less on keeping track of the details.
          </p>
        </div>
      </div>
    </main>
  );
}