class ApiAdapter {
  constructor () {
    this.base_url = 'http://localhost:3000/api/v1/'
    this.settlements = this.base_url + 'settlements'
    this.tiles = this.base_url + 'tiles'
    this.roads = this.base_url + 'roads'
    this.page = 1
  }

  getRoads() {
    return fetch(this.roads)
    .then(response => response.json())
  }
}

const api = new ApiAdapter()
