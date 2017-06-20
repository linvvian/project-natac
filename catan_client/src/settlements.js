var elem = document.getElementById('hexmap'),
    elemLeft = elem.offsetLeft,
    elemTop = elem.offsetTop,
    context = elem.getContext('2d'),
    settlements = [];

// Add event listener for `click` events.
elem.addEventListener('click', function(event) {
    var x = event.pageX - elemLeft,
        y = event.pageY - elemTop;

   // Collision detection between clicked offset and element.
    settlements.forEach(function(element) {
        if (y > element.top && y < element.top + element.height
            && x > element.left && x < element.left + element.width) {
            console.log('id', element.id, 'left', element.left, 'top', element.top)
        }
    });

}, false);

const coordsSettle =
    [
        //Row one
        { x:120, y:25 }, { x:185, y:0 }, { x:250, y:25 }, { x:315, y:0 }, { x:380, y:25 }, { x:445, y:0 }, { x:510, y:25 },
        //Row two
        { x:55, y:138 }, { x:120, y:105 }, { x:185, y:138 }, { x:250, y:105 }, { x:315, y:138 }, { x:380, y:105 }, { x:445, y:138 }, { x:510, y:105 }, { x:575, y:138 },
        //third row
        { x:0, y:250 }, { x:55, y:215 }, { x:120, y:250 }, { x:185, y:215 }, { x:250, y:250 }, { x:315, y:215 }, { x:380, y:250 }, { x:445, y:215 }, { x:510, y:250 }, { x:575, y:215 }, { x:640, y:250 }, {x:255, y:640},
        //fourth row
        { x:0, y:330 }, { x:55, y:365 }, { x:120, y:330 }, { x:185, y:365 }, { x:250, y:330 }, { x:315, y:365 }, { x:380, y:330 }, { x:445, y:365 }, { x:510, y:330 }, { x:575, y:365 }, { x:640, y:330 },
        //fifth row
        { x:55, y:440 }, { x:120, y:475 }, { x:185, y:440 }, { x:250, y:475 }, { x:315, y:440 }, { x:380, y:475 }, { x:445, y:440 }, { x:510, y:475 }, { x:575, y:440 },
        //sixth row
        { x:120, y:550 }, { x:185, y:585 }, { x:250, y:550 }, { x:315, y:585 }, { x:380, y:550 }, { x:445, y:585 }, { x:510, y:550 }
]


coordsSettle.forEach(function(e, i){
  settlements.push({
      colour: '#273776',
      width: 20,
      height: 20,
      top: e.y,
      left: e.x,
      id: i+1
  })
})

// Render elements.
settlements.forEach(function(element) {
    context.fillStyle = element.colour;
    context.fillRect(element.left, element.top, element.width, element.height);
})




