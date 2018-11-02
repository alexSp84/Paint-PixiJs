var app = new PIXI.Application(1200, 1000, {antialias: true, backgroundColor: 0xFFFFFF});
document.getElementById("canvas").appendChild(app.view);

var graphics = new PIXI.Graphics();

graphics.interactive = true;
graphics.lineStyle(4, 0x000000);

graphics
    .on('mousedown', onDragStart)
    .on('touchstart', onDragStart)
    .on('mouseup', onDragEnd)
    .on('mouseupoutside', onDragEnd)
    .on('touchend', onDragEnd)
    .on('touchendoutside', onDragEnd)
    .on('mousemove', onDragMove)
    .on('touchmove', onDragMove);


function square() {
    graphics.drawRect(0, 0, 200, 200);
    graphics.hitArea = new PIXI.Rectangle(0, 0, 200, 200);
    app.stage.addChild(graphics);
}

function rectangle() {
    graphics.drawRect(200, 400, 300, 100);
    graphics.hitArea = new PIXI.Rectangle(200, 400, 300, 100);
    app.stage.addChild(graphics);
}

function circle() {
    graphics.hitArea = new PIXI.Circle(500, 200, 50);
    graphics.drawCircle(500, 200, 50);
    app.stage.addChild(graphics);
}

function triangle() {
    graphics.hitArea = new PIXI.Rectangle(700, 600, 200, 200);
    graphics.moveTo(700, 600);
    graphics.lineTo(700, 800);
    graphics.lineTo(900, 800);
    graphics.lineTo(700, 600);
    app.stage.addChild(graphics);
}

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
