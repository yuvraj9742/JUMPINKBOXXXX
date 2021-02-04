var canvas;
var music;
var surface1;
var surface2;
var surface3;
var surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces;
surface1=createSprite(100,590,150,10);


surface2=createSprite(300,590,150,10);
surface3=createSprite(500,590,150,10);
surface4=createSprite(700,590,150,10);

    //create box sprite and give velocity
box=createSprite(random(20,750),100,40,40)
box.velocityY=1;
box.velocityX=3;


   
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges=createEdgeSprites();
box.bounceOff(edges);




    //add condition to check if box touching surface and make it box
  if(surface2.isTouching(box)){
     box.shapecolour=rgb(255,128,0);
   }
    drawSprites();
}
