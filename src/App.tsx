import React, {useEffect, useState} from 'react';
import "./App.css";
import BoardComponent from "./components/BoardComponent";
import {Board} from "./models/Board";
import {Colors} from "./models/Colors";
import {Player} from "./models/Player";
import LostFigures from "./components/LostFigures";

const App = () => {
  const [board, setBoard] = useState<Board>(new Board());
  const [whitePlayer] = useState<Player>(new Player(Colors.LIGHT));
  const [blackPlayer] = useState<Player>(new Player(Colors.DARK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  useEffect(() => {
    restart();
    setCurrentPlayer(whitePlayer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const restart = () => {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard)
  }

  const swapPlayer = () => {
    setCurrentPlayer(currentPlayer?.color === Colors.LIGHT ? blackPlayer : whitePlayer);
  }


  return (
    <div className="app">
      <button className="restart" onClick={restart}>Restart</button>
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