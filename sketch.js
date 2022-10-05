function preload() {
    pathImg = loadImage("path.png");
    turtle_running = loadAnimation(
        "tartaruga1.png",
        "tartaruga2.png",
        "tartaruga3.png"
    );
}

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0);

    drawSprites();
}
