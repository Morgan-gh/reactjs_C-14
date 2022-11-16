/* Import ReactJs */
import React from "react";
import AthleteAPI from "../../Services/AthleteAPI";

/* Import style */
import "./Home.css";

export default function Home() {
  return (
    <main className="homeSection">
      <div className="cercleBackground"></div>

      <div class="image">
        <img src="./ressource/marina.jpg" />
        <div class="text">
          <h1>MotiVote</h1>
        </div>
      </div>

      <div className="choice">
        <div className="circle">
          <div className="circleContent">
            <h2>DISCIPLINES</h2>
          </div>
        </div>
        <div className="circle">
          <div className="circleContent">
            <h2>DÉLÉGATIONS</h2>
          </div>
        </div>
      </div>

      <h3>TOP 3 DES ATHLÈTE LES PLUS VOTÉS</h3>

      <div className="podium">
        <div className="podium1"></div>
        <div className="podium2">  </div>
        <div className="podium3"></div>
      </div>
    </main>
  );
}
