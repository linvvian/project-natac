class Game {
  constructor() {
    this.turnCount = 1
    this.players = []
    this.gameboard = new Gameboard()
    this.openSettlements = this.gameboard.settlements
    this.openRoads = this.gameboard.roads
    this.turn

    this.game = document.querySelector('.game')
    this.game.addEventListener('click', this.eventsCheck.bind(this))

    this.renderTurnCount()
  }

  rollDice(){
    let roll = Math.floor(Math.random()*6)+1 + Math.floor(Math.random()*6)+1
    document.querySelector('.roll').innerHTML = `${roll}`
    this.turn.roll = roll
    var tile = this.findTileResourceAfterRoll.call(this, roll)
    this.players.forEach(function(player) {
      player.settlements.forEach(function(settlement) {
        if (settlement.tiles.includes(tile[1])) {
          player.resources[tile[0]] += 1
        }
      })
      console.log(this.turn, player.resources)
    }, this)
  }

  findTileResourceAfterRoll(roll){
    var value = roll.toString()
    var newArr
    this.gameboard.tiles.forEach((tile) => {
      if (tile.value === value) {
        newArr = [tile.resource, tile]
      }
    })
    return newArr
    // this.gameboard.settlements.forEach(function(settlement){
    //   settlement.tiles.forEach(function(tile) {
        // console.log(tile) //this is currently undefined
    //     if (tile.value === `${roll}`) {
    //       return [tile.resource, tile]
    //     }
    //   })
    // })
  }

  addPlayer(i){
    let name = document.querySelector(`#player${i}-name`).value
    if( this.players[i-1] ) {
      this.players[i-1].name = name
    } else {
      this.players[i-1] = new Player(name)
    }
    console.log(this.players)
  }

  getClick(event, settlements, roads){
    let picked
    // gets hexmap element and sets the dimension borders of clicked element
    let elem = document.getElementById('hexmap'),
        elemLeft = elem.offsetLeft,
        elemTop = elem.offsetTop
    // gets the coordinates of mouse when click event
    let x = event.pageX - elemLeft,
        y = event.pageY - elemTop;

    // iterates through all open settlements to check click and retrieves the object element clicked on
    if (!picked) {
      settlements.forEach(function(element) {
        if (y > element.top && y < element.top + element.height
        && x > element.left && x < element.left + element.width) {
          picked = element
        }})
    }
    if (!picked) {
      roads.forEach(function(element) {
        if (y > element.top && y < element.top + element.height
        && x > element.left && x < element.left + element.width) {
          picked = element
        }})
    }

    return picked
  }

  // remove claimed settlement and return rest of openSettlements
  claimSettlement(picked){
    let index = this.openSettlements.indexOf(picked)
    delete this.openSettlements[index]
    this.openSettlements = this.openSettlements.filter((e) => {
      return e !== undefined
    })
  }

  // remove claimed settlement and return rest of openSettlements
  claimRoad(picked){
    let index = this.openRoads.indexOf(picked)
    delete this.openRoads[index]
    this.openRoads = this.openRoads.filter((e) => {
      return e !== undefined
    })
  }

  getRoadOrSettlement(event, settlements, roads){
    let chosen = this.getClick(event, settlements, roads)
    if(chosen.className === 'settlement'){
      if (this.turn.placeSettlement(chosen)) {
        this.claimSettlement(chosen)
      }
    } else if (chosen.className === 'road'){
      if (this.turn.placeRoad(chosen)) {
        this.claimRoad(chosen)
      }
    }
    console.log(chosen)
  }

  currentPlayer(){
    if (this.turnCount % 2 === 1){
      return this.players[0]
    } else {
      return this.players[1]
    }
  }

  startTurn(){
    let player = this.currentPlayer()
    this.turn = new Turn(player)
    return this.turn
  }

  eventsCheck(){
    event.preventDefault()
    let player = this.currentPlayer()
    let turn = this.startTurn()
    let target = event.target.id

    // get resource
    switch (target) {
      case 'player1-submit':
        this.addPlayer(1)
        break;
      case 'player2-submit':
        this.addPlayer(2)
        break;
      case 'rollDice':
        this.rollDice()
        break;
        break;
      case 'buySettlementBtn':
        turn.buySettlement()
        break;
      case 'buyRoadBtn':
        turn.buyRoad()
        break;
      case 'endTurnBtn':
        this.endTurn()
        break;
      case 'hexmap':
        this.getRoadOrSettlement.call(this, event, this.openSettlements, this.openRoads)
      default:
        break;
    }
  }

  endTurn() {
    this.turnCount ++
    this.renderTurnCount()
    // check if player won
    // game over
    // else continue
  }

  renderTurnCount(){
    const div = document.querySelector('.turnCount-container')
    div.innerHTML = `<h2>Turn: ${this.turnCount}</h2>`
  }
}

const game = new Game()
