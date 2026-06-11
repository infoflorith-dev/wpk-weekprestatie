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
          <div className="worker">👨‍🌾</div>

          <div className="hero-center">
            <p>TEAM WPK HEEFT DEZE WEEK</p>

            <div className="score">
              +412 UUR
            </div>

            <p>BETER GEPRESTEERD DAN DE NORM</p>
          </div>

          <div className="worker">👩‍🌾</div>
        </div>

      </div>
    </div>
  );
}

export default App;
