var app = new PIXI.Application(window.screen.width, window.screen.height, {antialias: true, backgroundColor: 0xFFFFFF});
document.getElementById("canvas").appendChild(app.view);

var color = document.getElementById("palette");

var trash = PIXI.Sprite.fromImage('image/trash.png');
trash.anchor.set(0.5);
trash.x = window.screen.width / 2;
trash.y = 20;
trash.interactive = true;
trash.buttonMode = true;
app.stage.addChild(trash);

var rotate = PIXI.Sprite.fromImage('image/rotate.png');
rotate.anchor.set(0.5);
rotate.x = window.screen.width / 2 + 50;
rotate.y = 20;
rotate.interactive = true;
rotate.buttonMode = true;
app.stage.addChild(rotate);

var color = document.getElementById("palette");
var colorBtn = PIXI.Sprite.fromImage('image/palette.png');
colorBtn.anchor.set(0.5);
colorBtn.x = window.screen.width / 2 + 100;
colorBtn.y = 20;
colorBtn.interactive = true;
colorBtn.buttonMode = true;
app.stage.addChild(colorBtn);

function square() {
    var squareObj = new PIXI.Graphics();
    squareObj.interactive = true;
    squareObj.lineStyle(4, 0x000000);
    squareObj.drawRect(0, 0, 200, 200);
    squareObj.hitArea = new PIXI.Rectangle(0, 0, 200, 200);
    app.stage.addChild(squareObj);
    move(squareObj);
}

function rectangle() {
    var rectangleObj = new PIXI.Graphics();
    rectangleObj.interactive = true;
    rectangleObj.lineStyle(4, 0x000000);
    rectangleObj.drawRect(0, 0, 300, 100);
    rectangleObj.hitArea = new PIXI.Rectangle(0, 0, 300, 100);
    app.stage.addChild(rectangleObj);
    move(rectangleObj);
}

function circle() {
    var circleObj = new PIXI.Graphics();
    circleObj.interactive = true;
    circleObj.lineStyle(4, 0x000000);
    circleObj.hitArea = new PIXI.Circle(50, 50, 50);
    circleObj.drawCircle(50, 50, 50);
    app.stage.addChild(circleObj);
    move(circleObj);
}

function triangle() {
    var triangleObj = new PIXI.Graphics();
    triangleObj.interactive = true;
    triangleObj.lineStyle(4, 0x000000);
    triangleObj.hitArea = new PIXI.Rectangle(0, 0, 200, 200);
    triangleObj.moveTo(0, 0);
    triangleObj.lineTo(0, 200);
    triangleObj.lineTo(200, 200);
    triangleObj.lineTo(0, 0);
    app.stage.addChild(triangleObj);
    move(triangleObj);
}

function line() {
    var lineObj = new PIXI.Graphics();
    lineObj.interactive = true;
    lineObj.lineStyle(4, 0x000000);
    lineObj.hitArea = new PIXI.Rectangle(0, 0, 208, 30);
    lineObj.moveTo(4, 4);
    lineObj.lineTo(204, 4);
    app.stage.addChild(lineObj);
    move(lineObj);
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

    object.click = function (e) {
        console.log(this, e);
        deleteObject(object);
        rotateObject(object);
        paintObject(object);
    }
}

function deleteObject(object) {
    trash.click = function (e) {
        object.clear();
    }
}

function rotateObject(object) {
    rotate.click = function (e) {
        object.rotation += 0.785399;
    }
}

function paintObject(object) {
    colorBtn.click = function (e) {
        color.click();
    };
    var selected = color.value;
    console.log(selected);
    object.lineColor = selected;
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
