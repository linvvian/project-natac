class ApiAdapter {
  constructor () {
    this.base_url = 'http://localhost:3000/api/v1/'
    this.settlements = this.base_url + 'settlements'
    this.tiles = this.base_url + 'tiles'
    this.roads = this.base_url + 'roads'
    this.players = this.base_url + 'players'
    this.page = 1
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

// saves the state of the tiles to the API
  saveState(gameStateObj) {
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
    var obj = {
      "players": gameStateObj['players']
    }
    console.log(obj)
    fetch(this.players, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(obj)
    })
  }

}
