class Turn {
  constructor(player) {
    this.player = player
    this.turnEvents = []
  }


  placeSettlement(){
    if (this.player.countSettlements() > 0) {
      //places settlement on an open settlement location
    }
    this.player.points += 1
    //this.gameboard.placeSettlement()
    this.player.settlements.push(settlement)
    // this.player.settlements -= 1
  }

  placeRoad() {
    if (this.player.countRoads() > 0) {
      //places road on an open road location
    }
    this.player.roads.push(road)
  }

  buyRoad() {
    if (this.player.resources.bricks > 0 && this.player.resources.lumbers > 0) {
      this.player.addRoad(new Road())
      this.player.resources.bricks -= 1
      this.player.resources.lumbers -= 1
    } else {
      alert("You don't have enough resources to by a road!")
    }
  }

  buySettlement() {
    if (this.player.resources.bricks > 0 && this.player.resources.lumbers > 0 && this.player.resources.wools > 0 && this.player.resources.grains > 0) {
      this.player.addSettlement(new Settlement())
      this.player.resources.bricks -= 1
      this.player.resources.lumbers -= 1
      this.player.resources.wools -= 1
      this.player.resources.grains -= 1
    } else {
      alert("You don't have enough resources to by a settlement!")
    }
  }

}
