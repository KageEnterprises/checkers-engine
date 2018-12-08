import { Board, Tile } from '../Board/Board'
import { Token, TokenMaker } from '../Token/Token'

export class Player {
  constructor (
    public id: number,
    public tokens: Array<Token>
  ) {}
}

export class PlayerMaker {
  static create(id: number, initialPositions: Array<number>, board: Board) {
    const tokens: Array<Token> = initialPositions.map((position, index) => {
      const token: Token = TokenMaker.create(id, position, index)
      const tile: Tile | undefined = board.tiles.find(tile => tile.displayId === position)

      if (tile) tile.tokenId = token.id
      else throw new Error('Something went wrong!')

      return token
    })

    return new Player(id, tokens)
  }
}