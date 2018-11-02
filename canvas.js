var app = new PIXI.Application(1200, 1000, {antialias: true, backgroundColor: 0xFFFFFF});
document.getElementById("canvas").appendChild(app.view);

var graphics = new PIXI.Graphics();

graphics.interactive = true;
graphics.hitArea = new PIXI.Rectangle(0, 0, 1200, 1000);


function square() {
    graphics.click = function () {
        console.log("click");
        graphics.lineStyle(4, 0x000000);
        graphics.drawRect(200, 100, 200, 200);
    };
    app.stage.addChild(graphics);
}

function rectangle() {
    graphics.click = function () {
        console.log("click");
        graphics.lineStyle(4, 0x000000);
        graphics.drawRect(200, 400, 300, 100);
    };
    app.stage.addChild(graphics);
}

function circle() {
    graphics.click = function () {
        console.log("click");
        graphics.lineStyle(4, 0x000000);
        graphics.drawCircle(500, 200, 50);
    };
    app.stage.addChild(graphics);
}

function triangle() {
    graphics.click = function () {
        console.log("click");
        graphics.lineStyle(4, 0x000000);
        graphics.moveTo(700, 600);
        graphics.lineTo(700, 800);
        graphics.lineTo(900, 800);
        graphics.lineTo(700, 600);
    };
    app.stage.addChild(graphics);
}