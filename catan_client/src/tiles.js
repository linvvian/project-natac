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
    let diceArray = [2,2,3,3,4,4,5,5,6,6,8,8,9,9,10,10,11,11,12]
    let resourceArray = ['bricks', 'bricks', 'bricks', 'bricks', 'lumbers', 'lumbers', 'lumbers', 'lumbers', 'ores', 'ores', 'ores', 'wools', 'wools', 'wools', 'wools', 'grains', 'grains', 'grains', 'grains']
    let arrayTiles = response.map( tile => {
      let randomResource = this.shuffle(resourceArray).shift()
      let randomValue = this.shuffle(diceArray).shift()
      return new Tile(tile.id, tile.top, tile.left, randomResource, randomValue, 90, 90, 'tile')
    })
    this.tiles = arrayTiles
  }

  renderTiles(){
    return this.adapter.getTiles()
    .then(response => response.json())
    .then(this.createTiles.bind(this))
    .then(this.render.bind(this))
    .then(this.renderTilePicture.bind(this))
  }

  loadImg() {
    this.brick = new Image()
    // this.brick.onload = this.renderTilePicture.bind(this)
    this.brick.src = 'src/img/brick.jpg'
    this.grain = new Image()
    // this.grain.onload = this.renderTilePicture.bind(this)
    this.grain.src = 'src/img/grain.jpg'
    this.lumber = new Image()
    // this.lumber.onload = this.renderTilePicture.bind(this)
    this.lumber.src = 'src/img/lumber.jpg'
    this.ore = new Image()
    // this.ore.onload = this.renderTilePicture.bind(this)
    this.ore.src = 'src/img/ore.jpg'
    this.sheep = new Image()
    // this.sheep.onload = this.renderTilePicture.bind(this)
    this.sheep.src = 'src/img/sheep.jpg'
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
      } else {
        console.log("no pic")
      }
      context.fillStyle = fill
      context.fillRect(tile.left, tile.top, tile.width, tile.height);
    }, this)
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
          context.fillStyle = '#d2c6d6'
      } else if (element.resource === 'grains'){
          context.fillStyle = '#e7bb19'
      } else {
        console.log("no pic")
      }

      context.fillText(element.resource, element.left + 30, element.top + 102 )
      context.fillText(element.value, element.left + 40, element.top - 5)
      context.fillRect(element.left, element.top, element.width, element.height);
    })
  }

}
