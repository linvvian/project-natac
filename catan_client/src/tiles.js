var elem = document.getElementById('hexmap'),
    elemLeft = elem.offsetLeft,
    elemTop = elem.offsetTop,
    context = elem.getContext('2d'),
    tilesArr = [];

// Add event listener for `click` events.
elem.addEventListener('click', function(event) {
    var x = event.pageX - elemLeft,
        y = event.pageY - elemTop;

   // Collision detection between clicked offset and element.
    tilesArr.forEach(function(element) {
        if (y > element.top && y < element.top + element.height
            && x > element.left && x < element.left + element.width) {
            console.log('tiles_id', element.id, 'left', element.left, 'top', element.top)
        }
    });

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


tiles.forEach(function(e, i){
  tilesArr.push({
      colour: '#c9c6ca',
      width: 90,
      height: 90,
      top: e.y,
      left: e.x,
      id: i+1
  })
})

// Render elements.
tilesArr.forEach(function(element) {
    context.fillStyle = element.colour;
    context.fillRect(element.left, element.top, element.width, element.height);
})




