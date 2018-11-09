var app = new PIXI.Application(window.screen.width, window.screen.height, {antialias: true, backgroundColor: 0xFFFFFF});
document.getElementById("canvas").appendChild(app.view);

var texture = PIXI.Texture.fromImage('image/wallpaper.jpg');
var wallpaper = new PIXI.Sprite(texture);
app.stage.addChild(wallpaper);
var initialPositionX = window.screen.width / 2 - 100;
var initialPositionY = window.screen.height / 2 - 100;
var oldObj = new PIXI.Graphics();
console.log(oldObj);

var trash = PIXI.Sprite.fromImage('image/trash.png');
trash.anchor.set(0.5);
trash.x = window.screen.width / 2 - 100;
trash.y = 20;
trash.interactive = true;
trash.buttonMode = true;
trash.visible = false;
app.stage.addChild(trash);

var rotate = PIXI.Sprite.fromImage('image/rotate.png');
rotate.anchor.set(0.5);
rotate.x = window.screen.width / 2 - 50;
rotate.y = 20;
rotate.interactive = true;
rotate.buttonMode = true;
rotate.visible = false;
app.stage.addChild(rotate);

var resizeBtn = PIXI.Sprite.fromImage('image/resize.png');
resizeBtn.anchor.set(0.5);
resizeBtn.x = window.screen.width / 2;
resizeBtn.y = 20;
resizeBtn.interactive = true;
resizeBtn.buttonMode = true;
resizeBtn.visible = false;
app.stage.addChild(resizeBtn);

var deselectBtn = PIXI.Sprite.fromImage('image/deselect.png');
deselectBtn.anchor.set(0.5);
deselectBtn.x = window.screen.width / 2 + 50;
deselectBtn.y = 20;
deselectBtn.interactive = true;
deselectBtn.buttonMode = true;
deselectBtn.visible = false;
app.stage.addChild(deselectBtn);

var borderBtn = document.getElementById("palette");
var fillerBtn = document.getElementById("palette2");

var borderColor = hex2string(borderBtn.value);
var fillerColor = hex2string(fillerBtn.value);

var squareModalBtn = document.getElementById("squareButton");
var rectangleModalBtn = document.getElementById("rectangleButton");
var circleModalBtn = document.getElementById("circleButton");
var triangleModalBtn = document.getElementById("triangleButton");
var starModalBtn = document.getElementById("starButton");
var lineModalBtn = document.getElementById("lineButton");
var textModalBtn = document.getElementById("textButton");
var okButton = document.getElementById("okbtn");

squareModalBtn.onclick = function () {
    $("#myModal").modal();
    okButton.value = 1;
};

rectangleModalBtn.onclick = function () {
    $("#myModal").modal();
    okButton.value = 2;
};

circleModalBtn.onclick = function () {
    $("#myModal").modal();
    okButton.value = 3;
};

triangleModalBtn.onclick = function () {
    $("#myModal").modal();
    okButton.value = 4;
};

starModalBtn.onclick = function () {
    $("#myModal").modal();
    okButton.value = 5;
};

lineModalBtn.onclick = function () {
    $("#myModal").modal();
    okButton.value = 6;
};

textModalBtn.onclick = function () {
    $("#myModal").modal();
    okButton.value = 7;
};

okButton.onclick = function () {
    console.log(okButton.value);
    borderColor = hex2string(borderBtn.value);
    fillerColor = hex2string(fillerBtn.value);

    switch (okButton.value) {
        case '1':
            square();
            break;
        case '2':
            rectangle();
            break;
        case '3':
            circle();
            break;
        case '4':
            triangle();
            break;
        case '5':
            star();
            break;
        case '6':
            line();
            break;
        case '7':
            console.log("text");
            addText(document.getElementById('inputText').value);
            break;
    }
};

function square() {
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
    menu(squareObj);
    events(squareObj);
    console.log(squareObj);
}

function rectangle() {
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
    menu(rectangleObj);
    events(rectangleObj);
}

function circle() {
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
    menu(circleObj);
    events(circleObj);
}

function triangle() {
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
    menu(triangleObj);
    events(triangleObj);
}

function line() {
    var lineObj = new PIXI.Graphics();
    lineObj.interactive = true;
    lineObj.cursor = 'pointer';
    borderColor = hex2string(borderBtn.value);
    lineObj.lineStyle(4, borderColor);
    lineObj.hitArea = new PIXI.Rectangle(initialPositionX, initialPositionY, initialPositionX + 208, initialPositionY + 30);
    lineObj.moveTo(initialPositionX, initialPositionY);
    lineObj.lineTo(initialPositionX + 200, initialPositionY);
    app.stage.addChild(lineObj);
    menu(lineObj);
    events(lineObj);
}

function star() {
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
    menu(starObj);
    events(starObj);
}

function addText(text) {
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
    menu(basicText);
    events(basicText);
}

function menu(object) {
    selectObject(object);
    deselectObjectWithBtn(object);
    rotateObject(object);
    deleteObject(object);
    resizeObject(object);
}

// setup events on shape

function events(object) {
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
        selectObject(object);
        resizeObject(object);
    };
}

// actions on shape or text

function selectObject(object) {
    trash.visible = true;
    rotate.visible = true;
    resizeBtn.visible = true;
    deselectBtn.visible = true;
    object.alpha = 0.5;
    if (oldObj !== object) {
        deselectObject(oldObj);
        oldObj = object;
    }
}

function deselectObject(object) {
    object.alpha = 1;
}

function deselectObjectWithBtn(object) {
    deselectBtn.click = function (e) {
        trash.visible = false;
        rotate.visible = false;
        resizeBtn.visible = false;
        deselectBtn.visible = false;
        object.alpha = 1;
    }
}

function deleteObject(object) {
    trash.click = function (e) {
        trash.visible = false;
        rotate.visible = false;
        resizeBtn.visible = false;
        deselectBtn.visible = false;
        app.stage.removeChild(object);
    }
}

function rotateObject(object) {
    rotate.click = function (e) {
        if (object.text === undefined) {
            object.pivot.set(initialPositionX + object.width / 2, initialPositionY + object.height / 2);
            object.position.x = initialPositionX + object.width / 2;
            object.position.y = initialPositionY + object.height / 2;
        }
        object.rotation += 0.785399;
    }
}

function resizeObject(object) {
    var resizeOkButton = document.getElementById("resizeOkBtn");
    var resizeInput = document.getElementById("resizeinput");

    resizeBtn.click = function (e) {
        $("#resizeModal").modal();
    };

    resizeOkButton.onclick = function (e) {
        var resizeValue = resizeInput.value;
        resizeInput.value = 1;
        if (object.text === undefined) {
            object.scale.x = resizeValue;
            object.scale.y = resizeValue;
            object.pivot.set(initialPositionX + object.width / 2, initialPositionY + object.height / 2);
            object.position.x = initialPositionX + object.width / 2;
            object.position.y = initialPositionY + object.height / 2;
        } else {
            object.scale.x = resizeValue;
            object.scale.y = resizeValue;
        }
    };

}

// managed drag-and-drop events

function onDragStart(event) {
    this.data = event.data;
    this.dragging = true;
    this.cursor = 'move';
    menu(this);
}

function onDragEnd() {
    this.dragging = false;
    this.data = null;
}

function onDragMove() {
    if (this.dragging) {
        var newPosition = this.data.getLocalPosition(this.parent);
        if (this.rotation > 0 || this.text !== undefined || this.scale.x !== 1) {
            this.position.x = newPosition.x;
            this.position.y = newPosition.y;
        } else {
            this.position.x = newPosition.x - initialPositionX;
            this.position.y = newPosition.y - initialPositionY;
        }

        console.log(newPosition);
    }
}

// convert hex from #000000 to 0x000000 (string)

function hex2string(hex) {
    hex = hex.toString(16);
    var result = "0x";
    for (var i = 1; i < hex.length; i++) {
        result += hex[i];
    }

    return result;
}