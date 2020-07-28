const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var  ground;
function setup(){
    var canvas = createCanvas(800,500);
    engine = Engine.create();
    world = engine.world;
    
    box1 = new Box(340,410,30,35);
    box2 = new Box(370,410,30,35);
    box3 = new Box(400,410,30,35);
    box4 = new Box(430,410,30,35);
    box5 = new Box(460,410,30,35);
    box6 = new Box(355,385,30,35);
    box7 = new Box(385,385,30,35);
    box8 = new Box(415,385,30,35);
    box9 = new Box(445,385,30,35);
    box10 = new Box(370,345,30,35);
    box11 = new Box(400,345,30,35);
    box12 = new Box(430,345,30,35);
    box13 = new Box(385,310,30,35);
    box14 = new Box(415,310,30,35);
    box15 = new Box(400,285,30,35);
    box16 = new Box(560,300,30,35);
    box17 = new Box(590,300,30,35);
    box18 = new Box(620,300,30,35);
    box19 = new Box(650,300,30,35);
    box20 = new Box(680,300,30,35);
    box21 = new Box(590,265,30,35);
    box22 = new Box(620,265,30,35);
    box23 = new Box(650,265,30,35);
    box24 = new Box(620,230,30,35);
    ball1 = new Ball(200,300,40,50);
    slingshot = new Slingshot(ball1.body,{x:200, y:250});

    ground = new Ground (400,490,800,10);
    ground2 = new Ground (400,430,150,10);
    ground3 = new Ground (620,320,150,10);
}

function draw(){
    background(0);
    text(mouseX+"  "+mouseY)
    Engine.update(engine);
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    ball1.display();
    slingshot.display();
    ground.display();
   ground2.display();
   ground3.display();
}
 function mouseDragged(){
    Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
 }
 function mouseReleased(){
    slingshot.fly();
    
}