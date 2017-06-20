class Turn {
  constructor(player) {
    this.player = player
    this.turncount = 0
    this.placeSettlementBtn = //settlement button
    this.placeSettlementBtn.addEventListener()//adds on click event that triggers placeSettlement function
    this.placeRoadBtn = //road button
    this.placeRoadBtn.addEventListener()//adds on click event that triggers placeRoad function
    this.endTurnBtn = //end turn
    this.endTurnBtn.addEventListener()//add on click event that triggers the endTurn function
    this.buyRoadBtn = //buy Road Btn
    this.buyRoadBtn.addEventListener()// lets player buy road if they have the necessary amount of resources -- then decrements the appropriate resources and amounts
    this.buySettlementBtn = //buy settlement Btn
    this.buySettlementBtn.addEventListener()// lets player buy settlements if they have the necessary amount of resources -- then decrements the appropriate resources and amounts
  }


  placeSettlement(){
    if (this.player.settlements > 0) {
      //places settlement on an open settlement location
    }
    this.player.settlements -= 1
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

  endTurn() {
    //ends player turn and goes to next player
      //if (player.id < players.length) {
      // newId = player.id + 1
      // player = Player.find(newId)
      // new Turn(player)
      // } else {
      //   newId = players[0].id
      //   player = Player.find(newId)
      //   new Turn(player)
      // }
  }




}
