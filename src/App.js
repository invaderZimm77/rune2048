import "./App.css";
import axios from "axios";
import { useState } from "react";

const [GameSquareValue, SetGameSquareValue] = useState(null);
const [GameSquarePosition, SetGameSquarePosition] = useState(null);

const bWidth = 4;
let gameSquares = [];
let activeScore = 0;

function App() {
  // const leaderBoard;

  const createBoard = () => {
    // let gRow = [];
    for (let i = 0; i < bWidth + bWidth; i++) {
      
      gameSquares.push(<div className="game-Square">0</div>);
      // gameSquares.push(
      //   // <makeGameSquare className="game-Square">{}</makeGameSquare>
        
      // );
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
const makeGameSquare =({}) =>{
  setGameSquareValue(0);
  
}
export default App;
