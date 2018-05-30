var score = 0;
var compscore = 0;
var games = 0;
var compgames = 0;
// var scoreboard = document.getElementById("scoreboard");
function beginGame(){
  //get user input
    var move = prompt("Enter your choice","(rock, paper, or scissors)");
    move.toLowerCase();
  //don't continue until correct input
    if(move!=="rock"&&move!=="paper"&&move!=="scissors"&&move!=="raygun"){
      alert("invalid input");
      beginGame();
    }
    else{
    //get comp move
      var compmove = getCompMove();
      alert(move+" "+compmove);
    //compare moves get winner bool
      var result = calculateWinner(move, compmove);
      if(result==undefined){
        alert("Draw!");
        alert("You: " + score + "   Computer: " + compscore);
        beginGame();
      }
      if(result==true){
        alert("Win!");
        score += 1;
        alert("You: " + score + "   Computer: " + compscore);
      //you win
        if(score==3){
          alert("Congratulations you win!");
          score=0;
          compscore=0;
          games++;
        //useless html stuff
          document.getElementById("scoreboard").innerHTML =
            "<br>Scoreboard(bo5):<br>"+
            "Your game wins: "+games+" <br>"+
            "Computer game wins: "+compgames;
          document.getElementById("img").setAttribute("src", "imgs/victory.gif");
          document.getElementById("button").setAttribute("onclick","endGame()");
          document.getElementById("button").innerHTML = "Play again?";
        } else {
          beginGame();
        }
      }
      if(result==false){
        alert("Loss!");
        compscore += 1;
        alert("You: " + score + "   Computer: " + compscore);
      //comp wins
        if(compscore==3){
          alert("Gameover computer wins!");
          score=0;
          compscore=0;
          score=0;
          compscore=0;
          compgames++;
        //useless html stuff
          document.getElementById("scoreboard").innerHTML =
            "<br>Scoreboard(bo5):<br>"+
            "Your game wins: "+games+" <br>"+
            "Computer game wins: "+compgames;
          document.getElementById("img").setAttribute("src", "imgs/failure.gif");
          document.getElementById("button").setAttribute("onclick","endGame()");
          document.getElementById("button").innerHTML = "Play again?";
        } else {
          beginGame();
        }
      }
    }
}
function getCompMove(){
  var rand = Math.floor((Math.random() * 3));
  switch(rand){
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}
function calculateWinner(mv1, mv2){
  //raygun
  if(mv1=="raygun"){
    return true;
  }
  //rock
  if(mv1=="rock" && mv2=="scissors"){
    return true;
  }
  if(mv1=="rock" && mv2=="paper"){
    return false;
  }
  //paper
  if(mv1=="paper" && mv2=="rock"){
    return true;
  }
  if(mv1=="paper" && mv2=="scissors"){
    return false;
  }
  //scissors
  if(mv1=="scissors" && mv2=="paper"){
    return true;
  }
  if(mv1=="scissors" && mv2=="rock"){
    return false;
  }
  else{
    return undefined;
  }
}
function endGame(){
  document.getElementById("img").setAttribute("src", "imgs/rps.gif");
  document.getElementById("button").setAttribute("onclick","beginGame()");
  document.getElementById("button").innerHTML = "Start game";
}
