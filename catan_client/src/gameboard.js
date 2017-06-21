class Gameboard {
  constructor(){
    this.t = new Tile()
    this.tiles = this.t.tiles
    this.s = new Settlement(this.tiles)
    this.settlements = this.s.settlements
  }
}
