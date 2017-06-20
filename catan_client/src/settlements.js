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
        { x:120, y:25, tiles: [1] }, { x:185, y:0, tiles:[1] }, { x:250, y:25, tiles:[1,2] }, { x:315, y:0, tiles:[2] }, { x:380, y:25, tiles:[2,3] }, { x:445, y:0, tiles:[3] }, { x:510, y:25, tiles:[3] },
        //Row two
        { x:55, y:138, tiles:[4] }, { x:120, y:105, tiles:[1,4] }, { x:185, y:138,tiles:[1,4,5] }, { x:250, y:105,tiles:[1,2,5] }, { x:315, y:138, tiles:[2,5,6] }, { x:380, y:105, tiles:[2,3,6] }, { x:445, y:138, tiles:[3,6,7] }, { x:510, y:105, tiles:[3,7] }, { x:575, y:138, tiles:[7] },
        //third row
        { x:0, y:250, tiles:[8] }, { x:55, y:215,tiles:[4,8] }, { x:120, y:250, tiles:[4,8,9]}, { x:185, y:215, tiles:[4,8,9]}, { x:250, y:250, tiles:[5,9,10] }, { x:315, y:215, tiles:[5,6,10]}, { x:380, y:250,tiles:[6,10,11] }, { x:445, y:215, tiles:[6,7,11] }, { x:510, y:250, tiles:[7,11,12]}, { x:575, y:215, tiles:[7,12] }, { x:640, y:250,tiles:[12] },
        //fourth row
        { x:0, y:330, tiles:[8] }, { x:55, y:365, tiles:[8,13] }, { x:120, y:330, tiles:[8,9,13]}, { x:185, y:365,tiles:[9,13,14] }, { x:250, y:330,tiles:[9,10,14]}, { x:315, y:365, tiles:[10,14,15]}, { x:380, y:330, tiles:[10,11,15]}, { x:445, y:365, tiles:[11,15,16]}, { x:510, y:330, tiles:[11,12,16] }, { x:575, y:365, tiles:[12,16] }, { x:640, y:330,tiles:[12] },
        //fifth row
        { x:55, y:440, tiles:[13] }, { x:120, y:475, tiles:[13,17]}, { x:185, y:440, tiles:[13,14,17] }, { x:250, y:475,tiles:[14,17,18] }, { x:315, y:440, tiles:[14,15,18]}, { x:380, y:475, tiles:[15,18,19] }, { x:445, y:440, tiles:[15,16,19] }, { x:510, y:475, tiles:[16,19] }, { x:575, y:440, tiles:[16] },
        //sixth row
        { x:120, y:550, tiles:[17] }, { x:185, y:585, tiles:[17] }, { x:250, y:550, tiles:[17,18] }, { x:315, y:585, tiles:[18] }, { x:380, y:550,tiles:[18,19] }, { x:445, y:585, tiles:[19]}, { x:510, y:550, tiles:[19] }
]


coordsSettle.forEach(function(e, i){
  settlements.push({
      color: '#273776',
      width: 20,
      height: 20,
      top: e.y,
      left: e.x,
      id: i+1
  })
})

// Render elements.
settlements.forEach(function(element) {
    context.fillStyle = element.color;
    context.fillRect(element.left, element.top, element.width, element.height);
})
