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
    context.fillRect(element.left-3 , element.top-3, element.width+5, element.height+5)
  }

  roundRect(ctx, x, y, width, height, radius, fill, stroke) {
    if (typeof stroke == 'undefined') {
      stroke = true;
    }
    if (typeof radius === 'undefined') {
      radius = 5;
    }
    if (typeof radius === 'number') {
      radius = {tl: radius, tr: radius, br: radius, bl: radius};
    } else {
      var defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};
      for (var side in defaultRadius) {
        radius[side] = radius[side] || defaultRadius[side];
      }
    }
    ctx.beginPath();
    ctx.moveTo(x + radius.tl, y);
    ctx.lineTo(x + width - radius.tr, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
    ctx.lineTo(x + width, y + height - radius.br);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
    ctx.lineTo(x + radius.bl, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
    ctx.lineTo(x, y + radius.tl);
    ctx.quadraticCurveTo(x, y, x + radius.tl, y);
    ctx.closePath();
    if (fill) {
      ctx.fill();
    }
    if (stroke) {
      ctx.stroke();
    }
  }

  render() {
    var ctx = document.getElementById('hexmap').getContext('2d')

    // Render elements.
    this.settlements.forEach(function(element) {
        let radius = 8
        ctx.fillStyle = '#273776'
        ctx.strokeStyle = '#FFFFFF'
        this.roundRect(ctx, element.left, element.top, element.width, element.height, radius, true)
    }, this)
  }
}
