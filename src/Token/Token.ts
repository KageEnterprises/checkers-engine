export class Token {
  constructor(
    public id: string,
    public king: boolean,
    public ownerId: number,
    public position: number
  ) {}
}

export class TokenMaker {
  static create(playerId: number, position: number, index: number) {
    return new Token(
      `${playerId}-${index}`,
      false,
      playerId,
      position
    )
  }
}
