var score = 0;
var compscore = 0;
function beginGame(){
    var move = prompt("Enter your choice","(rock, paper, or scissors)");
    move.toLowerCase();
    if(move!=="rock"&&move!=="paper"&&move!=="scissors"&&move!=="raygun"){
      alert("invalid input");
      beginGame();
    }
    else{
      var compmove = getCompMove();
      alert(move+" "+compmove);
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
        if(score==3){
          alert("Congratulations you win!");
          score=0;
          compscore=0;
          document.getElementById("img").setAttribute("src", "imgs/victory.gif");
          document.getElementById("button").setAttribute("onclick","endGame()");
          document.getElementById("button").innerHTML = "Play again?";
        }
        else if(compscore==3){
          alert("Gameover computer wins!");
          score=0;
          compscore=0;
          document.getElementById("img").setAttribute("src", "imgs/failure.gif");
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
        if(score==3){
          alert("Congratulations you win!");
          score=0;
          compscore=0;
          document.getElementById("img").setAttribute("src", "imgs/victory");
          document.getElementById("button").setAttribute("onclick","endGame()");
          document.getElementById("button").innerHTML = "Play again?";
        }
        else if(compscore==3){
          alert("Gameover computer wins!");
          score=0;
          compscore=0;
          score=0;
          compscore=0;
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
  if(mv1=="rock" && mv2=="rock"){
    return undefined;
  }
  if(mv1=="rock" && mv2=="scissors"){
    return true;
  }
  if(mv1=="rock" && mv2=="paper"){
    return false;
  }
  //paper
  if(mv1=="paper" && mv2=="paper"){
    return undefined;
  }
  if(mv1=="paper" && mv2=="rock"){
    return true;
  }
  if(mv1=="paper" && mv2=="scissors"){
    return false;
  }
  //scissors
  if(mv1=="scissors" && mv2=="scissors"){
    return undefined;
  }
  if(mv1=="scissors" && mv2=="paper"){
    return true;
  }
  if(mv1=="scissors" && mv2=="rock"){
    return false;
  }
}
function endGame(){
  location.reload();
}
