import "./App.css";
// import axios from "axios";
// import { useState } from "react";
// import GameSquare from "./Components/GameSquare";


const bWidth = 2;
let activeScore = 0;

function App() {
  // const leaderBoard;
  // const [gameSquareValue, setGameSquareValue] = useState(null);
  // const [gameSquarePosition, setGameSquarePosition] = useState(null);
  

  const createBoard = () => {
    let gameSquares = [];
    // let gRow = [];
    // console.log(bWidth*bWidth);
    for (let i = 0; i < bWidth * bWidth; i++) {
      
      gameSquares.push(<div className="game-Square">{i}</div>);

      console.log(i);
    }
    
    return gameSquares;
  };


  return (
    <div className="App">
      <h1>2048</h1>

      <div className="score-Continer">
        <div className="score-Title">Score:</div>
        <span id="score">{activeScore}</span>
      </div>

      <div className="gaming-Grid">{createBoard()}</div>
      <button>Leaderboards</button>
      <button>How to</button>
    </div>
  );
}


export default App;
