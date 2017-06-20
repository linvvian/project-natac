class Game {
  constructor() {
    this.turnCount = 0
    this.players = []
    this.gameboard = new Gameboard()
    this.player1NameBox = document.querySelector('#player1-name')
    this.player2NameBox = document.querySelector('#player2-name')
    this.player1Submit = document.querySelector('#player1-submit')
    this.player2Submit = document.querySelector('#player2-submit')
    this.buttons = document.querySelector('#button-container')
    this.buttons.addEventListener('click', this.startTurn.bind(this))

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

  addPlayer(){
    thisplayers.push(new Player(name) )
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
    let target = event.target
    
    // if button
    //   do turn action
  }

  endTurn() {
    this.turnCount ++
    // check if player won
    // game over
    // else continue
    this.startTurn()
  }

  renderTurnCount(){

  }
}

const game = new Game()
