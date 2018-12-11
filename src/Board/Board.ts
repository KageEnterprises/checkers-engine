export class Board {
  constructor(
    public height: number,
    public tiles: Array<Tile>,
    public width: number
  ) {}
}

export class BoardMaker {
  static create(height: number, width: number) {
    const tiles = []

    for (let row = 0, displayId = 1; row < height; row++) {
      for (let col = width - 1; col >= 0; col--) {
        let valid = col % 2 === row % 2
        tiles.push(TileMaker.create(row, col, valid ? displayId : false, valid))
        if (valid) displayId++
      }
    }

    return new Board(height, tiles, width)
  }
}

export class Tile {
  constructor(
    public col: number,
    public displayId: number | false,
    public positionId: string,
    public row: number,
    public tokenId: string,
    public valid: boolean
  ) {}
}

export class TileMaker {
  static create(row: number, col: number, displayId: number | false, valid: boolean) {
    return new Tile(col, displayId, `c${col}r${row}`, row, '', valid)
  }
}
