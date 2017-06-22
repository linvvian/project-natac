
tiles =
    [
        # Row one
        { x:150, y:30 },{ x:280, y:30 },{ x:410, y:30 },
        # Row two
        { x:85, y:140 },{ x:215, y:140 },{ x:345, y:140 },{ x:475, y:140 },
        # Row three
        { x:15, y:255 },{ x:150, y:255 },{ x:280, y:255 },{ x:410, y:255 },{ x:540, y:255 },
        # Row four
        { x:85, y:370 },{ x:215, y:370 },{ x:345, y:370 },{ x:475, y:370 },
        # Row five
        { x:150, y:480 },{ x:280, y:480 },{ x:410, y:480 },
    ]

tiles.each do |t|
  Tile.create(left: t[:x], top: t[:y])
end

coordsSettle =
    [
      # Row one
      { x:120, y:25, tiles: [1] }, { x:185, y:-5, tiles: [1] }, { x:250, y:25, tiles: [2, 3] }, { x:315, y:-5, tiles: [2] }, { x:380, y:25, tiles: [1, 2] }, { x:445, y:-5, tiles: [3] }, { x:510, y:25, tiles:[3] },
      # Row two
      { x:55, y:138, tiles:[4] }, { x:120, y:105, tiles:[1,4] }, { x:185, y:138,tiles:[1,4,5] }, { x:250, y:105, tiles:[1,2,5] }, { x:315, y:138, tiles:[2,5,6] }, { x:380, y:105, tiles: [2,3,6] }, { x:445, y:138, tiles:[3,6,7] }, { x:510, y:105, tiles:[3,7] }, { x:575, y:138, tiles:[7] },
      # third row
      { x:-5, y:250, tiles:[8] }, { x:55, y:215,tiles:[4,8] }, { x:120, y:250, tiles:[4,8,9]}, { x:185, y:215, tiles:[4,5,9]}, { x:250, y:250, tiles:[5,9,10] }, { x:315, y:215, tiles:[5,6,10]}, { x:380, y:250, tiles:[6,10,11] }, { x:445, y:215, tiles:[6,7,11] }, { x:510, y:250, tiles:[7,11,12]}, { x:575, y:215, tiles:[7,12] }, { x:640, y:250, tiles:[12] },
      # fourth row
      { x:-5, y:330, tiles:[8] }, { x:55, y:365, tiles:[8,13] }, { x:120, y:330, tiles:[8,9,13] }, { x:185, y:365, tiles:[9,13,14] }, { x:250, y:330, tiles:[9,10,14] }, { x:315, y:365, tiles:[10,14,15] }, { x:380, y:330, tiles:[10,11,15] }, { x:445, y:365, tiles:[11,15,16] }, { x:510, y:330, tiles:[11,12,16] }, { x:575, y:365, tiles:[12,16] }, { x:640, y:330,tiles:[12] },
      # fifth row
      { x:55, y:440, tiles:[13] }, { x:120, y:475, tiles:[13,17]}, { x:185, y:440, tiles:[13,14,17] }, { x:250, y:475, tiles:[14,17,18] }, { x:315, y:440, tiles:[14,15,18]}, { x:380, y:475, tiles:[15,18,19] }, { x:445, y:440, tiles:[15,16,19] }, { x:510, y:475, tiles:[16,19] }, { x:575, y:440, tiles:[16] },
      # sixth row
      { x:120, y:550, tiles:[17] }, { x:185, y:585, tiles:[17] }, { x:250, y:550, tiles:[17,18] }, { x:315, y:585, tiles:[18] }, { x:380, y:550, tiles:[18,19] }, { x:445, y:585, tiles:[19] }, { x:510, y:550, tiles:[19] }
]

coordsSettle.each do |t|
  set = Settlement.new(x_coordinate: t[:x], y_coordinate: t[:y])
  t[:tiles].each do |i|
    set.tiles << Tile.find(i)
  end
  set.save
end

coordsHorRoad =
    [
      # Row one
      { left: 140, top: 5, contactSet:[1,2] }, { left: 205, top: 5, contactSet:[2,3] }, { left: 270, top: 5, contactSet:[3,4] }, { left: 335, top: 5, contactSet:[4,5] }, { left: 400, top: 5, contactSet:[5,6] }, { left: 465, top: 5, contactSet:[6,7] },
      # Row three
      { left: 75, top: 115, contactSet:[8,9] }, { left: 140, top: 115, contactSet:[9,10] }, { left: 205, top: 115, contactSet:[10,11] }, { left: 270, top: 115, contactSet:[11,12] }, { left: 335, top: 115, contactSet:[12,13] }, { left: 400, top: 115, contactSet:[13,14] }, { left: 465, top: 115, contactSet:[14,15] }, { left: 530, top: 115, contactSet:[15,16] },
      # Row five
      { left: 10, top: 225, contactSet:[17,18] }, { left: 75, top: 225, contactSet:[18,19] }, { left: 140, top: 225, contactSet:[19,20] }, { left: 205, top: 225, contactSet:[20,21] }, { left: 270, top: 225, contactSet:[21,22] }, { left: 335, top: 225, contactSet:[22,23] }, { left: 400, top: 225, contactSet:[23,24] }, { left: 465, top: 225, contactSet:[24,25] }, { left: 530, top: 225, contactSet:[25,26] }, { left: 595, top: 225, contactSet:[26,27] },
      # Row seven
      { left: 10, top: 340, contactSet:[28,29] }, { left: 75, top: 340, contactSet:[29,30] }, { left: 140, top: 340, contactSet:[30,31] }, { left: 205, top: 340, contactSet:[31,32] }, { left: 270, top: 340, contactSet:[32,33] }, { left: 335, top: 340, contactSet:[33,34] }, { left: 400, top: 340, contactSet:[34,35] }, { left: 465, top: 340, contactSet:[35,36] }, { left: 530, top: 340, contactSet:[36,37] }, { left: 595, top: 340, contactSet:[37,38] },
      # Row nine
      { left: 75, top: 455, contactSet:[39,40] }, { left: 140, top: 455, contactSet:[40,41] }, { left: 205, top: 455, contactSet:[41,42] }, { left: 270, top: 455, contactSet:[42,43] }, { left: 335, top: 455, contactSet:[43,44] }, { left: 400, top: 455, contactSet:[44,45] }, { left: 465, top: 455, contactSet:[45,46] }, { left: 530, top: 455, contactSet:[46,47] },
      # Row eleven
      { left: 140, top: 565, contactSet:[48,49] }, { left: 205, top: 565, contactSet:[49,50] }, { left: 270, top: 565, contactSet:[50,51] }, { left: 335, top: 565, contactSet:[51,52] }, { left: 400, top: 565, contactSet:[52,53] }, { left: 465, top: 565, contactSet:[53,54] },
]

coordsHorRoad.each do |r|
  road = Road.new(left_coordinate: r[:left], top_coordinate: r[:top])
  r[:contactSet].each do |i|
    road.settlements << Settlement.find(i)
  end
  road.save
end

coordsVerRoad =
    [
      # Row two
      { left: 115, top: 48, contactSet:[1,9] }, { left: 245, top: 48, contactSet:[3,11] }, { left: 375, top: 48, contactSet:[5,13] }, { left: 505, top: 48, contactSet:[7,15] },
      # Row four
      { left: 50, top: 160, contactSet:[8,18] }, { left: 180, top: 160, contactSet:[10,20] }, { left: 310, top: 160, contactSet:[12,22] }, { left: 440, top: 160, contactSet:[14,24] }, { left: 570, top: 160, contactSet:[16,26] },
      # Row six
      { left: -5, top: 273, contactSet:[17,28] }, { left: 115, top: 273, contactSet:[19,30] }, { left: 245, top: 273, contactSet:[21,32] }, { left: 375, top: 273, contactSet:[23,34] }, { left: 505, top: 273, contactSet:[25,36] }, { left: 635, top: 273, contactSet:[27,38] },
      # Row eight
      { left: 50, top: 385, contactSet:[29,39] }, { left: 180, top: 385, contactSet:[31,41] }, { left: 310, top: 385, contactSet:[33,43] }, { left: 440, top: 385, contactSet:[35,45] }, { left: 570, top: 385, contactSet:[37,47] },
      # Row 12
      { left: 115, top: 495, contactSet:[40,48] }, { left: 245, top: 495, contactSet:[42,50] }, { left: 375, top: 495, contactSet:[44,52] }, { left: 505, top: 495, contactSet:[46,54] }
]

coordsVerRoad.each do |r|
  road = Road.new(left_coordinate: r[:left], top_coordinate: r[:top])
  r[:contactSet].each do |i|
    road.settlements << Settlement.find(i)
  end
  road.save
end
