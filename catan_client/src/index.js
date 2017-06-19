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

const coords = [{x:25, y:120},{x:0, y:195},{x:25, y:260},{x:0, y:325},{x:25, y:390},{x:0, y:455}, {x:25, y:520} ]
let id = 1
coords.forEach(function(e){
  elements.push({
      colour: '#05EFFF ',
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
