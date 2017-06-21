class Tile {

  constructor() {
    this.tiles = []
    this.render()
  }

  render() {
    var elem = document.getElementById('hexmap'),
      elemLeft = elem.offsetLeft,
      elemTop = elem.offsetTop,
      context = elem.getContext('2d')

    const tiles =
        [
            //Row one
            { x:150, y:30 },{ x:280, y:30 },{ x:410, y:30 },
            //Row two
            { x:85, y:140 },{ x:215, y:140 },{ x:345, y:140 },{ x:475, y:140 },

            { x:15, y:255 },{ x:150, y:255 },{ x:280, y:255 },{ x:410, y:255 },{ x:540, y:255 },

            { x:85, y:370 },{ x:215, y:370 },{ x:345, y:370 },{ x:475, y:370 },

            { x:150, y:480 },{ x:280, y:480 },{ x:410, y:480 },

        ]

    var diceArr = [2,2,3,3,4,4,5,5,6,6,8,8,9,9,10,10,11,11,12]
    var resourceArr = ['bricks', 'bricks', 'bricks', 'bricks', 'lumbers', 'lumbers', 'lumbers', 'lumbers', 'ores', 'ores', 'ores', 'wools', 'wools', 'wools', 'wools', 'grains', 'grains', 'grains', 'grains']
    tiles.forEach(function(e, i){
      this.tiles.push({
          id: i+1,
          resource: resourceArr.splice(Math.floor(Math.random() * resourceArr.length), 1).join(""),
          value: diceArr.splice(Math.floor(Math.random() * diceArr.length), 1).join(""),
          color: '#c9c6ca',
          width: 90,
          height: 90,
          top: e.y,
          left: e.x
      })
    }, this)

    // Render elements.
    this.tiles.forEach(function(element) {
        context.fillStyle = element.color;
        context.fillRect(element.left, element.top, element.width, element.height);
    })
  }

}
