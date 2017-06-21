class Game {
  constructor() {
    this.turnCount = 1
    this.players = [new Player(), new Player()]
    this.gameboard = new Gameboard()
    this.openSettlements = this.gameboard.settlements
    this.openRoads = this.gameboard.roads
    this.tiles = this.gameboard.tiles
    this.turn

    this.diceRoll = document.querySelector('.roll')

    this.game = document.querySelector('.game')
    this.game.addEventListener('click', this.eventsCheck.bind(this))

    this.renderTurnCount()
  }


  rollDice(){
    let rollOne = Math.floor(Math.random()*6)+1
    let rollTwo =  Math.floor(Math.random()*6)+1
    let roll = (rollOne + rollTwo)
    document.querySelector('.roll').innerHTML = `${roll}`
    this.turn.roll = roll
    if (roll === 7) {
      this.robber()
    } else {
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
    this.renderDice(rollOne, rollTwo)
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
  }

  robber() {
    alert("Oh, no the Robber!")
    this.players.forEach((player) => {
      var resources = player.resources
      var resourceValues = Object.values(resources)
      var resourceKeys = Object.keys(resources)
      var resourceCount = resourceValues.reduce((acc, value) => acc + value)
      if (resourceCount > 7) {
        var removeCount = parseInt(resourceCount / 2)
        while (removeCount > 0) {
          var resource = resourceKeys[Math.floor(Math.random()*resourceKeys.length)]
          if (player.resources[resource] > 0) {
            player.resources[resource] -= 1
            removeCount -= 1
          }
        }
        alert(`The robber stole half of ${player.name}'s resources`)
      }
    })
  }

  renderDice(one, two) {
    let diceRollsArr = [one, two]
    let diceHTML = []
    diceRollsArr.forEach(roll => {
      diceHTML.push(`<img src="src/img/${roll}.png" height="50" width="50"></img> `)
      this.diceRoll.innerHTML = diceHTML.join("")
    })
  }

  addPlayer(i){
    let name = document.querySelector(`#player${i}-name`).value
    if( this.players[i-1] ) {
      this.players[i-1].name = name
    }
    console.log(this.players)
  }

  addResources(i){
    let resources = document.querySelector(`.player${i}-info`)
    let player = this.players[i - 1]
    if (resources.innerHTML === '') {
      resources.innerHTML = player.render()
    } else {
      resources.innerHTML = ''
    }
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
        }} )
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
        case 'player1-resources':
            this.addResources(1)
            break;
        case 'player2-resources':
            this.addResources(2)
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
