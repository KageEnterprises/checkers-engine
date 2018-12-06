import { IGameBoard } from '../Board/Board'

export interface IGameOptions {
  board: {
    height: number,
    width: number
  }
}

export class Game {
  board: IGameBoard

  constructor (options: IGameOptions) {
    const {
      height,
      width
    } = options.board

    this.board = {
      height,
      tiles: [],
      width
    }

    for (let row = 0; row < height; row++) {
      for (let col = 0; col < width; col++) {
        this.board.tiles.push({
          col,
          row,
          id: `c${col}r${row}`,
          tokenId: '',
          valid: col % 2 === row % 2
        })
      }
    }
  }
}
