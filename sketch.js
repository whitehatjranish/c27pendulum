
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var thread,bob,plank;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var plank_options={
    isStatic : true
  }


  var thread_options={
    isStatic: true
  }

  plank = Bodies.rectangle(200,330,400,20,plank_options)
  World.add(world,plank);

thread = Bodies.rectangle(200,100,200,20,thread_options);
World.add(world,thread);

var bob_options = {

  restitution : 1.0,
  density : 1.0

}

bob  = Bodies.circle(220,200,40,bob_options);
World.add(world,bob);


var options = {
  bodyA : bob,
  bodyB : thread,
  stiffness: 0.004,
  length : 100
}
var string = Constraint.create(options);
World.add(world,string);

fill("WHite");
}


function draw() {
  background(0); 
  Engine.update(engine);




  fill ("brown");
rectMode(CENTER);
rect(thread.position.x,thread.position.y,200,20);

fill(0);
rectMode(CENTER);
rect(plank.position.x,plank.position.y,400,20);


fill("blue")
ellipseMode(RADIUS);
ellipse(bob.position.x,bob.position.y,40);

strokeWeight(8);
stroke("white");
line(bob.position.x,bob.position.y,thread.position.x,thread.position.y)




if(keyCode===LEFT_ARROW){
bob.position.y = mouseY;
bob.position.x = mouseX;
}

else if (keyCode === RIGHT_ARROW){
bob.position.x = 200;
}
plank.debug=true;
bob.debug=true;
thread.debug=true;
}