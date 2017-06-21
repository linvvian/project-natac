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

    // Add event listener for `click` events.
    elem.addEventListener('click', function(event) {
        var x = event.pageX - elemLeft,
            y = event.pageY - elemTop;

       // Collision detection between clicked offset and element.
        // this.tiles.forEach(function(element) {
        //     if (y > element.top && y < element.top + element.height
        //         && x > element.left && x < element.left + element.width) {
        //         console.log(element)
        //     }
        // });

    }, false);

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
    var resourceArr = ['brick', 'brick', 'brick', 'brick', 'lumber', 'lumber', 'lumber', 'lumber', 'ore', 'ore', 'ore', 'wool', 'wool', 'wool', 'wool', 'grain', 'grain', 'grain', 'grain']
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
