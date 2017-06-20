class Player {
  constructor(name){
    this.settlements = []
    this.roads = []
    this.name = name || `Player`
  }

  render(){
    return `<h2>${this.name}</h2><p>Settlements: </p><p>Roads: </p>`
  }
}

// const me = new Player('me')
// document.getElementById('player1-corner').innerHTML = me.render()
