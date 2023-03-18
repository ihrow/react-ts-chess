import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackRook from '../../assets/blackRook.png'
import whiteRook from '../../assets/whiteRook.png'


export class Rook extends Figure {

  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.name = FigureNames.ROOK;
    this.icon = color === Colors.DARK ? blackRook : whiteRook;
  }

  canMove(target: Cell): boolean {
    if(!super.canMove(target)) return false;
    if(this.cell.isEmptyVertical(target)) return true;
    if(this.cell.isEmptyHorizontal(target)) return true;
    return false;
  }

}