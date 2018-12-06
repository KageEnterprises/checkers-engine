export interface IGameBoardTile {
  col: number,
  row: number,
  id: string,
  tokenId: string,
  valid: boolean
}

export interface IGameBoard {
  height: number,
  tiles: Array<IGameBoardTile>,
  width: number
}
