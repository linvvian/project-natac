class Settlement {
  constructor(id, x, y, tilesArray, roadsArray, color, width, height, className){
    this.id = id
    this.left = x
    this.top = y
    this.tiles = tilesArray
    this.roads = roadsArray
    this.color = color
    this.width = width
    this.height = height
    this.className = className
  }
}

class SettlementList {
  constructor(tilesArr){
    this.adapter = new ApiAdapter()
    this.settlements = []
    this.tiles = tilesArr
  }

  createSettlements(response){
    let arraySettlements = response.map( set => {
      let color = '#273776'

      return new Settlement(set.id, set.x_coordinate, set.y_coordinate, set.tiles, set.roads, color, 20, 20, 'settlement' )
    })
    this.settlements = arraySettlements
  }

  renderSettlements(){
    this.adapter.getSettlements()
    .then(response => response.json())
    .then(this.createSettlements.bind(this))
    .then(this.render.bind(this))
  }

  renderMySettlement(element, color){
    let context = document.getElementById('hexmap').getContext('2d')
    context.fillStyle = color
    context.fillRect(element.left, element.top, element.width, element.height)
  }

  render() {
    var elem = document.getElementById('hexmap'),
        context = elem.getContext('2d')

    // Render elements.
    this.settlements.forEach(function(element) {
        context.fillStyle = element.color;
        context.fillRect(element.left, element.top, element.width, element.height);
    })
  }
}
