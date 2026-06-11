Ja. Vervang **heel `App.jsx`** door deze versie. Ik heb de dummy-data eruit gehaald: start = 0 en Top 3/grafiek leeg tot Excel upload. 

```jsx
import React, { useMemo, useState } from "react";
import * as XLSX from "xlsx";

function App() {
  const [rows, setRows] = useState([]);
  const [debugText, setDebugText] = useState("Geen Excel geladen");

  const cleanTaskName = (name) => {
    return String(name || "")
      .replace(/^\s*\d+[\s.-]*/g, "")
      .trim();
  };

  const toNumber = (value) => {
    if (value === null || value === undefined || value === "") return 0;
    if (typeof value === "number") return value;
    return Number(String(value).replace(",", ".")) || 0;
  };

  const findColumn = (row, wanted) => {
    const key = Object.keys(row).find(
      (k) => k.trim().toLowerCase() === wanted.toLowerCase()
    );
    return key ? row[key] : "";
  };

  const handleExcelUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setDebugText("Excel wordt gelezen...");

    const data = await file.arrayBuffer();
    const workbook = XLSX.read(data);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const json = XLSX.utils.sheet_to_json(sheet);

    const parsed = json
      .map((row) => {
        const task = cleanTaskName(findColumn(row, "Task Nitea"));
        const worked = toNumber(findColumn(row, "Hours worked"));
        const planned = toNumber(findColumn(row, "Realisation BC"));
        const difference = toNumber(findColumn(row, "Worked vs Realisation"));

        return {
          task,
          worked,
          planned,
          difference,
        };
      })
      .filter((row) => row.task && row.difference !== 0);

    setRows(parsed);
    setDebugText(`${parsed.length} regels geladen uit ${file.name}`);
  };

  const data = useMemo(() => {
    const normalRowsRaw = rows.filter(
      (r) => r.task.toLowerCase() !== "total"
    );

    const grouped = {};

    normalRowsRaw.forEach((row) => {
      if (!grouped[row.task]) {
        grouped[row.task] = {
          task: row.task,
          worked: 0,
          planned: 0,
          difference: 0,
          percentage: 0,
        };
      }

      grouped[row.task].worked += row.worked;
      grouped[row.task].planned += row.planned;
    });

    const normalRows = Object.values(grouped).map((row) => {
      const difference = row.worked - row.planned;
      const percentage =
        row.planned !== 0 ? (difference / row.planned) * 100 : 0;

      return {
        ...row,
        difference,
        percentage,
      };
    });

    const totalRow = rows.find((r) => r.task.toLowerCase() === "total");

    const totalWorked = totalRow
      ? totalRow.worked
      : normalRows.reduce((sum, r) => sum + r.worked, 0);

    const totalPlanned = totalRow
      ? totalRow.planned
      : normalRows.reduce((sum, r) => sum + r.planned, 0);

    const displayDifference = totalWorked - totalPlanned;

    const realisation =
      totalPlanned > 0 ? (totalWorked / totalPlanned) * 100 : 0;

    const rankedRows = normalRows.filter((r) => r.planned >= 10);

    const good = rankedRows
      .filter((r) => r.percentage < 0)
      .sort((a, b) => a.percentage - b.percentage);

    const bad = rankedRows
      .filter((r) => r.percentage > 0)
      .sort((a, b) => b.percentage - a.percentage);

    const chartData = [...good.slice(0, 5), ...bad.slice(0, 5)];

    return {
      totalWorked,
      totalPlanned,
      displayDifference,
      realisation,
      good,
      bad,
      chartData,
    };
  }, [rows]);

  const hasData = rows.length > 0;

  return (
    <div className="app">
      <div className="poster">
        <h1 className="title">WEEKPRESTATIE</h1>
        <h2 className="week">WEEK 23</h2>

        <div className="buttons">
          <label>
            📊 Excel kiezen
            <input
              type="file"
              accept=".xlsx,.xls"
              onChange={handleExcelUpload}
              style={{ display: "none" }}
            />
          </label>

          <button>📄 PDF downloaden</button>
        </div>

        <div
          style={{
            fontSize: "12px",
            fontWeight: 700,
            color: "#0b376a",
            marginBottom: "8px",
          }}
        >
          {debugText}
        </div>

        <div className="hero">
          <div className="worker-side">
            <div className="speech">Dat ging sneller dan gepland!</div>
            <div className="worker">👨‍💼</div>
          </div>

          <div className="hero-center">
            <div className="hero-text">TEAM WPK HEEFT DEZE WEEK</div>

            <div className="score">
              {hasData ? `${data.displayDifference.toFixed(0)} UUR` : "0 UUR"}
            </div>

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
            <div className="stat-value">
              {hasData ? data.totalPlanned.toFixed(0) : "0"}
            </div>
            <div className="stat-unit">uur</div>
          </div>

          <div className="stat-card">
            <div className="stat-title">WERKELIJK GEWERKT</div>
            <div className="stat-value green">
              {hasData ? data.totalWorked.toFixed(0) : "0"}
            </div>
            <div className="stat-unit">uur</div>
          </div>

          <div className="stat-card">
            <div className="stat-title">VERSCHIL</div>
            <div className="stat-value green">
              {hasData ? data.displayDifference.toFixed(0) : "0"}
            </div>
            <div className="stat-unit">uur</div>
          </div>

          <div className="stat-card">
            <div className="stat-title">REALISATIE</div>
            <div className="stat-value">
              {hasData ? `${data.realisation.toFixed(0)}%` : "0%"}
            </div>
            <div className="stat-unit">t.o.v. norm</div>
          </div>
        </div>

        <div className="top-section">
          <div className="top-box green">
            <h3>TOP 3 PRESTATIES</h3>

            {(hasData ? data.good.slice(0, 3) : []).map((item, index) => (
              <div className="top-item" key={item.task}>
                <span>
                  {["🥇", "🥈", "🥉"][index]} {item.task}
                </span>
                <span>{item.difference.toFixed(0)} uur</span>
              </div>
            ))}
          </div>

          <div className="trophy">🏆</div>

          <div className="top-box red">
            <h3>TOP 3 AANDACHTSPUNTEN</h3>

            {(hasData ? data.bad.slice(0, 3) : []).map((item, index) => (
              <div className="top-item" key={item.task}>
                <span>
                  {index + 1}. {item.task}
                </span>
                <span>+{item.difference.toFixed(0)} uur</span>
              </div>
            ))}
          </div>
        </div>

        <div className="chart-section">
          <h3>
            AFWIJKINGEN T.O.V. NORM <span>(in uren)</span>
          </h3>

          <div
            className="split-chart"
            style={{
              gridTemplateColumns: `repeat(${
                hasData ? data.chartData.length : 10
              }, 1fr)`,
            }}
          >
            {hasData &&
              data.chartData.map((item) => {
                const value = item.percentage;
                const hourValue = item.difference;
                const height = Math.min(Math.abs(hourValue) * 0.75, 120);

                return (
                  <div className="chart-col" key={item.task}>
                    <div className="positive-zone">
                      {value < 0 && (
                        <>
                          <div
                            className="split-bar positive"
                            style={{ height: `${height}px` }}
                          />
                          <span className="bar-value positive-text">
                            {value.toFixed(1)}%
                          </span>
                        </>
                      )}
                    </div>

                    <div className="zero-line"></div>

                    <div className="negative-zone">
                      {value > 0 && (
                        <>
                          <span className="bar-value negative-text">
                            +{value.toFixed(1)}%
                          </span>
                          <div
                            className="split-bar negative"
                            style={{ height: `${height}px` }}
                          />
                        </>
                      )}
                    </div>

                    <div className="split-label">{item.task}</div>
                  </div>
                );
              })}
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
              <div>
                {hasData ? `${data.displayDifference.toFixed(0)} UUR` : "0 UUR"}
              </div>
              <div>VOORSPRONG!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
```
