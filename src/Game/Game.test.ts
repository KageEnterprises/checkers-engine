/* global beforeEach, describe, expect, it */
import { Game, IGameOptions } from './Game'

describe('Game', () => {
  describe('initialization', () => {
    let game: Game
    let gameOptions: IGameOptions

    beforeEach(() => {
      gameOptions = {
        board: {
          height: 8,
          width: 8
        }
      }
      game = new Game(gameOptions)
    })

    it('should create a list of tiles', () => {
      expect(game.board.tiles.length).toBe(gameOptions.board.height * gameOptions.board.width)
    })
  })
})
