import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackQueen from '../../assets/blackQueen.png'
import whiteQueen from '../../assets/whiteQueen.png'


export class Queen extends Figure {

  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.name = FigureNames.BISHOP;
    this.icon = color === Colors.DARK ? blackQueen : whiteQueen;
  }

}