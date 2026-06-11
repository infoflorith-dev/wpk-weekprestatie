import React from "react";

function App() {
  const chartData = [
    ["Potplanten", -76],
    ["WP", -157],
    ["Kool", -174],
    ["Clip/Stiek", -21],
    ["Oppot", -18],
    ["Omrijden", -12],
    ["Machinaal", 7],
    ["Toppen", 18],
    ["Uitzetten", 28],
    ["STNW", 30],
    ["Extra", 48],
    ["Uitvl", 63],
  ];

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
            <div className="speech">Dat ging sneller dan gepland!</div>
            <div className="worker">👨‍💼</div>
          </div>

          <div className="hero-center">
            <div className="hero-text">TEAM WPK HEEFT DEZE WEEK</div>
            <div className="score">+412 UUR</div>
            <div className="hero-text">BETER GEPRESTEERD DAN DE NORM!</div>
          </div>

          <div className="worker-side">
            <div className="speech">Mooi resultaat team!</div>
            <div className="worker">👩‍💼</div>
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
              <span>-157 uur</span>
            </div>
            <div className="top-item">
              <span>🥈 Afleveren Kool</span>
              <span>-174 uur</span>
            </div>
            <div className="top-item">
              <span>🥉 Potplanten</span>
              <span>-76 uur</span>
            </div>
          </div>

          <div className="trophy">🏆</div>

          <div className="top-box red">
            <h3>TOP 3 AANDACHTSPUNTEN</h3>
            <div className="top-item">
              <span>1. STNW Uitvl</span>
              <span>+63 uur</span>
            </div>
            <div className="top-item">
              <span>2. Toppen op Iray</span>
              <span>+18 uur</span>
            </div>
            <div className="top-item">
              <span>3. Stokken Machinaal</span>
              <span>+7 uur</span>
            </div>
          </div>
        </div>

        <div className="chart-section">
          <h3>
            AFWIJKINGEN T.O.V. NORM <span>(in uren)</span>
          </h3>

          <div className="split-chart">
            {chartData.map(([label, value]) => (
              <div className="chart-col" key={label}>
                <div className="positive-zone">
                  {value < 0 && (
                    <>
                      <div
                        className="split-bar positive"
                        style={{ height: `${Math.abs(value) * 0.75}px` }}
                      />
                      <span className="bar-value positive-text">{value}</span>
                    </>
                  )}
                </div>

                <div className="zero-line"></div>

                <div className="negative-zone">
                  {value > 0 && (
                    <>
                      <span className="bar-value negative-text">+{value}</span>
                      <div
                        className="split-bar negative"
                        style={{ height: `${Math.abs(value) * 1.1}px` }}
                      />
                    </>
                  )}
                </div>

                <div className="split-label">{label}</div>
              </div>
            ))}
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
