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
    this.name = name
    this.points = 0
    this.settlementCount = 0
    this.roadCount = 0
    this.cityCount = 0
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

  appendPlayerCorner(i){
    $(`#player${i}-corner`).prepend(this.renderPlayerCorner(i))
  }

  renderAvailabeResourcesToTrade(i){
    let resources = this.resources
    function upCaseFirst(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    let toTrade = Object.keys(resources).map(function(r){
      if (resources[r] !== 0){
        return `<option value="${r}">${upCaseFirst(r)}</option>`
      }
    }).join('')

    document.querySelector(`#player${i}-tradeR`).innerHTML = toTrade
  }

  renderPlayerCorner(i){
    return `<div class='player-info' id='player${i}-info'></div>
    <button class="player-resBtn" class="ui toggle button active" id="player${i}-resources">P${i} Resources</button>
    <div id='player${i}-tag' class='player-tag'></div>
    <div class="player-trade" id="player${i}-trade">
      <select class="player-resources" id="player${i}-tradeR">
      </select>
      <button class="trade_with" id="player${i}-tradeBtn">Trade With</button>
    </div>`
  }

  render(){
    return `<h2>${this.name}</h2><p>Settlements: ${this.countSettlements()}<br>Roads: ${this.countRoads()}</p><p>Resources:<br> ${this.renderResources()}</p><p>Points: ${this.points}</p><p>Settlements to Place: ${this.settlementCount}<br>Roads to Place: ${this.roadCount}<br>City to Place: ${this.cityCount}</p>`
  }

}
