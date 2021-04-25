
var cat, catImg1, cat2, catImg2, cat3, catImg3, cat4, catImg4, mouseImg1, mouse, mouseImg2, mouseImg3;
var cat_running;
var backgroundImg, background;

function preload() {
  //load the images here
  catImg1 = loadAnimation("images/cat1.png");
  catImg2 = loadAnimation("images/cat2.png", "images/cat3.png")
  catImg3 = loadAnimation("images/cat4.png")

  mouseImg1 = loadAnimation("images/mouse1.png");
  mouseImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png")
  mouseImg3 = loadAnimation("images/mouse4.png")

  backgroundImg = loadImage("images/garden.png");
}

function setup() {
  createCanvas(1000, 800);
  //create tom and jerry sprites here
  cat = createSprite(870, 600);
  cat.addAnimation("catSleeping", catImg1)
  cat.scale = 0.2

  mouse = createSprite(200, 600);
  mouse.addAnimation("mouseStanding", mouseImg1)
  mouse.scale = 0.15

  //background=createSprite(500,500,1000,800);
  //background.addImage("background",backgroundImg);
}

function draw() {

  background(backgroundImg);
  //Write condition here to evalute if tom and jerry collide
  if (cat.x - mouse.x < (cat.width - mouse.width) / 2) {
    cat.velocityX = 0
    cat.addAnimation("catImg3", catImg3)
    cat.x = 300
    cat.scale = 0.2
    cat.changeAnimation("catImg3")

    mouse.addAnimation("mouseImg3", mouseImg3)
    mouse.scale = 0.15
    mouse.changeAnimation("mouseImg3")
  }

  //  keyPressed();
  drawSprites();
}


function keyPressed() {

  //For moving and changing animation write code here
  if (keyCode === LEFT_ARROW) {
    cat.velocityX = -5
    cat.addAnimation("catImg2", catImg2)
    cat.changeAnimation("catImg2")
    mouse.addAnimation("mouseImg2", mouseImg2)
    mouse.frameDelay = 25
    mouse.changeAnimation("mouseImg2")
  }

}


