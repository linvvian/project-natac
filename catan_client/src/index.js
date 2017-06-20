var canvas = document.getElementById('hexmap')
var context = canvas.getContext('2d')
var radius = 10

var putPoint = function (e) {
    context.beginPath()
    context.arc(e.offsetX, e.offsetY, radius, 0, Math.PI*2)
    console.log('e', e.offsetX, e.offsetY)
    context.stroke()
    base_image = new Image();
    // base_image.src = (https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Circle_-_black_simple.svg/1000px-Circle_-_black_simple.svg.png)
    context.drawImage(base_image, 100, 100);
}

canvas.addEventListener('mousedown', putPoint)

var elem = document.getElementById('hexmap'),
    elemLeft = elem.offsetLeft,
    elemTop = elem.offsetTop,
    context = elem.getContext('2d'),
    elements = [];

// Add event listener for `click` events.
elem.addEventListener('click', function(event) {
    var x = event.pageX - elemLeft,
        y = event.pageY - elemTop;

   // Collision detection between clicked offset and element.
    elements.forEach(function(element) {
        if (y > element.top && y < element.top + element.height
            && x > element.left && x < element.left + element.width) {
            alert('clicked an element');
        }
    });

}, false);

const coords =
    [
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

let id = 1
coords.forEach(function(e){
  elements.push({
      colour: '#273776',
      width: 20,
      height: 20,
      top: e.x,
      left: e.y,
      id: id
  })
  id ++
})
// Add element.



// Render elements.
elements.forEach(function(element) {
    context.fillStyle = element.colour;
    context.fillRect(element.left, element.top, element.width, element.height);
})
