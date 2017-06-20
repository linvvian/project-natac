class Game {
  constructor() {
    this.turnCount = 1
    this.players = []
    this.gameboard = new Gameboard()

    this.buttons = document.querySelector('.button-container')
    this.buttons.addEventListener('click', this.startTurn.bind(this))
    this.board = document.querySelector('.gameboard-container')
    this.board.addEventListener('click', this.boardEvents.bind(this))

    this.renderTurnCount()

    // this.placeSettlementBtn = //settlement button
    // this.placeSettlementBtn.addEventListener()//adds on click event that triggers placeSettlement function
    // this.placeRoadBtn = //road button
    // this.placeRoadBtn.addEventListener()//adds on click event that triggers placeRoad function
    // this.endTurnBtn = //end turn
    // this.endTurnBtn.addEventListener()//add on click event that triggers the endTurn function
    // this.buyRoadBtn = document.querySelector('#buyRoadBtn')
    // this.buyRoadBtn.addEventListener()// lets player buy road if they have the necessary amount of resources -- then decrements the appropriate resources and amounts
    // this.buySettlementBtn = document.querySelector('#buySettlementBtn')
    // this.buySettlementBtn.addEventListener()// lets player buy settlements if they have the necessary amount of resources -- then decrements the appropriate resources and amounts

    // this.settlements = [new Settlements()]
    // this.roads = [new Roads()]
  }

  rollDice(){

  }

  addPlayer(i){
    let name = document.querySelector(`#player${i}-name`).value
    this.players.push( new Player(name) )
    console.log(this.players)
  }

  boardEvents(){
    event.preventDefault()
    let target = event.target.id
    console.log(target)
    switch (target) {
      case 'hexmap':

        break;
      case 'player1-submit':
        this.addPlayer(1)
        break;
      case 'player2-submit':
        this.addPlayer(2)
        break;
      default:

    }
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
    let turn = new Turn(player)
    let target = event.target.id
    switch (target) {
      case 'buySettlementBtn':
        turn.buySettlement()
        break;
      case 'buyRoadBtn':
        turn.buyRoad()
        break;
      case 'endTurn':
        this.endTurn()
        break;
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
    this.startTurn()
  }

  renderTurnCount(){
    const div = document.querySelector('.turnCount-container')
    $(div).append(`<h2>Turn: ${this.turnCount}</h2>`)
  }
}

const game = new Game()
