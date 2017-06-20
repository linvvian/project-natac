class Player {
  constructor(name){
    this.settlements = []
    this.roads = []
    this.resources = {
      bricks: 0,
      grains: 0,
      lumbers: 0,
      ores: 0,
      wools: 0
    }
    this.name = name || `Player`
  }

  //return the number of settlements player has
  countSettlements(){
    return this.settlements.count
  }

  //return the number of roads player has
  countRoads(){
    return this.roads.count
  }

  //adds settlement to player
  addSettlement(settlement){
    this.settlements.push(settlement)
  }

  //adds road to player
  addRoad(road){
    this.roads.push(road)
  }

  //increase resource of specified type
  procureResource(type){
    this.resources[type] += 1
  }

  //returns all resources as a string
  renderResources(){
    let rsc = []
    for(let key in this.resources){
      rsc.push(`${key}: ${this.resources[key]} `)
    }
    return rsc.map(e => e).join('')
  }

  render(){
    return `<h2>${this.name}</h2><p>Settlements: </p><p>Roads: </p><p>Resources: </p>`
  }
}

const me = new Player('me')
document.getElementById('player1-corner').innerHTML = me.render()
document.getElementById('player2-corner').innerHTML = me.render()
