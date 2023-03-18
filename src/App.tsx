import React, {useState} from 'react';
import "./App.css";
import BoardComponent from "./components/BoardComponent";
import {Board} from "./models/Board";
import {Colors} from "./models/Colors";
import {Player} from "./models/Player";
import LostFigures from "./components/LostFigures";
import Timer from "./components/Timer";

const App = () => {
  const [board, setBoard] = useState<Board>(initBoard());
  const [whitePlayer] = useState<Player>(new Player(Colors.LIGHT));
  const [blackPlayer] = useState<Player>(new Player(Colors.DARK));
  const [currentPlayer, setCurrentPlayer] = useState<Player>(whitePlayer);

  function initBoard()  {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    return newBoard;
  }

  const restart = () => {
    setBoard(initBoard());
  }

  const swapPlayer = () => {
    setCurrentPlayer(currentPlayer?.color === Colors.LIGHT ? blackPlayer : whitePlayer);
  }


  return (
    <div className="app">
      <Timer currentPlayer={currentPlayer} restart={restart} />
        <BoardComponent
          board={board}
          setBoard={setBoard}
          currentPlayer={currentPlayer}
          swapPlayer={swapPlayer}
        />
        <div className="lost-figures">
          <LostFigures title="Black took:" figures={board.lostWhiteFigures} />
          <LostFigures title="White took:" figures={board.lostBlackFigures} />
        </div>
    </div>
  );
};

export default App;