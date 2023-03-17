import React, {FC, useState} from 'react';
import {Board} from "../models/Board";
import CellComponent from "./CellComponent";
import {Cell} from "../models/Cell";

interface BoardComponentProps {
  board: Board;
  setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardComponentProps> = ({board, setBoard}) => {
  const [selectedCell, setSelectedCell]  = useState<Cell | null>(null);

  const click = (cell: Cell): void => {
    setSelectedCell(cell)
  }

  return (
    <div className="board">
      {board.cells.map((row, index) =>
        <React.Fragment key={index}>
          {row.map(cell =>
            <CellComponent
              key={cell.id}
              cell={cell}
              selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
              click={click}
            />
          )}
        </React.Fragment>
      )}
    </div>
  );
};

export default BoardComponent;