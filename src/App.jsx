import React from "react";
function App() {
  return (
    <div className="app">
      <div className="poster">

        <h1 className="title">WEEKPRESTATIE</h1>

        <h2 className="week">WEEK 23</h2>

        <div className="buttons">
          <button>📊 Excel kiezen</button>
          <button>📄 PDF downloaden</button>
        </div>

        <div className="hero">

          <div className="worker-side">
            <div className="speech">
              Dat ging sneller dan gepland!
            </div>

            <div className="worker">
              👨‍💼
            </div>
          </div>

          <div className="hero-center">
            <div className="hero-text">
              TEAM WPK HEEFT DEZE WEEK
            </div>

            <div className="score">
              +412 UUR
            </div>

            <div className="hero-text">
              BETER GEPRESTEERD DAN DE NORM!
            </div>
          </div>

          <div className="worker-side">
            <div className="speech">
              Mooi resultaat team!
            </div>

            <div className="worker">
              👩‍💼
            </div>
          </div>

      </div>

<div className="stats-row">
  <div className="stat-card">
    <div className="stat-title">UREN VOLGENS NORM</div>
    <div className="stat-value">3894</div>
    <div className="stat-unit">uur</div>
  </div>

  <div className="stat-card">
    <div className="stat-title">WERKELIJK GEWERKT</div>
    <div className="stat-value green">3482</div>
    <div className="stat-unit">uur</div>
  </div>

  <div className="stat-card">
    <div className="stat-title">VERSCHIL</div>
    <div className="stat-value green">+412</div>
    <div className="stat-unit">uur</div>
  </div>

  <div className="stat-card">
    <div className="stat-title">REALISATIE</div>
    <div className="stat-value">89%</div>
    <div className="stat-unit">t.o.v. norm</div>
  </div>
</div>

</div>

</div>

</div>
  );
}

export default App;
