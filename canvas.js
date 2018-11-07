var app = new PIXI.Application(window.screen.width, window.screen.height, {antialias: true, backgroundColor: 0xFFFFFF});
document.getElementById("canvas").appendChild(app.view);

var texture = PIXI.Texture.fromImage('image/wallpaper.jpg');
var wallpaper = new PIXI.Sprite(texture);
app.stage.addChild(wallpaper);
var initialPositionX = window.screen.width / 2 - 100;
var initialPositionY = window.screen.height / 2 - 100;
var tempRotate = false;

var trash = PIXI.Sprite.fromImage('image/trash.png');
trash.anchor.set(0.5);
trash.x = window.screen.width / 2 - 50;
trash.y = 20;
trash.interactive = true;
trash.buttonMode = true;
trash.visible = false;
app.stage.addChild(trash);

var rotate = PIXI.Sprite.fromImage('image/rotate.png');
rotate.anchor.set(0.5);
rotate.x = window.screen.width / 2;
rotate.y = 20;
rotate.interactive = true;
rotate.buttonMode = true;
rotate.visible = false;
app.stage.addChild(rotate);

var borderBtn = document.getElementById("palette");
var fillerBtn = document.getElementById("palette2");

var borderColor = hex2string(borderBtn.value);
var fillerColor = hex2string(fillerBtn.value);

function square() {
    var isRotated = false;
    tempRotate = false;
    var squareObj = new PIXI.Graphics();
    squareObj.interactive = true;
    squareObj.cursor = 'pointer';
    borderColor = hex2string(borderBtn.value);
    fillerColor = hex2string(fillerBtn.value);
    squareObj.lineStyle(4, borderColor);
    squareObj.beginFill(fillerColor);
    squareObj.drawRect(initialPositionX, initialPositionY, 200, 200);
    squareObj.endFill();
    squareObj.hitArea = new PIXI.Rectangle(initialPositionX, initialPositionY, 200, 200);
    app.stage.addChild(squareObj);
    move(squareObj, isRotated);
}

function rectangle() {
    var isRotated = false;
    tempRotate = false;
    var rectangleObj = new PIXI.Graphics();
    rectangleObj.interactive = true;
    rectangleObj.cursor = 'pointer';
    borderColor = hex2string(borderBtn.value);
    fillerColor = hex2string(fillerBtn.value);
    rectangleObj.lineStyle(4, borderColor);
    rectangleObj.beginFill(fillerColor);
    rectangleObj.drawRect(initialPositionX, initialPositionY, 300, 100);
    rectangleObj.endFill();
    rectangleObj.hitArea = new PIXI.Rectangle(initialPositionX, initialPositionY, 300, 100);
    app.stage.addChild(rectangleObj);
    move(rectangleObj, isRotated);
}

function circle() {
    var isRotated = false;
    tempRotate = false;
    var circleObj = new PIXI.Graphics();
    circleObj.interactive = true;
    circleObj.cursor = 'pointer';
    borderColor = hex2string(borderBtn.value);
    fillerColor = hex2string(fillerBtn.value);
    circleObj.lineStyle(4, borderColor);
    circleObj.beginFill(fillerColor);
    circleObj.hitArea = new PIXI.Circle(initialPositionX + 100, initialPositionY + 100, 100);
    circleObj.drawCircle(initialPositionX + 100, initialPositionY + 100, 100);
    circleObj.endFill();
    app.stage.addChild(circleObj);
    move(circleObj, isRotated);
}

function triangle() {
    var isRotated = false;
    tempRotate = false;
    var triangleObj = new PIXI.Graphics();
    triangleObj.interactive = true;
    triangleObj.cursor = 'pointer';
    borderColor = hex2string(borderBtn.value);
    fillerColor = hex2string(fillerBtn.value);
    triangleObj.lineStyle(4, borderColor);
    triangleObj.beginFill(fillerColor);
    triangleObj.hitArea = new PIXI.Rectangle(initialPositionX, initialPositionY, 200, 200);
    triangleObj.moveTo(initialPositionX, initialPositionY);
    triangleObj.lineTo(initialPositionX, initialPositionY + 200);
    triangleObj.lineTo(initialPositionX + 200, initialPositionY + 200);
    triangleObj.lineTo(initialPositionX, initialPositionY);
    triangleObj.endFill();
    app.stage.addChild(triangleObj);
    move(triangleObj, isRotated);
}

function line() {
    var isRotated = false;
    tempRotate = false;
    var lineObj = new PIXI.Graphics();
    lineObj.interactive = true;
    lineObj.cursor = 'pointer';
    borderColor = hex2string(borderBtn.value);
    lineObj.lineStyle(4, borderColor);
    lineObj.hitArea = new PIXI.Rectangle(initialPositionX, initialPositionY, initialPositionX + 208, initialPositionY + 30);
    lineObj.moveTo(initialPositionX, initialPositionY);
    lineObj.lineTo(initialPositionX + 200, initialPositionY);
    app.stage.addChild(lineObj);
    move(lineObj, isRotated);
}

function star() {
    var isRotated = false;
    tempRotate = false;
    var starObj = new PIXI.Graphics();
    starObj.interactive = true;
    starObj.cursor = 'pointer';
    borderColor = hex2string(borderBtn.value);
    fillerColor = hex2string(fillerBtn.value);
    starObj.lineStyle(4, borderColor);
    starObj.beginFill(fillerColor);
    starObj.hitArea = new PIXI.Rectangle(initialPositionX, initialPositionY, initialPositionX + 200, initialPositionY + 200);
    starObj.drawStar(initialPositionX + 100, initialPositionY + 100, 5, 100);
    starObj.endFill();
    app.stage.addChild(starObj);
    move(starObj, isRotated);
}

function addText(text) {
    var isRotated = true;
    tempRotate = true;
    borderColor = hex2string(borderBtn.value);
    var style = new PIXI.TextStyle({
        fill: borderColor
    });
    var basicText = new PIXI.Text(text, style);
    basicText.x = initialPositionX;
    basicText.y = initialPositionY;
    basicText.interactive = true;
    basicText.cursor = 'pointer';
    borderColor = hex2string(borderBtn.value);
    app.stage.addChild(basicText);
    move(basicText, isRotated);
}

// setup events
function move(object, isRotated) {
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
        selectedObject(object, isRotated);
        deleteObject(object);
        rotateObject(object, isRotated);
    }
}

function selectedObject(isRotated) {
    trash.visible = true;
    rotate.visible = true;
}

function deleteObject(object) {
    trash.click = function (e) {
        trash.visible = false;
        rotate.visible = false;
        app.stage.removeChild(object);
    }
}

function rotateObject(object, isRotated) {
    rotate.click = function (e) {
        object.pivot.set(initialPositionX + object.width / 2, initialPositionY + object.height / 2);
        object.position.x = initialPositionX + object.width / 2;
        object.position.y = initialPositionY + object.height / 2;
        object.rotation += 0.785399;
        isRotated = true;
        tempRotate = isRotated;
    }
}

// managed drag-and-drop events
function onDragStart(event) {
    this.data = event.data;
    this.alpha = 0.5;
    this.dragging = true;
    this.cursor = 'move';
}

function onDragEnd() {
    this.alpha = 1;
    this.dragging = false;
    this.data = null;
}

function onDragMove() {
    if (this.dragging) {
        var newPosition = this.data.getLocalPosition(this.parent);
        if (tempRotate) {
            this.position.x = newPosition.x;
            this.position.y = newPosition.y;
        } else {
            this.position.x = newPosition.x - initialPositionX;
            this.position.y = newPosition.y - initialPositionY;
        }

        console.log(newPosition);
    }
}

function hex2string(hex) {
    hex = hex.toString(16);
    var result = "0x";
    for (var i = 1; i < hex.length; i++) {
        result += hex[i];
    }

    return result;
}