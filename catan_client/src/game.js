class Game {
  constructor() {
    this.turnCount = 1
    this.roll
    this.players = [new Player('#FF0000'), new Player('#0085FF')]
    this.gameboard = new Gameboard()
    this.tileClass = new TileList()
    this.tileClass.renderTiles()
    this.roadClass = new RoadList()
    this.roadClass.renderRoads()
    this.settlementClass = new SettlementList()
    this.settlementClass.renderSettlements()
    this.turn

    this.diceRoll = document.querySelector('.roll')

    this.game = document.querySelector('.game')
    this.game.addEventListener('click', this.eventsCheck.bind(this))

    this.renderTurnCount()
    this.renderPlayer()
    this.playerTurnColor()
  }

  rollDice(){
    if (this.turnCount < 2) {
      alert ("Place your settlements")
    } else if (this.roll) {
      alert ("You already rolled the dice this turn")
    } else {
      let rollOne = Math.floor(Math.random()*6)+1
      let rollTwo =  Math.floor(Math.random()*6)+1
      let roll = (rollOne + rollTwo)
      document.querySelector('.roll').innerHTML = `${roll}`
      this.roll = roll
      this.renderDice(rollOne, rollTwo)
      if (roll === 7) {
        this.robber()
      } else {
        var tilesArr = this.findTileResourceAfterRoll.call(this, roll)
        this.players.forEach(function(player) {
          player.settlements.forEach(function(settlement) {
            for (let i = 0; i < tilesArr.length; i++) {
              let tile = tilesArr[i]
              if (settlement.tiles.includes(tile[1])) {
                player.resources[tile[0]] += 1
              }
            }
          })
          console.log(this.turn, player.resources)
        }, this)
      }

    // this.roll += 1
    }
  }

  findTileResourceAfterRoll(roll) {
    var value = roll.toString()
    var newArr = []
    this.tileClass.tiles.forEach((tile) => {
      if (tile.value === value) {
        newArr.push([tile.resource, tile])
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
    if( this.players[i-1] && name ) {
      this.players[i-1].name = name
    }
    console.log(this.players)
  }

  addResources(i){
    let resources = document.querySelector(`#player${i}-info`)
    $(resources).toggleClass('player-info')
  }

  renderPlayer(){
    let players = this.players
    for (let i = 1; i <= players.length; i++) {
      let player = players[i-1]
      let infoDiv = document.querySelector(`#player${i}-info`)
      infoDiv.innerHTML = player.render()
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
    let index = this.settlementClass.settlements.indexOf(picked)
    delete this.settlementClass.settlements[index]
    this.settlementClass.settlements = this.settlementClass.settlements.filter((e) => {
      return e !== undefined
    })
  }

  // remove claimed settlement and return rest of openSettlements
  claimRoad(picked){
    let index = this.roadClass.roads.indexOf(picked)
    delete this.roadClass.roads[index]
    this.roadClass.roads = this.roadClass.roads.filter((e) => {
      return e !== undefined
    })
  }

  getRoadOrSettlement(event, settlements, roads){
    let chosen = this.getClick(event, settlements, roads)
    if(chosen.className === 'settlement'){
      if (this.turn.placeSettlement(chosen)) {
        this.claimSettlement(chosen)
        this.settlementClass.renderMySettlement(chosen, this.turn.player.color)
      }
    } else if (chosen.className === 'road'){
      if (this.turn.placeRoad(chosen)) {
        this.claimRoad(chosen)
        this.roadClass.renderMyRoad(chosen, this.turn.player.color)
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
        this.renderPlayer()
        break;
      case 'player2-submit':
        this.addPlayer(2)
        this.renderPlayer()
        break;
      case 'player1-resources':
        this.addResources(1)
        this.renderPlayer()
        break;
      case 'player2-resources':
        this.addResources(2)
        this.renderPlayer()
        break;
      case 'rollDice':
        this.rollDice()
        this.renderPlayer()
        break;
      case 'buySettlementBtn':
        turn.buySettlement()
        this.renderPlayer()
        break;
      case 'buyRoadBtn':
        turn.buyRoad()
        this.renderPlayer()
        break;
      case 'endTurnBtn':
        this.endTurn()
        break;
      case 'hexmap':
        this.getRoadOrSettlement.call(this, event, this.settlementClass.settlements, this.roadClass.roads)
        this.renderPlayer()
        break;
      default:
        break;
    }
  }

  winGame() {
    var playerName = null
    this.players.forEach(player => {
      if (player.points >= 3) {
        playerName = player.name
      }
    })
    return playerName
  }

  endTurn() {
    console.log(this)
    this.roll = null
    this.diceRoll.innerHTML = ""
    if (this.winGame() != null) {
      let playerName = this.winGame()
      alert(`${playerName} won the game!!`)
    } else {
      this.turnCount ++
      this.renderTurnCount()
      this.playerTurnColor()
    }
  }

  renderTurnCount(){
    const div = document.querySelector('.turnCount-container')
    div.innerHTML = `<h2>Turn: ${this.turnCount}</h2>`
  }

  playerTurnColor(){
    let player1Div = document.querySelector('#player1-tag')
    let player2Div = document.querySelector('#player2-tag')

    if (this.turnCount % 2 === 1){
      player2Div.style.background = "none"
      player1Div.style.background = "#FF0000"
    } else {
      player1Div.style.background = "none"
      player2Div.style.background = "#0085FF"
    }
  }
}
