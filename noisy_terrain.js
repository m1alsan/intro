function setup(){
  createCanvas(950, 600);
  background('black');
  noStroke();
  colorMode(HSB,360,100,100,100);
}

function draw(){
  draw_terrain();
}

function draw_terrain(){
  for(var x=100;x<500;x=x+10){
    for(var y=100;y<500;y=y+10){
			
			let x2=x+y/2;
			let h=200*noise(x/200,y/200);
			h+=30*noise(x/50,y/50);
			let y2=y+h-100;
			
			
      fill((map(h,0,230,0,360)+120)%360,80,map(h,0,230,80,0),90);
      circle(x2,y2,2);
      
    }
  }
}
