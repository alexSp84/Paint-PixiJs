var app = new PIXI.Application(1200, 1000, {antialias: true, backgroundColor: 0xFFFFFF});
document.getElementById("canvas").appendChild(app.view);

var graphics = new PIXI.Graphics();

graphics.interactive = true;
graphics.hitArea = new PIXI.Rectangle(200, 0, 800, 600);

square();

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