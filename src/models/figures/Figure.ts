import icon from '../../assets/blackBishop.png'
import {Colors} from "../Colors";
import {Cell} from "../Cell";

export enum FigureNames {
  FIGURE = "Figure",
  KING = "King",
  QUEEN = "Queen",
  BISHOP = "Bishop",
  KNIGHT = "Knight",
  ROOK = "Rook",
  PAWN = "Pawn",
}

export class Figure {
  color: Colors;
  icon: typeof icon | null;
  cell: Cell;
  name: FigureNames;
  id: number;

  constructor(color: Colors, cell: Cell) {
    this.color = color;
    this.cell = cell;
    this.cell.figure = this;
    this.icon = null;
    this.name = FigureNames.FIGURE;
    this.id = Math.random()
  }

  canMove(target: Cell): boolean {
    if(target.figure?.color === this.color) return false;
    if(target.figure?.name === FigureNames.KING) return false;
    return true;
  }

  moveFigure(target: Cell) {}
}



