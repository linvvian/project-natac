(function(){
    var canvas = document.getElementById('hexmap');

    var hexHeight,
        hexRadius,
        hexRectangleHeight,
        hexRectangleWidth,
        hexagonAngle = 0.523598776, // 30 degrees in radians
        sideLength = 75,
        boardWidth = 4,
        boardHeight = 4;

    hexHeight = Math.sin(hexagonAngle) * sideLength;
    hexRadius = Math.cos(hexagonAngle) * sideLength;
    hexRectangleHeight = sideLength + 2 * hexHeight;
    hexRectangleWidth = 2 * hexRadius;

    if (canvas.getContext){
        var ctx = canvas.getContext('2d');

        ctx.fillStyle = "#000000";
        ctx.strokeStyle = "#CCCCCC";
        ctx.lineWidth = 3;

        drawBoard(ctx, boardWidth, boardHeight);
    }

    function drawBoard(canvasContext, width, height) {
        let i, j;
            for(j = 1; j < 4; ++j) {
                drawHexagon(
                    ctx,
                    0 * hexRectangleWidth + ((j % 2) * hexRadius),
                    j * (sideLength + hexHeight),
                    false
                );
            }
            for(j = 0; j < height+1; ++j) {
                drawHexagon(
                    ctx,
                    1 * hexRectangleWidth + ((j % 2) * hexRadius),
                    j * (sideLength + hexHeight),
                    false
                );
            }
            for(j = 0; j < height+1; ++j) {
                drawHexagon(
                    ctx,
                    2 * hexRectangleWidth + ((j % 2) * hexRadius),
                    j * (sideLength + hexHeight),
                    false
                );
            }
            for(j = 0; j < height+1; ++j) {
                drawHexagon(
                    ctx,
                    3 * hexRectangleWidth + ((j % 2) * hexRadius),
                    j * (sideLength + hexHeight),
                    false
                );
            }
            drawHexagon(
                ctx,
                4 * hexRectangleWidth + ((2 % 2) * hexRadius),
                2 * (sideLength + hexHeight),
                false
            );

        // for(i = 0; i < width; ++i) {
        //     for(j = 0; j < height; ++j) {
        //         drawHexagon(
        //             ctx,
        //             i * hexRectangleWidth + ((j % 2) * hexRadius),
        //             j * (sideLength + hexHeight),
        //             false
        //         );
        //     }
        // }
    }

    function drawHexagon(canvasContext, x, y, fill) {
        var fill = fill || false;

        canvasContext.beginPath();
        canvasContext.moveTo(x + hexRadius, y);
        canvasContext.lineTo(x + hexRectangleWidth, y + hexHeight);
        canvasContext.lineTo(x + hexRectangleWidth, y + hexHeight + sideLength);
        canvasContext.lineTo(x + hexRadius, y + hexRectangleHeight);
        canvasContext.lineTo(x, y + sideLength + hexHeight);
        canvasContext.lineTo(x, y + hexHeight);
        canvasContext.closePath();

        if(fill) {
            canvasContext.fill();
        } else {
            canvasContext.stroke();
        }
    }

})();
