class Game {
  constructor() {
    this.turnCount = 1
    this.players = []
      this.gameboard = new Gameboard()
    this.settlements = this.gameboard.settlements

    this.buttons = document.querySelector('.button-container')
    this.buttons.addEventListener('click', this.startTurn.bind(this))
    this.board = document.querySelector('.gameboard-container')
    this.board.addEventListener('click', this.boardEvents.bind(this))

    this.renderTurnCount()


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

    addResources(i){
        let resources = document.querySelector(`#player${i}-resources`)
        let player = this.players[i - 1]
        resources.innerHTML = player.render()

        console.log('shit')

    }

  getSettlement(event, settlements){
    let picked
    console.log(settlements)
    let elem = document.getElementById('hexmap'),
        elemLeft = elem.offsetLeft,
        elemTop = elem.offsetTop
    let x = event.pageX - elemLeft,
        y = event.pageY - elemTop;

    settlements.forEach(function(element) {
      if (y > element.top && y < element.top + element.height
      && x > element.left && x < element.left + element.width) {
        console.log('id', element.id, 'left', element.left, 'top', element.top)
        picked = element
      }})
    return picked
  }

  boardEvents(){
    event.preventDefault()
    let target = event.target.id
    console.log(target)
    switch (target) {
      case 'hexmap':
        let picked = this.getSettlement(event, this.settlements)
        console.log(picked)
        break;
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
      case 'endTurnBtn':
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
