class Road {
  constructor(id, left, top, color, width, height, setArray, className){
    this.id = id
    this.left = left
    this.top = top
    this.color = color
    this.width = width
    this.height = height
    this.settlements = setArray
    this.className = className
  }
}

class RoadList {
  constructor(){
    this.adapter = new ApiAdapter()
    this.roads = []
  }

  createRoads(response){
    let arrayRoads = response.map( road => {
      let color = '#FFFFFF'
      let width, height

      if ( road.id < 49 ) {
        width = 45
        height = 30
      } else {
        width = 30
        height = 55
      }

      return new Road(road.id, road.left_coordinate, road.top_coordinate, color, width, height, road.settlements, 'road')
    })
    this.roads = arrayRoads
  }

  renderRoads(){
    this.adapter.getRoads()
    .then(response => response.json())
    .then(this.createRoads.bind(this))
    .catch(function(error) { console.log('There has been a problem with your fetch operation: ' + error.message) } )
  }

  renderMyRoad(element, color){
    let context = document.getElementById('hexmap').getContext('2d')
    context.beginPath()
    if (element.id%2===0 && element.id < 25) {
      context.moveTo(element.left, element.top)
      context.lineTo(element.left + element.width, element.top + element.height)
    } else if (element.id < 25) {
      context.moveTo(element.left + element.width, element.top)
      context.lineTo(element.left, element.top + element.height)
    } else if (element.id%2===0 && element.id < 49) {
      context.moveTo(element.left + element.width, element.top)
      context.lineTo(element.left, element.top + element.height)
    } else if (element.id < 49) {
      context.moveTo(element.left, element.top)
      context.lineTo(element.left + element.width, element.top + element.height)
    } else {
      context.moveTo(element.left + (element.width/2), element.top)
      context.lineTo(element.left + (element.width/2), element.top + element.height)
    }
    context.strokeStyle = color

      context.lineWidth = 5
    context.stroke()
  }

}
