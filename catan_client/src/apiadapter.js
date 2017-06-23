class ApiAdapter {
  constructor () {
    this.base_url = 'http://localhost:3000/api/v1/'
    this.settlements = this.base_url + 'settlements'
    this.tiles = this.base_url + 'tiles'
    this.roads = this.base_url + 'roads'
    this.players = this.base_url + 'players'
    this.games = this.base_url + 'games'
    this.page = 1
    this.gameID = (Math.random() + 1).toString(36).substring(8)
  }

  getRoads() {
    return fetch(this.roads)
  }

  getTiles() {
    return fetch(this.tiles)
  }

  getSettlements() {
    return fetch(this.settlements)
  }

  loadLastGame(){
    
  }

// creates game in database
  saveGame(gameStateObj){
    let game = {
      "turnCount": gameStateObj.turnCount,
      "players": this.parsePlayer(gameStateObj),
      "gameID": this.gameID
    }
    let obj = {
      "game": game
    }
    let resp = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(obj)
    }
    fetch(this.games, resp)
    .catch((error) => {
      console.log(error.message)
    })
  }

  updateGame(gameStateObj){
    let game = {
      "turnCount": gameStateObj.turnCount,
      "players": this.parsePlayer(gameStateObj),
      "gameID": this.gameID
    }
    let obj = {
      "game": game
    }
    let resp = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(obj)
    }
    fetch(this.games, resp)
    .catch((error) => {
      console.log(error.message)
    })
  }

// saves the state of the tiles to the API
  saveTilesState(gameStateObj) {
    let obj = {
      "tiles": gameStateObj['tileClass']['tiles']
    }
    let resp = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PATCH',
      body: JSON.stringify(obj)
    }
    fetch(this.tiles, resp)
    .catch((error) => {
      console.log(error.message)
    })
  }

//  saves the state of the players
  savePlayerState(gameStateObj) {
    let players = this.parsePlayer(gameStateObj)
    var obj = {
      "players": players
    }
    fetch(this.players, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(obj)
    })
    .catch((error) => { console.log(error.message) })
  }

  parsePlayer(gameStateObj){
    return gameStateObj.players.map((player) => {
      return {
        'settlement_ids': player.settlements.map((set) => { return set.id }),
        'road_ids': player.roads.map((r) => { return r.id }),
        'bricks': player.resources.bricks,
        'grains': player.resources.grains,
        'lumbers': player.resources.lumbers,
        'ores': player.resources.ores,
        'wools': player.resources.wools,
        'name': player.name,
        'points': player.points,
        'color': player.color,
        'settlementCount': player.settlementCount,
        'roadCount': player.roadCount
      }
    })
  }

}
