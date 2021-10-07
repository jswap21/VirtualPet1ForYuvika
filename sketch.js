//Create variables here
var dog,dogImage,dogImage1;
var database;
var foodS,foodstock;

function preload()
{
	//load images here
  dogImage=loadImage('images/dogImg.png');
  dogImage1=loadImage('images/dogImg1.png');
}

function setup() {
	database=firebase.database();
  createCanvas(500,500);
  dog=createSprite(200,50,50,50);
  dog.addImage(dogImage);
  dog.scale=0.15;
  foodstock=database.ref('Food');
  foodstock.on("value",readStock);
  textSize(20); 
  }


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogImage1);
}
  drawSprites();
  //add styles here
  fill(255,255,254);
  stroke("blue");
  text("food remaining : "+foodS,170,200);
 // textFont(inconsolata);
  textSize(15);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10)
}
//Function to read values from DB
function readStock(data){
  foodS=data.val();
}

//Function to write values in DB
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 
  database.ref('/').update({
    Food:x
  })
}



