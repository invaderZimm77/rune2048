import "./App.css";

const gGrid = document.querySelector(".gaming-Grid");
const bWidth = 4;
let gameSquares = [];
let activeScore = 0;

function App() {
  // const leaderBoard;

  const createBoard = () => {
    let gRow = [];
    for (let i = 0; i < bWidth * bWidth; i++) {
      let gSquare = document.createElement("div");
      gRow.push(<div className="game-Square">0</div>);
    }
    return gRow;
  };
  console.log(gameSquares);

  return (
    <div className="App">
      <h1>2048</h1>

      <div class="score-Continer">
        <div class="score-Title">Score:</div>
        <span id="score">{activeScore}</span>
      </div>

      <div class="gaming-Grid">{createBoard()}</div>
      <button>Leaderboards</button>
      <button>How to</button>
    </div>
  );
}

export default App;
