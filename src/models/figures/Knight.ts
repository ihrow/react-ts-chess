import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackKnight from '../../assets/blackKnight.png'
import whiteKnight from '../../assets/whiteKnight.png'


export class Knight extends Figure {

  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.name = FigureNames.BISHOP;
    this.icon = color === Colors.DARK ? blackKnight : whiteKnight;
  }

}