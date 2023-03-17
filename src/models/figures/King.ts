import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackKing from '../../assets/blackKing.png'
import whiteKing from '../../assets/whiteKing.png'


export class King extends Figure {

  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.name = FigureNames.BISHOP;
    this.icon = color === Colors.DARK ? blackKing : whiteKing;
  }

}
