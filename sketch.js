const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var drops = [];
var rand;
var umbrella;
var thunder1,thunder2;
var thunder;

var maxDrops=100;

function preload(){
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
}



function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(400,700);
  
    if(frameCount % 150 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new createDrop(random(0,400), random(0,400)));
        }
    

    }

  umbrella = new Umbrella(200,400,10);
    
}

function draw(){
    Engine.update(engine);
    background(0); 

   

    //displaying rain drops
    for(var i = 0; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].updateY()
        
    }


    umbrella.display();

    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370),random(10,30),10,10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6);
    }

    drawSprites();
}   