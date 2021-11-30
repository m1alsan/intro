function setup() {
	let cnv = createCanvas(600, 600);
	cnv.parent("div");
	
	noStroke();
	colorMode(HSB, 360, 100, 100, 100);
	frameRate(10);
}

function draw() {
	background("black");
	ellipse(random(width), random(height), 100, 100);
}
