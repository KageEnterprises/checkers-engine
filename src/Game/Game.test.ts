/* global beforeEach, describe, expect, it */
import { Game, GameMaker, IGameOptions } from './Game'
import { GAME_TYPES } from './GameConstants'

describe('Game', () => {
  describe('initialization', () => {
    let game: Game
    let gameOptions: IGameOptions

    beforeEach(() => {
      gameOptions = GAME_TYPES[0].gameOptions
      game = GameMaker.create(gameOptions)
    })

    it('should create a list of tiles', () => {
      expect(game.board.tiles.length).toBe(gameOptions.board.height * gameOptions.board.width)
    })

    it('should create a list of tokens for each player', () => {
      game.players.forEach(player => expect(player.tokens.length).toBe(12))
    })
  })
})
