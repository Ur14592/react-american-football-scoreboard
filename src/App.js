//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeTD, htd] = useState(0);
  // console.log("this is TD", useState(1));

  const [homeFG, hfg] = useState(0);
  // console.log("this is FG", useState(3));
  const [awayTD, atd] = useState(0);
  // console.log("this is TD", useState(1));

  const [awayFG, afg] = useState(0);
  // console.log("this is FG", useState(3));



  return (
    <div className="container">
      <section className="scoreboard">

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
        <div className="topRow">

          <div className="home">
            <h2 className="home__name">Raiders</h2>
            <div className="home__score">
            <span>{homeTD + homeFG}</span>
              </div>
          </div>


          <div className="timer">00:03</div>



          <div className="away">
            <h2 className="away__name">49ERS</h2>
            <div className="away__score">
            <span>{awayTD + awayFG}</span>
              </div>
          </div>

        </div>


        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={() => htd(homeTD + 7)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={() => hfg(homeFG + 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={() => atd(awayTD + 7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={() => afg(awayFG + 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
          
        </div>
        
        
      </section>
    </div>
  );
}

export default App;
