import React, {FC} from 'react';
import {Cell} from "../models/Cell";

interface CellComponentProps {
  cell: Cell;
  selected: boolean;
  click: (cell: Cell) => void;
}

const CellComponent: FC<CellComponentProps> = ({cell, selected, click}) => {
  return (
    <div
      className={[
        'cell',
        cell.color, selected ? `selected-${cell.color}` : '',
        cell.available && cell.figure ? 'target' : ""
      ].join(' ')}
      onClick={() => click(cell)}
    >

      <span className={['coordinate-x', cell.color, selected ? `selected-${cell.color}` : ''].join(' ')}>
        {cell.y === 7 ? `${String.fromCharCode(cell.x + 97)}` : null}
      </span>
      <span className={['coordinate-y', cell.color, selected ? `selected-${cell.color}` : ''].join(' ')}>
        {cell.x === 0 ? `${String.fromCharCode(cell.y + 49)}` : null}
      </span>
      {cell.available && !cell.figure && <div className="available"/>}
      {cell.figure?.icon && <img alt={cell.figure.color + ' ' + cell.figure.name} src={cell.figure.icon}/>}
    </div>
  );
};

export default CellComponent;