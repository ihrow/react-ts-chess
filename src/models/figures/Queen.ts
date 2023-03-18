import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackQueen from '../../assets/blackQueen.png'
import whiteQueen from '../../assets/whiteQueen.png'


export class Queen extends Figure {

  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.name = FigureNames.QUEEN;
    this.icon = color === Colors.DARK ? blackQueen : whiteQueen;
  }

  canMove(target: Cell): boolean {
    if(!super.canMove(target)) return false;
    if(this.cell.isEmptyVertical(target)) return true;
    if(this.cell.isEmptyHorizontal(target)) return true;
    if(this.cell.isEmptyDiagonal(target)) return true;
    return false;
  }

}