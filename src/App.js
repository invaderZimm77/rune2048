import "./App.css";
import axios from "axios";
import { useState } from "react";
import MakeGameSquare from "./Components/MakeGameSquare";


const bWidth = 2;
let activeScore = 0;

function App() {
  // const leaderBoard;
  const [gameSquareValue, setGameSquareValue] = useState(null);
  const [gameSquarePosition, setGameSquarePosition] = useState(null);
  

  const createBoard = () => {
    let gameSquares = [];
    // let gRow = [];
    // console.log(bWidth*bWidth);
    for (let i = 0; i < bWidth * bWidth; i++) {
      
      // gameSquares.push(<div className="game-Square">{i}</div>);
      gameSquares.push(<MakeGameSquare gameSquare={gameSquareValue} />);
      // conditional
      console.log(i);
    }
    
    return gameSquares;
  };


  // const generate = () => {
  //   let randomSquare = Math.floor(Math.random() * gameSquares.length);
  //   for (let x = 0; x <= gameSquares.length; x++) {
  //     /* 
  //   if(gameSquares.content == 0 )
  //         put randomly either 2or4 in
  //       break
  //   */
  //     console.log(gameSquares[x]);
  //   }
  // };

  // console.log(gameSquares);

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
