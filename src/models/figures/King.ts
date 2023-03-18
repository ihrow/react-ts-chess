import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackKing from '../../assets/blackKing.png'
import whiteKing from '../../assets/whiteKing.png'


export class King extends Figure {

  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.name = FigureNames.KING;
    this.icon = color === Colors.DARK ? blackKing : whiteKing;
  }

  canMove(target: Cell): boolean {
    if(!super.canMove(target)) return false;
    const dx = Math.abs(this.cell.x - target.x);
    const dy = Math.abs(this.cell.y - target.y);

    return (dx === 1 && dy === 1) || (dx === 1 && dy === 0) || (dx === 0 && dy === 1)
  }

}
