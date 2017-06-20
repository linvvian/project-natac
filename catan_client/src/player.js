class Player {
  constructor(name){
    this.settlements = []
    this.roads = []
    this.name = name || `Player`
  }

  render(){
    return `<h1>${this.name}</h1>`
  }
}

// const me = new Player('me')
// document.getElementById('player1-corner').innerHTML = me.render()
