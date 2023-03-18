import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackBishop from '../../assets/blackBishop.png'
import whiteBishop from '../../assets/whiteBishop.png'


export class Bishop extends Figure {

  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.name = FigureNames.BISHOP;
    this.icon = color === Colors.DARK ? blackBishop : whiteBishop;
  }

  canMove(target: Cell): boolean {
    if(!super.canMove(target)) return false;
    if(this.cell.isEmptyDiagonal(target)) return true;
    return false;
  }
}
