import { IGameOptions } from './Game'

export interface IGameType {
  displayName: string,
  gameOptions: IGameOptions,
  type: string
}
export const GAME_TYPES: Array<IGameType> = [
  {
    displayName: 'Regular Checkers',
    gameOptions: {
      board: {
        height: 8,
        width: 8
      },
      initialPositions: [
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        [32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21]
      ]
    },
    type: 'regular'
  }
]
