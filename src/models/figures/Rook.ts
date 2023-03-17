import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackRook from '../../assets/blackRook.png'
import whiteRook from '../../assets/whiteRook.png'


export class Rook extends Figure {

  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.name = FigureNames.BISHOP;
    this.icon = color === Colors.DARK ? blackRook : whiteRook;
  }

}