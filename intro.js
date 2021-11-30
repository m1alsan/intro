function setup() {
	let cnv = createCanvas(displayWidth, displayHeight);
	cnv.parent("canvas");
	
	noStroke();
	colorMode(HSB, 360, 100, 100, 100);
	frameRate(5);
	fill(200, 50, 80, 20);
}

function draw() {
	ellipse(random(width), random(height), 100, 100);
}
