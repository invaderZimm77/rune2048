import "./App.css";
import axios from "axios";
import { useState } from "react";


const bWidth = 4;
let activeScore = 0;

function App() {
  // const leaderBoard;
  const [GameSquareValue, SetGameSquareValue] = useState(null);
  const [GameSquarePosition, SetGameSquarePosition] = useState(null);

  
  const createBoard = () => {
    let gameSquares = [];
    // let gRow = [];
    console.log(bWidth*bWidth);
    for (let i = 0; i < bWidth * bWidth; i++) {
      
      // gameSquares.push(<div className="game-Square">{i}</div>);
      gameSquares.push(<MakeGameSquare className="game-Square">{"passItSelf"}</MakeGameSquare>);
      console.log(i);
    }
    
    return gameSquares;
  };
  const MakeGameSquare =(squaresNum, {props} ) => {

    props.setGameSquareValue(0);
    props.setGameSquarePosition={squaresNum}; 
    return(props);
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


export default App;
