function setup(){
  createCanvas(950, 600);
  background('black');
  noStroke();
  colorMode(HSB,360,100,100,100);

}

function draw(){

  background('black');
  draw_terrain(random(-10,10));

}

function draw_terrain(r){
  for(var x=100;x<500;x=x+10){
    for(var y=100;y<500;y=y+10){

			let x2=x+y/2;
			let h=200*noise(x/200,y/200);
			h+=30*noise(x/50,y/50);
			let y2=y+h-100;


      fill((map(h,0,230,0,360)+120)%360,80,map(h,0,230,100,50),90);

      circle(x2+r,y2+r,2);

    }
  }
}
