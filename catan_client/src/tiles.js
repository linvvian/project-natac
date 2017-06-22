class Tile {

  constructor() {
    this.tiles = []
    this.render()


  }

    loadImg() {
    this.brick = new Image()
}
  renderTilePicture() {
      var elem = document.getElementById('hexmap'),
          context = elem.getContext('2d')


          this.tiles.forEach(function(tile){
              if(tile.resource === 'bricks'){
                  var img = new Image()
                  img.src = "src/img/grain.jpg"
                  function thing() {
                      context.fillStyle = context.createPattern(img, "no-repeat")
                      context.fill()
                      debugger
                  }
                  thing()
                  // context.fillStyle = context.createPattern(img, 'no-repeat')
                  // context.fill()
              } else if (tile.resource === 'lumbers'){

              } else if (tile.resource === 'ores') {
                  context.fillStyle = '#49443c'
              } else if (tile.resource === 'wools') {
                  context.fillStyle = '#d2c6d6'
              } else if (tile.resource === 'grains'){
                  context.fillStyle = '#e7bb19'
              } else {console.log("no pic")}
              // context.fillRect(tile.left, tile.top, tile.width, tile.height);
              // context.drawImage(img,tile.left, tile.top);
          })
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

            { x:21, y:255 },{ x:150, y:255 },{ x:280, y:255 },{ x:410, y:255 },{ x:542, y:255 },

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
          fillStyle: null,
          width: 90,
          height: 90,
          top: e.y,
          left: e.x
      })
    }, this)

      // if (this.tiles){
      //   this.tiles.forEach(function(tile){
      //       if(tile.resource === 'bricks'){
      //           tile.fillStyle = '#823d2a'
      //           console.log(tile.fillStyle)
      //       } else if (tile.resource === 'lumbers'){
      //           tile.fillStyle = '#572200'
      //           tile.fill()
      //           console.log(tile.fillStyle)
      //       } else if (tile.resource === 'ores') {
      //           tile.fillStyle = '#49443c'
      //       } else if (tile.resource === 'wools') {
      //           tile.fillStyle = '#d2c6d6'
      //       } else if (tile.resource === 'grains'){
      //           tile.fillStyle = '#e7bb19'
      //       } else {console.log("no pic")}
      //   })
      // }



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
        } else {console.log("no pic")}

        context.fillText(element.resource, element.left + 30, element.top + 102 )
        context.fillText(element.value, element.left + 40, element.top - 5)
        context.fillRect(element.left, element.top, element.width, element.height);



            // context.fillRect(tile.left, tile.top, tile.width, tile.height);
            // context.drawImage(img,tile.left, tile.top);



    })
  }



}
