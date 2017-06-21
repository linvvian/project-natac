class Game {
  constructor() {
    this.turnCount = 1
    this.players = []
    this.gameboard = new Gameboard()
    this.openSettlements = this.gameboard.settlements
    this.turn

    // this.buttons = document.querySelector('.button-container')
    // this.buttons.addEventListener('click', this.startTurn.bind(this))
    // this.board = document.querySelector('.gameboard-container')
    // this.board.addEventListener('click', this.boardEvents.bind(this))
    this.game = document.querySelector('.game')
    this.game.addEventListener('click', this.eventsCheck.bind(this))

    this.renderTurnCount()

    // this.settlements = [new Settlements()]
    // this.roads = [new Roads()]
  }

  rollDice(){
    let roll = Math.floor(Math.random()*6)+1 + Math.floor(Math.random()*6)+1
    document.querySelector('.roll').innerHTML = `${roll}`
    this.turn.roll = roll
    var tile = this.findTileResourceAfterRoll.call(this, roll)
    // console.log(tile)
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
    this.gameboard.tiles.forEach((tile) => {
      if (tile.value === value) {
        return [tile.resource, tile]
      }
    })
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

  getSettlement(event, settlements){
    let picked
    // gets hexmap element and sets the dimension borders of clicked element
    let elem = document.getElementById('hexmap'),
        elemLeft = elem.offsetLeft,
        elemTop = elem.offsetTop
    // gets the coordinates of mouse when click event
    let x = event.pageX - elemLeft,
        y = event.pageY - elemTop;

    // iterates through all open settlements to check click and retrieves the object element clicked on
    settlements.forEach(function(element) {
      if (y > element.top && y < element.top + element.height
      && x > element.left && x < element.left + element.width) {
        console.log('id', element.id, 'left', element.left, 'top', element.top)
        picked = element
      }})
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
        let clickedTarget = this.getSettlement(event, this.openSettlements)
        turn.placeSettlement(clickedTarget)
        console.log(clickedTarget)
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

new Game()
