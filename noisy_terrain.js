function setup(){
  createCanvas(600, 600);
  background('black');
  noStroke();
  colorMode(HSB,360,100,100,100);
}

function draw(){
  draw_terrain();
}

function draw_terrain(){
  for(var x=100;x<500;x=x+5){
    for(var y=100;y<500;y=y+5){

      fill(0,0,100);
      circle(x,y,2);
      
    }
  }
}
