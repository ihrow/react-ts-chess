import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackKnight from '../../assets/blackKnight.png'
import whiteKnight from '../../assets/whiteKnight.png'


export class Knight extends Figure {

  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.name = FigureNames.KNIGHT;
    this.icon = color === Colors.DARK ? blackKnight : whiteKnight;
  }

  canMove(target: Cell): boolean {
    if(!super.canMove(target)) return false;
    const dx = Math.abs(this.cell.x - target.x);
    const dy = Math.abs(this.cell.y - target.y);

    return ((dx === 1 && dy === 2) || (dx === 2 && dy === 1))
  }
}