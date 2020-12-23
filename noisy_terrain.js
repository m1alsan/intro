function setup(){
  createCanvas(600, 600);
  background('black');
  noStroke();
}

function draw(){
}

function draw_terrain(){
  for(var x=100;x<500;x=x+5){
for(var y=100;y<500;y=y+5;){


circle(x,y,2);
}
  }
}
