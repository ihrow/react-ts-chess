import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackPawn from '../../assets/blackPawn.png'
import whitePawn from '../../assets/whitePawn.png'


export class Pawn extends Figure {

  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.name = FigureNames.BISHOP;
    this.icon = color === Colors.DARK ? blackPawn : whitePawn;
  }

}