var canvas, gameState = 0 , contestantCount, database, quiz, question, contestant, database;

function setup(){
  canvas = createCanvas(850,400);

  database=firebase.database();

  quiz=new Quiz();
  quiz.getState();
  quiz.start();
  
 
}


function draw(){
  background("pink");
  console.log(gameState);

 
  
}
