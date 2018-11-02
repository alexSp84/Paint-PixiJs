var app = new PIXI.Application(1200, 1000, {antialias: true, backgroundColor: 0xFFFFFF});
document.getElementById("canvas").appendChild(app.view);

var squareObj = new PIXI.Graphics();
var rectangleObj = new PIXI.Graphics();
var circleObj = new PIXI.Graphics();
var triangleObj = new PIXI.Graphics();

squareObj.interactive = true;
squareObj.lineStyle(4, 0x000000);
rectangleObj.interactive = true;
rectangleObj.lineStyle(4, 0x000000);
circleObj.interactive = true;
circleObj.lineStyle(4, 0x000000);
triangleObj.interactive = true;
triangleObj.lineStyle(4, 0x000000);

move(squareObj);
move(rectangleObj);
move(circleObj);
move(triangleObj);

function square() {
    squareObj.drawRect(0, 0, 200, 200);
    squareObj.hitArea = new PIXI.Rectangle(0, 0, 200, 200);
    app.stage.addChild(squareObj);
}

function rectangle() {
    rectangleObj.drawRect(0, 0, 300, 100);
    rectangleObj.hitArea = new PIXI.Rectangle(0, 0, 300, 100);
    app.stage.addChild(rectangleObj);
}

function circle() {
    circleObj.hitArea = new PIXI.Circle(50, 50, 50);
    circleObj.drawCircle(50, 50, 50);
    app.stage.addChild(circleObj);
}

function triangle() {
    triangleObj.hitArea = new PIXI.Rectangle(0, 0, 200, 200);
    triangleObj.moveTo(0, 0);
    triangleObj.lineTo(0, 200);
    triangleObj.lineTo(200, 200);
    triangleObj.lineTo(0, 0);
    app.stage.addChild(triangleObj);
}

// setup events
function move(object) {
    object
        .on('mousedown', onDragStart)
        .on('touchstart', onDragStart)
        .on('mouseup', onDragEnd)
        .on('mouseupoutside', onDragEnd)
        .on('touchend', onDragEnd)
        .on('touchendoutside', onDragEnd)
        .on('mousemove', onDragMove)
        .on('touchmove', onDragMove);
}


// managed drag-and-drop events
function onDragStart(event)
{
    this.data = event.data;
    this.alpha = 0.5;
    this.dragging = true;
    this.cursor = 'move';
}

function onDragEnd()
{
    this.alpha = 1;
    this.dragging = false;
    this.data = null;
}

function onDragMove()
{
    if (this.dragging)
    {
        var newPosition = this.data.getLocalPosition(this.parent);
        this.position.x = newPosition.x;
        this.position.y = newPosition.y;
        console.log(newPosition);
    }
}
