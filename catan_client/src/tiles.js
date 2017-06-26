class Tile {
  constructor(id, top, left, resource, value, width, height, className) {
    this.id = id
    this.top = top
    this.left = left

    this.resource = resource
    this.value = value
    this.roads
    this.width = width
    this.height = height
    this.fillStyle
    this.className = className
  }
}

class TileList {
  constructor() {
    this.adapter = new ApiAdapter()
    this.tiles = []
    this.loadImg()
  }

  shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
      j = Math.floor(Math.random() * i);
      x = a[i - 1];
      a[i - 1] = a[j];
      a[j] = x;
    }
    return a
  }

  createTiles(response){
    let diceArray = [2,3,3,4,4,5,5,6,6,7,8,8,9,9,10,10,11,11,12]
    let resourceArray = ['bricks', 'bricks', 'bricks', 'lumbers', 'lumbers', 'lumbers', 'lumbers', 'ores', 'ores', 'ores', 'wools', 'wools', 'wools', 'wools', 'grains', 'grains', 'grains', 'grains']
    let arrayTiles = response.map( tile => {
      let randomValue = this.shuffle(diceArray).shift()
      let randomResource
      if (randomValue === 7){
        randomResource = 'desert'
      } else {
        randomResource = this.shuffle(resourceArray).shift()
      }
      return new Tile(tile.id, tile.top, tile.left, randomResource, randomValue, 90, 90, 'tile')
    })
    this.tiles = arrayTiles
  }

  renderTiles(){
    return this.adapter.getTiles()
    .then(response => response.json())
    .then(this.createTiles.bind(this))
    .then(this.render.bind(this))
    .catch(function(error) { console.log('There has been a problem with your fetch operation: ' + error.message) } )
  }

  loadImg() {
    this.brick = new Image()
    this.brick.onload = this.renderTilePicture.bind(this)
    this.brick.src = 'src/img/brick.jpg'
    this.grain = new Image()
    this.grain.onload = this.renderTilePicture.bind(this)
    this.grain.src = 'src/img/grain.jpg'
    this.lumber = new Image()
    this.lumber.onload = this.renderTilePicture.bind(this)
    this.lumber.src = 'src/img/wood.jpeg'
    this.ore = new Image()
    this.ore.onload = this.renderTilePicture.bind(this)
    this.ore.src = 'src/img/ore.jpg'
    this.sheep = new Image()
    this.sheep.onload = this.renderTilePicture.bind(this)
    this.sheep.src = 'src/img/wool.jpg'
    this.desert = new Image()
    this.desert.onload = this.renderTilePicture.bind(this)
    this.desert.src = 'src/img/desert.jpg'
  }

  renderTilePicture() {
    let context = document.getElementById('hexmap').getContext('2d')
    let fill
    this.tiles.forEach(function(tile){
      if(tile.resource === 'bricks'){
        fill = context.createPattern(this.brick, "no-repeat")
      } else if (tile.resource === 'lumbers'){
        fill = context.createPattern(this.lumber, "no-repeat")
      } else if (tile.resource === 'ores') {
        fill = context.createPattern(this.ore, "no-repeat")
      } else if (tile.resource === 'wools') {
        fill = context.createPattern(this.sheep, "no-repeat")
      } else if (tile.resource === 'grains'){
        fill = context.createPattern(this.grain, "no-repeat")
      } else if (tile.resource === 'desert'){
        fill = context.createPattern(this.desert, "no-repeat")
      } else {
        console.log("no pic")
      }
      context.fillStyle = fill
      context.fillRect(tile.left, tile.top, tile.width + 20, tile.height - 10)
    }, this)

    this.tiles.forEach(function(element) {
      if (element.value === 7) {
        this.renderRobber(element)
      } else {
        context.font = "45px Verdana"
        context.fillStyle = '#FFFFFF'
        context.fillText(element.value, element.left + 37, element.top + 50, 55)
      }
    }, this)
  }

  renderRobber(){
    var context = document.getElementById('hexmap').getContext('2d')
    var radius = 30

    this.tiles.forEach(function(tile){
      if (tile.value === 7){
        console.log('here')
        let centerX = tile.left + (tile.width / 2 + 10)
        let centerY = tile.top + tile.height / 2 - 5

        context.beginPath()
        context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false)
        context.fillStyle = '#5D5D5D'
        context.fill()
        context.lineWidth = 3
        context.strokeStyle = '#1F1F1F'
        context.stroke()
      }
    })
  }

  render() {
    var elem = document.getElementById('hexmap'),
      elemLeft = elem.offsetLeft,
      elemTop = elem.offsetTop,
      context = elem.getContext('2d')
    // Render elements.
    this.tiles.forEach(function(element) {

      if(element.resource === 'bricks'){
          context.fillStyle = '#851b20'
      } else if (element.resource === 'lumbers'){
          context.fillStyle = '#024900'
      } else if (element.resource === 'ores') {
          context.fillStyle = '#49443c'
      } else if (element.resource === 'wools') {
          context.fillStyle = '#868686'
      } else if (element.resource === 'grains'){
          context.fillStyle = '#e7bb19'
      } else if (element.resource === 'desert'){
          context.fillStyle = '#000000'
      }

      context.font = '11px Verdana'
      context.fillText(element.resource, element.left + 42, element.top + 95 )
    })

  }

}
