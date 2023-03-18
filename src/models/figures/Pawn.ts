import {Figure, FigureNames} from "./Figure";
import {Colors} from "../Colors";
import {Cell} from "../Cell";
import blackPawn from '../../assets/blackPawn.png'
import whitePawn from '../../assets/whitePawn.png'


export class Pawn extends Figure {
  enPassant: boolean;

  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.name = FigureNames.PAWN;
    this.icon = color === Colors.DARK ? blackPawn : whitePawn;
    this.isFirstStep = true;
    this.enPassant = false;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;
    const direction = this.cell.figure?.color === Colors.DARK ? 1 : -1;
    const firstStepDirection = this.cell.figure?.color === Colors.DARK ? 2 : -2;
    if ((target.y === this.cell.y + direction || (this.isFirstStep && target.y === this.cell.y + firstStepDirection))
      && target.x === this.cell.x
      && this.cell.board.getCell(target.x, target.y).isEmpty()) {
      return true;
    }

    if (target.y === this.cell.y + direction
      && (target.x === this.cell.x + 1 || target.x === this.cell.x - 1)
      && this.cell.isEnemy(target)) {
      return true;
    }

    // en passant

    // if (target.y === this.cell.y + direction
    //   && (target.x === this.cell.x + 1 || target.x === this.cell.x - 1)
    //   && this.cell.board.getCell(target.x, target.y).isEmpty()
    //   && this.cell.board.getCell(target.x, this.cell.y).figure?.name === FigureNames.PAWN
    //   && this.cell.board.getCell(target.x, this.cell.y).figure?.isFirstStep === false) {
    //
    //   this.enPassant = true;
    //   return true;
    // }


    return false;
  }

  moveFigure(target: Cell) {
    super.moveFigure(target);
    if (this.enPassant) {
      this.cell.board.getCell(target.x, this.cell.y).figure = null;
    }
    this.isFirstStep = false;
  }

}
