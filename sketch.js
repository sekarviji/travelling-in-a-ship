
function preload(){

}

function setup(){
  createCanvas(400,400);
  
}

function draw() {
  background("blue");
 
}

seaImg = loadImage(sea.png)
shipImg1 = loadAnimation(//list the names of png files that you want to load);

spriteName.addImage(seaImg);

//code to reset the background
if(sea.x < 0){
  sea.x = sea.width/2;
}