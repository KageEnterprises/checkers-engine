/* global beforeEach, describe, expect, it */
import { Game } from './Game'

describe('Game', () => {
  describe('initialization', () => {
    let testGame: Game

    beforeEach(() => { testGame = new Game() })

    it('should have a true `game` prop', () => {
      expect(testGame.game).toBe(true)
    })
  })
})
