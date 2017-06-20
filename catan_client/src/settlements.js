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

const coordsSettle = [
        //Row one
        {x:30, y:120},{x:0, y:185},{x:30, y:250},{x:0, y:315},{x:30, y:380},{x:0, y:445}, {x:30, y:510},
        //Row two
        {x:145, y:55},{x:100, y:120},{x:145, y:185},{x:100, y:250},{x:145, y:315},{x:100, y:380},{x:145, y:445}, {x:100, y:510},{x:145, y:575},
        //third row
        {x:250, y:0},{x:210, y:55},{x:255, y:120},{x:210, y:185},{x:255, y:250},{x:210, y:315},{x:255, y:380},{x:210, y:445}, {x:255, y:510},{x:210, y:575}, {x:255, y:640},
        //fourth row
        {x:325, y:0},{x:370, y:55},{x:325, y:120},{x:370, y:185},{x:325, y:250},{x:370, y:315},{x:325, y:380},{x:370, y:445}, {x:325, y:510},{x:370, y:575}, {x:325, y:640},
        //fifth row
        {x:435, y:55},{x:480, y:120},{x:435, y:185},{x:480, y:250},{x:435, y:315},{x:480, y:380},{x:435, y:445}, {x:480, y:510},{x:435, y:575},
        //sixth row
        {x:550, y:120},{x:595, y:185},{x:550, y:250},{x:595, y:315},{x:550, y:380},{x:595, y:445}, {x:550, y:510}
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
