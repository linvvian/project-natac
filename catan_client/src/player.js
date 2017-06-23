class Player {
  constructor(color, name){
    this.settlements = []
    this.roads = []
    this.resources = {
      bricks: 0,
      grains: 0,
      lumbers: 0,
      ores: 0,
      wools: 0
    }
    this.name = name || 'Player'
    this.points = 0
    this.settlementCount = 2
    this.roadCount = 2
    this.color = color
  }

  //return the number of settlements player has
  countSettlements(){
    return this.settlements.length
  }

  //return the number of roads player has
  countRoads(){
    return this.roads.length
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
      rsc.push(`${key}: ${this.resources[key]}<br> `)
    }
    return rsc.map(e => e).join('')
  }

  render(){
    return `<h2>${this.name}</h2><p>Settlements: ${this.countSettlements()}<br>Roads: ${this.countRoads()}</p><p>Resources:<br> ${this.renderResources()}</p><p>Points: ${this.points}</p><p>Settlements to Place: ${this.settlementCount}<br>Roads to Place: ${this.roadCount}</p>`
  }

}
