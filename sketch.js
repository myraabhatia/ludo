var dicem;
var dice1,dice2,dice3,dice4,dice5,dice6;
var backgroundImg;

function preload(){
  dice1 = loadImage("images/1.png");
dice2 = loadImage("images/2.png");
dice3 = loadImage("images/3.png");
dice4 = loadImage("images/4.png");
dice5 = loadImage("images/5.png");
dice6 = loadImage("images/6.png");
dice6.scale = 0.1;
backgroundImg =  loadImage("images/ludo board.png");
}


function setup() {
  createCanvas(1000,700);
  

}


function draw() {
  background(backgroundImg);


  
 
  
  dice();
 
  drawSprites();
}
function dice(){
  var d1 = createSprite(50,50,40,40);
  
  if(mousePressedOver(d1)){
   
 
var rand = Math.round(random(1,6));
switch(rand){
case 1: d1.addImage(dice1);
break;
case 2: d1.addImage(dice2);
break;
case 3: d1.addImage(dice3);
break;
case 4: d1.addImage(dice4);
break;
case 5: d1.addImage(dice5);
break;
case 6: d1.addImage(dice6);
break;
default:break;

}

}
d1.scale = 0.5; 
console.log(rand);
}