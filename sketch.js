var bullet , wall;
var speed,weight,thickness;
var damage;

function setup() {
  createCanvas(1366,629);
  bullet = createSprite(100,310, 99, 20);
  bullet.shapeColor='yellow'
 
 

 wall = createSprite(1200,310,thickness,height/2);
wall.shapeColor = color(80,80,80);

thickness=Math.round(random(22,83));
speed=Math.round(random(223,321));
weight=Math.round(random(32,52));

}

function draw() {
  background('black');

  bullet.velocityX=speed;

  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  
  
  textSize(25);
  stroke('aqua')
  text('SPEED :' + speed,50,50);
  
  textSize(25);
  stroke('white')
  text("WEIGHT :" + weight + "KG",220,50);
  
  textSize(25);
  stroke('Magenta')
  text("DAMAGE :" + damage,800,50);

  textSize(25);
  stroke('orange')
  text('THICKNESS OF WALL :' + thickness,450,50);
  
  textSize(25);
  stroke('red');
  text("WALL COLOR RED MEANS MORE DAMAGE",40,560);

  textSize(25);
  stroke("limegreen");
  text("WALL COLOR GREEN MEANS LESS DAMAGE",40,590)
  drawSprites();

 if( hascollided(bullet,wall)){
   bullet.velocityX=0;
   var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

   if(damage>10){
     wall.shapeColor='red';
   }

   if(damage<10){
     wall.shapeColor='limegreen';
   }
 }

 if (keyDown("space")){
   bullet.x=100;
   bullet.velocityX=speed;
   wall.shapeColor=color(80,80,80);
 }
 
}
function hascollided(lbullet,lwall){

  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}
