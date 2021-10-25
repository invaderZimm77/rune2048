import "./App.css";

function App() {
  let activeScore = 0;
  // const leaderBoard;

  return (
    <div className="App">
      <h1>2048</h1>
      
      <div class="score-Continer">
        <div class="score-Title">Score:</div>
        <span id="score">{activeScore}</span>
      </div>

      <div class="gamingGrid">

      </div>
    </div>
  );
}

export default App;
