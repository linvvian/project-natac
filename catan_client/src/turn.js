class Turn {
  constructor(player) {
    this.player = player
    this.turnEvents = []
    this.roll
  }


  placeSettlement(settlement){
    if (this.player.settlementCount > 0) {
      //places settlement on an open settlement location
    }
    this.player.points += 1
    //this.gameboard.placeSettlement()
    this.player.settlements.push(settlement)
    this.player.settlementCount -= 1
  }

  placeRoad(road) {
    if (this.player.roadCount > 0) {
      //places road on an open road location
    }
    this.player.roadCount -= 1
    this.player.roads.push(road)
  }

  buyRoad() {
    if (this.player.resources.bricks > 0 && this.player.resources.lumbers > 0) {
      this.player.resources.bricks -= 1
      this.player.resources.lumbers -= 1
      this.player.roadCount += 1
    } else {
      alert("You don't have enough resources to by a road!")
    }
  }

  buySettlement() {
    if (this.player.resources.bricks > 0 && this.player.resources.lumbers > 0 && this.player.resources.wools > 0 && this.player.resources.grains > 0) {
      this.player.resources.bricks -= 1
      this.player.resources.lumbers -= 1
      this.player.resources.wools -= 1
      this.player.resources.grains -= 1
      this.player.settlementCount += 1
    } else {
      alert("You don't have enough resources to by a settlement!")
    }
  }

}
