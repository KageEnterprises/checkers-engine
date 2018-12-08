import { BoardMaker, Board } from '../Board/Board'
import { Player, PlayerMaker } from '../Player/Player'
import { GAME_TYPES } from './GameConstants';

export interface IGameOptions {
  board: {
    height: number,
    width: number
  },
  initialPositions: [
    Array<number>,
    Array<number>
  ]
}

export class Game {
  constructor(
    public board: Board,
    public players: Array<Player>,
    public displayName?: string,
    public type?: string
  ) {}
}

export class GameMaker {
  static create(input: number | IGameOptions) {
    if (typeof input === 'number' && input >= GAME_TYPES.length) throw new Error('Invalid game type')

    const options: IGameOptions = typeof input === 'number'
      ? GAME_TYPES[input].gameOptions
      : input

    const {
      height,
      width
    } = options.board

    // Initialize board
    const board = BoardMaker.create(height, width)

    // Set other Game Type options
    let displayName
    let type
    if (typeof input === 'number') {
      displayName = GAME_TYPES[input].displayName
      type = GAME_TYPES[input].type
    }

    // Set up players
    const players = [
      PlayerMaker.create(0, options.initialPositions[0], board),
      PlayerMaker.create(1, options.initialPositions[1], board)
    ]

    return new Game(board, players, displayName, type)
  }
}
