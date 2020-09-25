var database;
var canvas, backgroundImg;
var gameState = 0;
var playerCount;
var form, player, game;



function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(400,400);
  game=new Game();
  game.getstate();
  game.start();
  

}
function draw(){

}