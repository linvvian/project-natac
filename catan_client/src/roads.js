class Road {
  constructor(){
    this.roads = []
    this.render()
  }

  renderRoad(element){
    let context = document.getElementById('hexmap').getContext('2d')
    context.beginPath()
    if (element.roadID%2===0 && element.roadID < 25) {
      context.moveTo(element.left, element.top)
      context.lineTo(element.left + element.width, element.top + element.height)
    } else if (element.roadID < 25) {
      context.moveTo(element.left + element.width, element.top)
      context.lineTo(element.left, element.top + element.height)
    } else if (element.roadID%2===0 && element.roadID < 49) {
      context.moveTo(element.left + element.width, element.top)
      context.lineTo(element.left, element.top + element.height)
    } else if (element.roadID < 49) {
      context.moveTo(element.left, element.top)
      context.lineTo(element.left + element.width, element.top + element.height)
    } else {
      context.moveTo(element.left + (element.width/2), element.top)
      context.lineTo(element.left + (element.width/2), element.top + element.height)
    }
    context.strokeStyle = '#5AEBAD'

      context.lineWidth = 5
    context.stroke()
  }

  render() {
    var elem = document.getElementById('hexmap'),
        elemLeft = elem.offsetLeft,
        elemTop = elem.offsetTop,
        context = elem.getContext('2d')

    let roads = this.roads

      elem.addEventListener('click', (event) => {
          var x = event.pageX - elemLeft,
              y = event.pageY - elemTop;

          // Collision detection between clicked offset and element.
          roads.forEach(function(element) {
              if (y > element.top && y < element.top + element.height
                  && x > element.left && x < element.left + element.width) {
                  this.renderRoad(element)
              }
          }, this);

      }, false);

    const coordsHorRoad =
        [
          //Row one
          { left: 140, top: 5, contactSet:[1,2] }, { left: 205, top: 5, contactSet:[2,3] }, { left: 270, top: 5, contactSet:[3,4] }, { left: 335, top: 5, contactSet:[4,5] }, { left: 400, top: 5, contactSet:[5,6] }, { left: 465, top: 5, contactSet:[6,7] },
          //Row three
          { left: 75, top: 115, contactSet:[8,9] }, { left: 140, top: 115, contactSet:[9,10] }, { left: 205, top: 115, contactSet:[10,11] }, { left: 270, top: 115, contactSet:[11,12] }, { left: 335, top: 115, contactSet:[12,13] }, { left: 400, top: 115, contactSet:[13,14] }, { left: 465, top: 115, contactSet:[14,15] }, { left: 530, top: 115, contactSet:[15,16] },
          //Row five
          { left: 10, top: 225, contactSet:[17,18] }, { left: 75, top: 225, contactSet:[18,19] }, { left: 140, top: 225, contactSet:[19,20] }, { left: 205, top: 225, contactSet:[20,21] }, { left: 270, top: 225, contactSet:[21,22] }, { left: 335, top: 225, contactSet:[22,23] }, { left: 400, top: 225, contactSet:[23,24] }, { left: 465, top: 225, contactSet:[24,25] }, { left: 530, top: 225, contactSet:[25,26] }, { left: 595, top: 225, contactSet:[26,27] },
          //Row seven
          { left: 10, top: 340, contactSet:[28,29] }, { left: 75, top: 340, contactSet:[29,30] }, { left: 140, top: 340, contactSet:[30,31] }, { left: 205, top: 340, contactSet:[31,32] }, { left: 270, top: 340, contactSet:[32,33] }, { left: 335, top: 340, contactSet:[33,34] }, { left: 400, top: 340, contactSet:[34,35] }, { left: 465, top: 340, contactSet:[35,36] }, { left: 530, top: 340, contactSet:[36,37] }, { left: 595, top: 340, contactSet:[37,38] },
          //Row nine
          { left: 75, top: 455, contactSet:[39,40] }, { left: 140, top: 455, contactSet:[40,41] }, { left: 205, top: 455, contactSet:[41,42] }, { left: 270, top: 455, contactSet:[42,43] }, { left: 335, top: 455, contactSet:[43,44] }, { left: 400, top: 455, contactSet:[44,45] }, { left: 465, top: 455, contactSet:[45,46] }, { left: 530, top: 455, contactSet:[46,47] },
          //Row eleven
          { left: 140, top: 565, contactSet:[48,49] }, { left: 205, top: 565, contactSet:[49,50] }, { left: 270, top: 565, contactSet:[50,51] }, { left: 335, top: 565, contactSet:[51,52] }, { left: 400, top: 565, contactSet:[52,53] }, { left: 465, top: 565, contactSet:[53,54] },
    ]

    coordsHorRoad.forEach(function(e, i){
      this.roads.push({
          color: '#303030',
          left: e.left,
          top: e.top,
          width: 45,
          height: 30,
          contactSets: e.contactSet,
          roadID: i+1,
          className: 'road'
      })
    }, this)

    const coordsVerRoad =
        [
          //Row two
          { left: 115, top: 48, contactSet:[1,9] }, { left: 245, top: 48, contactSet:[3,11] }, { left: 375, top: 48, contactSet:[5,13] }, { left: 505, top: 48, contactSet:[7,15] },
          //Row four
          { left: 50, top: 160, contactSet:[8,18] }, { left: 180, top: 160, contactSet:[10,20] }, { left: 310, top: 160, contactSet:[12,22] }, { left: 440, top: 160, contactSet:[14,24] }, { left: 570, top: 160, contactSet:[16,26] },
          //Row six
          { left: -5, top: 273, contactSet:[17,28] }, { left: 115, top: 273, contactSet:[19,30] }, { left: 245, top: 273, contactSet:[21,32] }, { left: 375, top: 273, contactSet:[23,34] }, { left: 505, top: 273, contactSet:[25,36] }, { left: 635, top: 273, contactSet:[27,38] },
          //Row eight
          { left: 50, top: 385, contactSet:[29,39] }, { left: 180, top: 385, contactSet:[31,41] }, { left: 310, top: 385, contactSet:[33,43] }, { left: 440, top: 385, contactSet:[35,45] }, { left: 570, top: 385, contactSet:[37,47] },
          //Row 12
          { left: 115, top: 495, contactSet:[40,48] }, { left: 245, top: 495, contactSet:[42,50] }, { left: 375, top: 495, contactSet:[44,52] }, { left: 505, top: 495, contactSet:[46,54] }
    ]

    coordsVerRoad.forEach(function(e){
      let index = this.roads.length + 1
      this.roads.push({
          color: '#FFFFFF',
          left: e.left,
          top: e.top,
          width: 30,
          height: 55,
          contactSets: e.contactSet,
          roadID: index,
          className: 'road'
      })
    }, this)

    // Render elements.
    // this.roads.forEach(function(element) {
    //     context.strokeStyle = element.color;
    //     context.rect(element.left, element.top, element.width, element.height);
    //     context.stroke()
    // })
  }
}
