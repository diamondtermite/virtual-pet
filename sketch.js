var database;
var foodCount,dogsprite,dogImg1,dogImg2
function preload()
{
dogImg1=loadImage("images/dogImg.png");
dogImg2=loadImage("images/dogImg.png");
}

function setup() {
	createCanvas(1000, 700);
  
  database=firebase.database()
  var locationOfChild = database.ref("food")
  locationOfChild.on("value",readFoodCount,showError)
}


function draw() {  
background("red")
  drawSprites();
  if(keyDown(UP_ARROW)){
updateFoodCount();
  }
  fill(255);
  textSize(20);
text("foodcoumt ="+foodCount,500,350)
}
function readFoodCount(data){
  foodCount=data.val()
}
function showError(){
  console.log("there is an error");
}
function updateFoodCount(){
if(foodCount>0){
  foodCount-=1;
database.ref("/").set({
  food:foodCount
})
}
}

