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

<div className="top-section">

  <div className="top-box green">
    <h3>TOP 3 PRESTATIES</h3>

    <div className="top-item">
      <span>🥇 Afleveren WP</span>
      <span>+157 uur</span>
    </div>

    <div className="top-item">
      <span>🥈 Afleveren Kool</span>
      <span>+174 uur</span>
    </div>

    <div className="top-item">
      <span>🥉 Potplanten</span>
      <span>+76 uur</span>
    </div>
  </div>

  <div className="trophy">
    🏆
  </div>

  <div className="top-box red">
    <h3>TOP 3 AANDACHTSPUNTEN</h3>

    <div className="top-item">
      <span>1. STNW Uitvl</span>
      <span>-63 uur</span>
    </div>

    <div className="top-item">
      <span>2. Toppen op Iray</span>
      <span>-18 uur</span>
    </div>

    <div className="top-item">
      <span>3. Stokken Machinaal</span>
      <span>-7 uur</span>
    </div>
  </div>

</div>

<div className="chart-section">
  <h3>AFWIJKINGEN T.O.V. NORM <span>(in uren)</span></h3>

  <div className="bar-chart">
    <div className="bar positive" style={{ height: "76px" }}><span>+76</span></div>
    <div className="bar positive" style={{ height: "120px" }}><span>+157</span></div>
    <div className="bar positive" style={{ height: "132px" }}><span>+174</span></div>
    <div className="bar positive" style={{ height: "36px" }}><span>+21</span></div>
    <div className="bar positive" style={{ height: "32px" }}><span>+18</span></div>
    <div className="bar positive" style={{ height: "26px" }}><span>+12</span></div>

    <div className="bar negative" style={{ height: "20px" }}><span>-7</span></div>
    <div className="bar negative" style={{ height: "34px" }}><span>-18</span></div>
    <div className="bar negative" style={{ height: "54px" }}><span>-28</span></div>
    <div className="bar negative" style={{ height: "60px" }}><span>-30</span></div>
    <div className="bar negative" style={{ height: "82px" }}><span>-48</span></div>
    <div className="bar negative" style={{ height: "100px" }}><span>-63</span></div>
  </div>

  <div className="chart-labels">
    <span>Potplanten</span>
    <span>WP</span>
    <span>Kool</span>
    <span>Clip/Stiek</span>
    <span>Oppot</span>
    <span>Omrijden</span>
    <span>Machinaal</span>
    <span>Toppen</span>
    <span>Uitzetten</span>
    <span>STNW</span>
    <span>Extra</span>
    <span>Uitvl</span>
  </div>
</div>
<div className="road-section">
  <h2 className="road-title">SAMEN OP WEG NAAR TOPRESULTATEN!</h2>

  <div className="road-track">
    <div className="road-sign">
      🏁
      <div>NORM</div>
    </div>

<div className="tractor">
  🚜 🌱 🌱 🌱
  <span>TEAM WPK →</span>
</div>

  <div className="road-result">
  <div>+412 UUR</div>
  <div>VOORSPRONG!</div>
</div>
  </div>
</div>
</div>

</div>
  );
}

export default App;
