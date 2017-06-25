class Game {
  constructor() {
    this.turnCount = 1
    this.roll
    this.adapter = new ApiAdapter()
    this.players = [new Player('#FF0000', 'Player 1'), new Player('#0085FF', 'Player 2')]
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

  numberOfPlayers(){
    return this.players.length
  }

  rollDice(){
    if (this.turnCount < this.numberOfPlayers()*2-1) {
      alert ("Place your settlements/roads")
    } else if (this.currentPlayer().settlementCount !== 0 || this.currentPlayer().roadCount !== 0) {
      alert("Place your settlements/roads")
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
        this.increaseResource(roll)
      }
    }
  }

  findTileResourceAfterRoll(roll) {
    var newArr = []
    this.tileClass.tiles.forEach((tile) => {
      if (tile.value === roll) {
        newArr.push([tile.resource, tile])
      }
    })
    return newArr
  }

  increaseResource(roll){
    var tilesArr = this.findTileResourceAfterRoll.call(this, roll)
    this.players.forEach(function(player) {
      player.settlements.forEach(function(settlement) {
        for (let i = 0; i < tilesArr.length; i++) {
          let tile = tilesArr[i]
          settlement.tiles_id.forEach(function(e) {
            if (e === tile[1].id) {
              player.procureResource(tile[0])
              if (settlement.className === 'city') {
                player.procureResource(tile[0])
                console.log('citah')
              }
            }
          })
        }
      })
      console.log(this.turn, player.resources)
    }, this)
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
    if (this.turnCount ===1) {
      let color
      if (this.numberOfPlayers() === 2) {
        color = '#FF9900'
      } else {
        color = '#9600FF'
      }
      let name = document.querySelector(`#player${i}-name`).value
      if( this.players[i-1] && name ) {
        this.players[i-1].name = name
      } else {
        let p = new Player(color, name)
        this.players.push(p)
        p.appendPlayerCorner(i)
      }
    }
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
    if (!picked) {
      this.turn.player.settlements.forEach(function(element) {
        if (y > element.top && y < element.top + element.height
        && x > element.left && x < element.left + element.width) {
          picked = element
        }
      })
    }

    return picked
  }

  buildCity(chosen){
    let result = false
    this.turn.player.settlements.forEach((settlement) => {
      if(settlement === chosen){
        result = true
      }
    })
    return result
  }

  settlementPosition(chosen){
    let result1 = true
    let result2 = false
    let settlementsIDs = []
    let roadIDs = this.turn.player.roads.map(road => road.id)
    this.players.forEach((player) => {
      player.settlements.forEach((settlement) => {
        settlementsIDs.push(settlement.id)
      })
    })

    chosen.roads.forEach(function(road){
      road.settlements_id.forEach((id) => {
        if ($.inArray(id, settlementsIDs) !== -1) {
          result1 = false
        }
      })
      if (this.turnCount > this.numberOfPlayers()*2-1) {
        if ($.inArray(road.id, roadIDs) !== -1) {
          result2 = true
        }
      } else {
        result2 = true
      }
    }, this)

    if (result1 && result2) {
      return true
    } else {
      return false
    }
  }

  roadPosition(chosen){
    let result = false
    let playerSetIDs = this.turn.player.settlements.map(set => { return set.id })
    let playerRdIDs = this.turn.player.roads.map(rd => { return rd.id })
    chosen.settlements.forEach((settle) => {
      if ($.inArray(settle.id, playerSetIDs) !== -1) {
        result = true
      } else {
        settle.roads_id.forEach((id) => {
          if ($.inArray(id, playerRdIDs) !== -1) {
            console.log(id, playerRdIDs)
            result = true
          }
        })
      }
    })
    return result
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
      if (this.settlementPosition(chosen) && this.turn.placeSettlement(chosen)) {
        this.claimSettlement(chosen)
        this.settlementClass.renderMySettlement(chosen, this.turn.player.color)
      } else if (this.buildCity(chosen) && this.turn.placeCity(chosen)) {
        this.settlementClass.renderCity(chosen, this.turn.player.color)
        this.turn.player.cityCount -= 1
        this.turn.player.points += 1
      }
    } else if (chosen.className === 'road'){
      if (this.roadPosition(chosen) && this.turn.placeRoad(chosen)) {
        this.claimRoad(chosen)
        this.roadClass.renderMyRoad(chosen, this.turn.player.color)
      }
    }
    console.log(chosen)
  }

  currentPlayer(){
    if (this.turnCount % this.numberOfPlayers() === 1){
      this.nextPlayer = this.players[1]
        return this.players[0]
    } else if (this.turnCount % this.numberOfPlayers() === 2){
      this.nextPlayer = this.players[2]
        return this.players[1]
    } else if (this.turnCount % this.numberOfPlayers() === 3){
      this.nextPlayer = this.players[3]
        return this.players[2]
    } else {
      this.nextPlayer = this.players[0]
        return this.players[this.numberOfPlayers()-1]
    }
  }

  startGameSetup(){
    if (this.turnCount < this.numberOfPlayers()*2 && this.currentPlayer().settlementCount === 0) {
      if (this.currentPlayer().countSettlements() === 0){
        this.currentPlayer().settlementCount += 1
        this.currentPlayer().roadCount += 1
        if (this.turnCount === this.numberOfPlayers()){
          this.currentPlayer().settlementCount += 1
          this.currentPlayer().roadCount += 1
        }
      } else if (this.turnCount > this.numberOfPlayers() && this.currentPlayer().countSettlements() === 1){
        this.currentPlayer().settlementCount += 1
        this.currentPlayer().roadCount += 1
      }
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
    let target = event.target.id
    let turn = this.startTurn()
    this.startGameSetup()

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
      case 'player3-submit':
        this.addPlayer(3)
        this.renderPlayer()
        break;
      case 'player3-resources':
        this.addResources(3)
        this.renderPlayer()
        break;
      case 'player4-submit':
        this.addPlayer(4)
        this.renderPlayer()
        break;
      case 'player4-resources':
        this.addResources(4)
        this.renderPlayer()
        break;
      case 'player1-tradeBtn':
        this.tradeWith(1)
        break;
      case 'player2-tradeBtn':
        this.tradeWith(2)
        break;
      case 'player3-tradeBtn':
        this.tradeWith(3)
        break;
      case 'player4-tradeBtn':
        this.tradeWith(4)
        break;
      case 'tradeBtn':
        this.initiateTrade()
        break;
      case 'submitTradeBtn':
        this.submitTrade()
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
      case 'buyCityBtn':
        turn.buyCity()
        this.renderPlayer()
        break;
      case 'endTurnBtn':
        this.endTurn(player)
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
      if (player.points >= 5) {
        playerName = player.name
      }
    })
    return playerName
  }

  endTurn(player) {
    this.warnPlaceSettlementRoads()
    if (this.roll === null && this.turnCount > this.numberOfPlayers()*2-1) {
      alert("Roll first")
    } else {
      this.saveState(this)
      if (this.winGame() != null) {
        let playerName = this.winGame()
        alert(`${playerName} won the game!!`)
      } else {
        this.turnCount ++
        this.renderTurnCount()
        this.playerTurnColor()
      }
    }
    this.roll = null
    this.diceRoll.innerHTML = ""
  }

  warnPlaceSettlementRoads(){
    if (this.turn.player.settlementCount !== 0 || this.turn.player.roadCount !== 0) {
      if (this.turnCount < this.numberOfPlayers()*2) {
        if (this.currentPlayer().countSettlements() < 1 || this.currentPlayer().countRoads() < 1){
          alert("Place your first settlement/road")
        } else {
          alert("Place your second settlement/road")
        }
      } else {
        alert("Place your settlements/roads")
      }
    }
  }

  saveState(gameStateObj) {
    if (gameStateObj.turnCount === 1) {
      this.adapter.saveTilesState(gameStateObj)
    } else if (gameStateObj.turnCount === gameStateObj.players.length) {
      this.adapter.saveGame(this)
    } else if (gameStateObj.turnCount > gameStateObj.players.length) {
      this.adapter.updateGame(this)
    }
  }

  renderTurnCount(){
    let player
    if (this.turnCount === 1) {
      player = this.currentPlayer()
    } else {
      player = this.nextPlayer
    }
    const div = document.querySelector('.turnCount-container')
    div.innerHTML = `<h2>${player.name}'s Turn</h2>`.fontcolor(`${player.color}`)
  }

  playerTurnColor(){
    this.players.forEach((player, index) => {
      if (player === this.currentPlayer()) {
        let playerDiv = document.querySelector(`#player${index+1}-tag`)
        playerDiv.style.background = player.color
      } else {
        let playerDiv = document.querySelector(`#player${index+1}-tag`)
        playerDiv.style.background = "none"
      }
    }, this)
  }

  submitTrade(){
    let indexTrader = this.players.indexOf(this.trader)
    let indexTradee = this.players.indexOf(this.tradee)
    let traderResource = document.querySelector(`#player${indexTrader+1}-tradeR`).value
    let tradeeResource = document.querySelector(`#player${indexTradee+1}-tradeR`).value

    if (this.trader) {
      this.trader.resources[traderResource] -= 1
      this.tradee.resources[tradeeResource] -= 1
      this.tradee.resources[traderResource] += 1
      this.trader.resources[tradeeResource] += 1
      this.renderPlayer()
    }

    document.querySelector(`#player${indexTrader+1}-tradeR`).style.visibility = 'hidden'
    document.querySelector(`#player${indexTradee+1}-tradeR`).style.visibility = 'hidden'
    document.querySelector(`#player${indexTradee+1}-tradeBtn`).style.visibility = 'hidden'
    document.querySelector('#submitTradeBtn').style.visibility = 'hidden'
  }

  tradeWith(i){
    let trader = this.turn.player
    this.trader = this.turn.player
    this.tradee = this.players[i-1]

    this.players.forEach((player, index) => {
      if (player === this.trader || player === this.tradee) {
        let tradeResources = document.querySelector(`#player${index+1}-tradeR`)
        tradeResources.style.visibility = "visible"
      } else {
        let playerBtn = document.querySelector(`#player${index+1}-tradeBtn`)
        playerBtn.style.visibility = "hidden"
      }
    }, this)
  }

  initiateTrade(){
    let resourceCount = Object.values(this.turn.player.resources).reduce((a, b) => a + b)
    if(this.turnCount > this.numberOfPlayers() && resourceCount > 0) {
      document.querySelector('#submitTradeBtn').style.visibility = "visible"
      let trader = this.turn.player
      this.players.forEach((player, index) => {
        if (player === trader) {
          let playerBtn = document.querySelector(`#player${index+1}-tradeBtn`)
          playerBtn.style.visibility = "hidden"
        } else {
          let playerBtn = document.querySelector(`#player${index+1}-tradeBtn`)
          playerBtn.style.visibility = "visible"
        }
      }, this)
    } else {
      alert("You don't have resources")
    }
  }
}
