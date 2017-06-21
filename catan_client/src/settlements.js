class Settlement {
  constructor(tilesArr){
    this.settlements = []
    this.tiles = tilesArr
    this.render()
  }

  renderMySettlement(color){
    this.settlements.forEach(function(element) {
        context.fillStyle = element.color;
        context.fillRect(element.left, element.top, element.width, element.height);
    })
  }


  render() {
    var elem = document.getElementById('hexmap'),
        context = elem.getContext('2d')

    const coordsSettle =
        [
          //Row one
          { x:120, y:25, tiles: [this.tiles[0]] }, { x:185, y:0, tiles:[this.tiles[0]] }, { x:250, y:25, tiles:[this.tiles[1], this.tiles[2]] }, { x:315, y:0, tiles: [this.tiles[1]] }, { x:380, y:25, tiles: [this.tiles[0], this.tiles[1]] }, { x:445, y:0, tiles:[this.tiles[2]] }, { x:510, y:25, tiles:[this.tiles[2]] },
          //Row two
          { x:55, y:138, tiles:[this.tiles[3]] }, { x:120, y:105, tiles:[this.tiles[0], this.tiles[3]] }, { x:185, y:138,tiles:[this.tiles[0], this.tiles[3], this.tiles[4]] }, { x:250, y:105, tiles:[this.tiles[0], this.tiles[1], this.tiles[4]] }, { x:315, y:138, tiles:[this.tiles[1], this.tiles[4], this.tiles[5]] }, { x:380, y:105, tiles: [this.tiles[1], this.tiles[2], this.tiles[5]] }, { x:445, y:138, tiles:[this.tiles[2], this.tiles[5], this.tiles[6]] }, { x:510, y:105, tiles:[this.tiles[2], this.tiles[6]] }, { x:575, y:138, tiles:[this.tiles[6]] },
          //third row
          { x:0, y:250, tiles:[this.tiles[7]] }, { x:55, y:215,tiles:[this.tiles[3],this.tiles[7]] }, { x:120, y:250, tiles:[this.tiles[3], this.tiles[7], this.tiles[8]]}, { x:185, y:215, tiles:[this.tiles[3], this.tiles[7], this.tiles[8]]}, { x:250, y:250, tiles:[this.tiles[4], this.tiles[8], this.tiles[9]] }, { x:315, y:215, tiles:[this.tiles[4], this.tiles[5], this.tiles[9]]}, { x:380, y:250,tiles:[this.tiles[5], this.tiles[9], this.tiles[10]] }, { x:445, y:215, tiles:[this.tiles[5], this.tiles[9], this.tiles[10]] }, { x:510, y:250, tiles:[this.tiles[6], this.tiles[10], this.tiles[11]]}, { x:575, y:215, tiles:[this.tiles[6], this.tiles[11]] }, { x:640, y:250,tiles:[this.tiles[11]] },
          //fourth row
          { x:0, y:330, tiles:[this.tiles[7]] }, { x:55, y:365, tiles:[this.tiles[7], this.tiles[12]] }, { x:120, y:330, tiles:[this.tiles[7], this.tiles[8], this.tiles[12]] }, { x:185, y:365,tiles:[this.tiles[8], this.tiles[12], this.tiles[13]] }, { x:250, y:330,tiles:[this.tiles[8], this.tiles[11], this.tiles[13]]}, { x:315, y:365, tiles:[this.tiles[9], this.tiles[13], this.tiles[14]]}, { x:380, y:330, tiles:[this.tiles[9], this.tiles[10], this.tiles[14]]}, { x:445, y:365, tiles:[this.tiles[10], this.tiles[14], this.tiles[15]]}, { x:510, y:330, tiles:[this.tiles[10], this.tiles[11], this.tiles[15]] }, { x:575, y:365, tiles:[this.tiles[11], this.tiles[15]] }, { x:640, y:330,tiles:[this.tiles[11]] },
          //fifth row
          { x:55, y:440, tiles:[this.tiles[12]] }, { x:120, y:475, tiles:[this.tiles[12], this.tiles[16]]}, { x:185, y:440, tiles:[this.tiles[12], this.tiles[13], this.tiles[16]] }, { x:250, y:475,tiles:[this.tiles[13], this.tiles[16], this.tiles[17]] }, { x:315, y:440, tiles:[this.tiles[13], this.tiles[14], this.tiles[17]]}, { x:380, y:475, tiles:[this.tiles[14], this.tiles[17], this.tiles[18]] }, { x:445, y:440, tiles:[this.tiles[14], this.tiles[15], this.tiles[18]] }, { x:510, y:475, tiles:[this.tiles[15], this.tiles[18]] }, { x:575, y:440, tiles:[this.tiles[15]] },
          //sixth row
          { x:120, y:550, tiles:[this.tiles[16]] }, { x:185, y:585, tiles:[this.tiles[16]] }, { x:250, y:550, tiles:[this.tiles[16], this.tiles[17]] }, { x:315, y:585, tiles:[this.tiles[17]] }, { x:380, y:550,tiles:[this.tiles[17], this.tiles[18]] }, { x:445, y:585, tiles:[this.tiles[18]]}, { x:510, y:550, tiles:[this.tiles[18]] }
    ]

    coordsSettle.forEach(function(e, i){
      this.settlements.push({
          color: '#273776',
          width: 20,
          height: 20,
          top: e.y,
          left: e.x,
          id: i+1,
          tiles: e.tiles,
          className: 'settlement'
      })
    }, this)

    // Render elements.
    this.settlements.forEach(function(element) {
        context.fillStyle = element.color;
        context.fillRect(element.left, element.top, element.width, element.height);
    })
  }
}
