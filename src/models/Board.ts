import {Cell} from "./Cell";
import {Colors} from "./Colors";
import {Pawn} from "./figures/Pawn";
import {Rook} from "./figures/Rook";
import {King} from "./figures/King";
import {Bishop} from "./figures/Bishop";
import {Knight} from "./figures/Knight";
import {Queen} from "./figures/Queen";
import {Figure} from "./figures/Figure";

export class Board {
  cells: Cell[][] = [];
  lostBlackFigures: Figure[] = [];
  lostWhiteFigures: Figure[] = [];

  public initCells() {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < 8; j++) {
        if((i + j) % 2 !== 0) {
          row.push(new Cell(this, j, i, Colors.DARK, null))
        } else {
          row.push(new Cell(this, j, i, Colors.LIGHT, null))
        }
      }
      this.cells.push(row);
    }
  }

  public getCell(x: number, y: number) {
    return this.cells[y][x];
  }

  public addFigures() {
    this.addPawns();
    this.addKings();
    this.addRooks();
    this.addQueens();
    this.addBishops();
    this.addKnights();
  }

  private addPawns() {
    for (let i = 0; i < 8; i++) {
      new Pawn(Colors.DARK, this.getCell(i, 1));
      new Pawn(Colors.LIGHT, this.getCell(i, 6));
    }
  }

  private addRooks() {
    new Rook(Colors.DARK, this.getCell(0, 0));
    new Rook(Colors.DARK, this.getCell(7, 0));

    new Rook(Colors.LIGHT, this.getCell(0, 7));
    new Rook(Colors.LIGHT, this.getCell(7, 7));
  }

  private addKings() {
    new King(Colors.DARK, this.getCell(4, 0));
    new King(Colors.LIGHT, this.getCell(4, 7));
  }

  private addBishops() {
    new Bishop(Colors.DARK, this.getCell(2, 0));
    new Bishop(Colors.DARK, this.getCell(5, 0));

    new Bishop(Colors.LIGHT, this.getCell(2, 7));
    new Bishop(Colors.LIGHT, this.getCell(5, 7));
  }

  private addKnights() {
    new Knight(Colors.DARK, this.getCell(1, 0));
    new Knight(Colors.DARK, this.getCell(6, 0));

    new Knight(Colors.LIGHT, this.getCell(1, 7));
    new Knight(Colors.LIGHT, this.getCell(6, 7));
  }

  private addQueens() {
    new Queen(Colors.DARK, this.getCell(3, 0));
    new Queen(Colors.LIGHT, this.getCell(3, 7));
  }

  public highlightCells(selectedCell: Cell | null) {
    for (let i = 0; i < this.cells.length; i++) {
      const row = this.cells[i];
      for (let j = 0; j < row.length; j++) {
        const target = row[j];
        target.available = !!selectedCell?.figure?.canMove(target)
      }
    }
  }

  public getCopyBoard(): Board {
    const newBoard = new Board();
    newBoard.cells = this.cells;
    newBoard.lostBlackFigures = this.lostBlackFigures;
    newBoard.lostWhiteFigures = this.lostWhiteFigures;
    return newBoard;
  }
}