var car,boy,path,coin,coinG,fuelcan,fuelcanG,car1,car2,car3,car4,car5;
var carImg,boyImg,pathImg,coinImg,fuelcanImg,car1Img,car2Img,car3Img,car4Img,car5Img;
var score=0;
var wc,rc,bc,bc1,gc;

function preload(){
  carImg = loadImage("blue_car3.png");
 // boyImg = loadAnimation("boy1.running.gif");
  pathImg = loadImage("Path.image.png");
  coinImg = loadImage("coins.image.png");
  fuelcanImg = loadImage("fuel.can2.png");
  car1Img = loadImage("car1.png");
  car2Img = loadImage("car2.png");
  car3Img = loadImage("car4.png");
  car4Img = loadImage("black_car1.png");
  car5Img = loadImage("green_car2.png");

}

function setup() {
  createCanvas(1500,600);
 //createSprite(400, 200, 50, 50);

 path = createSprite(650,340);
 path.addImage(pathImg);
 path.velocityY = 10;

 

 //boy = createSprite(600,480,20,20);
 //boy.addAnimation(boyImg);
 //boy.velocityY = 4;

 car = createSprite(400,470,20,20);
 car.addImage(carImg);
 car.scale = 0.2;
 
 coinG = new Group()
 fuelcanG = new Group()
//carsG = new Group()
car1G = new Group()
 car2G = new Group()
 car3G =  new Group()
 car4G =  new Group()
 car5G =  new Group()

 carGroup = createGroup();

}

function draw() {
  
 // background(0); 

 text("Score: "+ score, 400,200);
 

  fill("blue");
  textSize(40);
  text("Game Over",400,300);
  fill("yellow");
  text("Press RESET BUTTON to play again",400,400);

  car.x = World.mouseX;
  
  edges= createEdgeSprites();
  car.collide(edges);

  if(path.y>600){
    path.y = height/2;
  }

  createCoin(); 
  createFuelcan();
  WhiteCar();
  RedCar(); 
  BlackCar();
  Black1Car();
  GreenCar();
  

  if(coinG.isTouching(car)){
    coinG.destroyEach();
  }

  if(fuelcanG.isTouching(car)){
    fuelcanG.destroyEach();
  }

  if(car.isTouching(car1G)|| car.isTouching(car2G)|| car.isTouching(car3G) || car.isTouching(car4G) || car.isTouching(car5G)){
   // background("black"); 
    car1G.setVelocityY(0);
    car2G.setVelocityY(0);
    car3G.setVelocityY(0);
    car4G.setVelocityY(0);
    car5G.setVelocityY(0);
    coinG.setVelocityYEach(0);
    fuelcanG.setVelocityYEach(0);
    path.velocityY = 0;
  

  }


  drawSprites();
}

function createCoin(){
  if(World.frameCount % 50 == 0){
    var coin = createSprite(Math.round(random(10,1500),100,100,50))
    coin.addImage(coinImg);
    coinG.add(coin);
    coin.scale = 0.07;
    coin.velocityY=10;
    

  }
}

function createFuelcan(){
  if(World.frameCount % 300 == 0){
    var fuelcan = createSprite(Math.round(random(10,1500),100,100,50))
    fuelcan.addImage(fuelcanImg);
    fuelcanG.add(fuelcan);
    fuelcan.scale = 0.1;
    fuelcan.velocityY=10;
  }
}

function WhiteCar(){
  if(World.frameCount % 100 == 0){
  var wc = createSprite(Math.round(random(10,1490),100,100,50));
  wc.addImage(car1Img);
  wc.velocityY= 10;
  wc.scale = 2;
  car1G.add(wc);
 } 
}

function RedCar(){
  if(World.frameCount % 120 == 0){
  var rc = createSprite(Math.round(random(10,1490),100,100,50));
  rc.addImage(car2Img);
  rc.velocityY=10;
  rc.scale = 2;
  car2G.add(rc);
 } 
}

function GreenCar(){
  if(World.frameCount % 140 == 0){
  var gc = createSprite(Math.round(random(10,1490),100,100,50));
  gc.addImage(car5Img);
  gc.velocityY=10;
  gc.scale =0.2;
  car5G.add(gc);
 } 
}

function BlackCar(){
  if(World.frameCount % 160 == 0){
  var bc = createSprite(Math.round(random(10,1490),100,100,50));
  bc.addImage(car3Img);
  bc.velocityY=10;
  bc.scale = 2;
  car3G.add(bc);
 } 
}

function Black1Car(){
  if(World.frameCount % 180 == 0){
  var bc1 = createSprite(0,Math.round(random(10,1490),100,100,50));
  bc1.addImage(car4Img);
  bc1.velocityY=10;
  bc1.scale = 0.2;
  car4G.add(bc1);
 } 
}



