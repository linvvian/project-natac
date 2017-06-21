class Player {
  constructor(name){
    this.settlements = []
    this.roads = []
    this.resources = {
      brick: 0,
      grain: 0,
      lumber: 0,
      ore: 0,
      wool: 0
    }
    this.name = name || `Player`
    this.points = 0
    this.settlementCount = 2
    this.roadCount = 2
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
