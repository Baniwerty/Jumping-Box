var canvas;
var music;
var surface1,surface2,surface3,surface4,box;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(900,600);
    music.play();
    //create 4 different surfaces
    surface1=createSprite(105,570,200,50);
    surface2=createSprite(345,570,200,50);
    surface3=createSprite(570,570,200,50);
    surface4=createSprite(795,570,200,50);
     surface1.shapeColor="red";
     surface2.shapeColor="blue";
     surface3.shapeColor="green";
     surface4.shapeColor="yellow";
    //create box sprite and give velocity
   box=createSprite(random(20,750),100,50,50);
   box.velocityX=6;
}

function draw() {
    background(rgb(169,169,169));
    drawSprites();
    
    //create edgeSprite
  createEdgeSprites();
   box.bounceOff(edges);
   box.bounceOff(surface1);
   box.bounceOff(surface3);
   box.bounceOff(surface4);

    //add condition to check if box touching surface and make it bounce
    if (surface1.isTouching(box)&& box.bounceOff(surface1)){
      box.shapeColor=surface1.shapeColor;
      
    } else if (surface2.isTouching(box)){
        box.velocityX=0;
        box.shapeColor=surface2.shapeColor;
        music.stop();
    }else if (surface3.isTouching(box)&& box.bounceOff(surface3)){
        box.shapeColor=surface3.shapeColor;
        
    }else if (surface4.isTouching(box)&& box.bounceOff(surface4)){
        box.shapeColor=surface4.shapeColor;
    }
}
