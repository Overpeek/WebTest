var vertices = [];
var vert_count = 12;
var width = 0;
var height = 0;


function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(45);

	windowResized();
}

function draw() {
	background(52);
	translate(width * 0.5, height * 0.5);

	// main draw
	fill(0, 0, 0, 0);
	strokeWeight(2);
	stroke(255, 0, 255, 255);
	
	for (var i = 0; i < vert_count; i++) {
		vertices[i].render(vertices, vert_count);
	}
	
	// update
	for (var i = 0; i < vert_count; i++) {
		vertices[i].update();
	}
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	width = windowWidth;
	height = windowHeight;
	
	for (var i = 0; i < vert_count; i++) {
		vertices[i] = new vert(random(-width, height)*0.5, random(-width, height)*0.5, random(0, TWO_PI), random(0, TWO_PI));
	}
}