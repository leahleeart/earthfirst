let backgroundimage;


//images
let tree1;
let tree2;
let solar;
let wind;
let bicycle;

//select
let brushtree1 = false;
let brushtree2 = false;
let brushsolar = false;
let brushwind = false;
let brushbicycle = false;


//mouse
let tree1mouse;
let tree2mouse;
let solarmouse;
let windmouse;
let bicyclemouse;

//XY
let tree1X = [];
let tree1Y = [];

let tree2X = [];
let tree2Y = [];

let solarX = [];
let solarY = [];

let windX = [];
let windY = [];

let bicycleX = [];
let bicycleY = [];

//menu
let menutree1;
let menutree2;
let menusolar;
let menuwind;
let menubicycle;


function preload(){
  //backgound
  backgroundimage = loadImage('background2.png');

  //images
  tree1 = loadImage("tree1.png");
  tree2 = loadImage("tree2.png");
  wind = loadImage("wind.png");
  solar = loadImage("solar.png");
  bicycle = loadImage("bicycle.png");

  //mouse images (when pressed)
  tree1mouse = loadImage("tree1.png");
  tree2mouse = loadImage("tree2.png");
  windmouse = loadImage("wind.png");
  solarmouse = loadImage("solar.png");
  bicyclemouse = loadImage("bicycle.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode (CENTER);
  imageMode(CENTER);

  menutree1 = createImg("mtree1.png", "menu tree")
  menutree1.mouseReleased(menutree1print);
  menutree1.position (30,30);

  menutree2 = createImg("mtree2.png", "menu tree2")
  menutree2.mouseReleased(menutree2print);
  menutree2.position (180,30);

  menusolar = createImg("msolar.png", "menu solar")
  menusolar.mouseReleased(menusolarprint);
  menusolar.position (330,30);

  menuwind = createImg("mwind.png", "menu wind")
  menuwind.mouseReleased(menuwindprint);
  menuwind.position (480,30);

  menubicycle = createImg("mbicycle.png", "menu wind")
  menubicycle.mouseReleased(menubicycleprint);
  menubicycle.position (630,30);
}


function menutree1print(){
  brushtree1 = true;
  brushtree2 = false;
  brushsolar = false;
  brushwind = false;
  brushbicycle = false;
}

function menutree2print(){
  brushtree1 = false;
  brushtree2 = true;
  brushsolar = false;
  brushwind = false;
  brushbicycle = false;
}

function menusolarprint(){
  brushtree1 = false;
  brushtree2 = false;
  brushsolar = true;
  brushwind = false;
  brushbicycle = false;
}

function menuwindprint(){
  brushtree1 = false;
  brushtree2 = false;
  brushsolar = false;
  brushwind = true;
  brushbicycle = false;
}

function menubicycleprint(){
  brushtree1 = false;
  brushtree2 = false;
  brushsolar = false;
  brushwind = false;
  brushbicycle = true;
}

function draw() {
  //background image settings
  createCanvas(windowWidth, windowHeight);
  imageMode(CORNERS);
  background(backgroundimage, 0,0, windowWidth, windowHeight);

  imageMode(CENTER);

  if(brushtree1 == true){
    image(tree1mouse, mouseX, mouseY);
}

  for (let i = 0; i < tree1X.length; i++) {
      image(tree1, tree1X[i], tree1Y[i]);
}


if(brushtree2 == true){
  image(tree2mouse, mouseX, mouseY);
}

for (let i = 0; i < tree2X.length; i++) {
    image(tree2, tree2X[i], tree2Y[i]);
}


if(brushsolar == true){
  image(solarmouse, mouseX, mouseY);
}

for (let i = 0; i < solarX.length; i++) {
    image(solar, solarX[i], solarY[i]);
}

if(brushwind == true){
  image(windmouse, mouseX, mouseY);
}

for (let i = 0; i < windX.length; i++) {
    image(wind, windX[i], windY[i]);
}

if(brushbicycle == true){
  image(bicyclemouse, mouseX, mouseY);
}

for (let i = 0; i < bicycleX.length; i++) {
    image(bicycle, bicycleX[i], bicycleY[i]);
}

}

function mousePressed(){

  if(brushtree1 == true && mouseX > 100){
			tree1X.push(mouseX);
		  tree1Y.push(mouseY);
  }

  if(brushtree2 == true && mouseX > 100){
			tree2X.push(mouseX);
		  tree2Y.push(mouseY);
  }

  if(brushsolar == true && mouseX > 100){
			solarX.push(mouseX);
		  solarY.push(mouseY);
  }

  if(brushwind == true && mouseX > 100){
			windX.push(mouseX);
		  windY.push(mouseY);
  }

  if(brushbicycle == true && mouseX > 100){
      bicycleX.push(mouseX);
      bicycleY.push(mouseY);
  }

}

function keyPressed(){
if(key == 'Escape') {
  tree1X.splice(0, tree1X.length);
  tree1Y.splice(0, tree1Y.length);

  tree2X.splice(0, tree2X.length);
  tree2Y.splice(0, tree2Y.length);

  solarX.splice(0, solarX.length);
  solarY.splice(0, solarY.length);

  windX.splice(0, windX.length);
  windY.splice(0, windY.length);

  bicycleX.splice(0, bicycleX.length);
  bicycleY.splice(0, bicycleY.length);
  }

  if(key == 'x') {
		cursor()
    tree1=false;
		tree2=false;
    solar=false;
    wind=false;
    bicycle=false;
    }


}
