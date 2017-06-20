class Turn {
  constructor(player) {
    this.player = player
    this.turnEvents = []
  }


  placeSettlement(){
    if (this.player.settlements > 0) {
      //places settlement on an open settlement location
    }
    this.player.points += 1
    this.player.settlement.push(settlement)
    // this.player.settlements -= 1
  }

  placeRoad() {
    if (this.player.roads > 0) {
      //places road on an open road location
    }
    this.player.roads -= 1
  }

  buyRoad() {
    if (this.player.bricks > 0 && this.player.lumbers > 0) {
      this.player.roads += 1
      this.player.bricks -= 1
      this.player.lumbers -= 1
    } else {
      alert("You don't have enough resources to by a road!")
    }
  }

  buySettlement() {
    if (this.player.bricks > 0 && this.player.lumbers > 0 && this.player.wools > 0 && this.player.grains > 0) {
      this.player.settlements += 1
      this.player.bricks -= 1
      this.player.lumbers -= 1
      this.player.wools -= 1
      this.player.grains -= 1
    } else {
      alert("You don't have enough resources to by a settlement!")
    }
  }

}
