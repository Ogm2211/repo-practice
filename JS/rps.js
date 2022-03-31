var rock = document.getElementById("r");
var paper = document.getElementById("p");
var scissor = document.getElementById("s");
var resultText = document.getElementById("result");
var userResult = document.getElementById("u");
var computerResult = document.getElementById("c");

function game(userChoice)
{
  var computerChoice = ["r","p","s"];
  var num = Math.floor(Math.random()*3);
  switch(userChoice+computerChoice[num]){
    case "rs":
    case "pr":
    case "sp":
      resultText.innerText = "User Win :)";
      var newUserSource = "../Images/"+userChoice+".png";
      var computerSource = "../Images/"+computerChoice[num]+".png";
      userResult.src = newUserSource;
      computerResult.src = computerSource;
      break;
    case "rp":
    case "ps":
    case "sr":
      resultText.innerText = "Computer Win :(";
      var newUserSource = "../Images/"+userChoice+".png";
      var computerSource = "../Images/"+computerChoice[num]+".png";
      userResult.src = newUserSource;
      computerResult.src = computerSource;
      break;
    case "rr":
    case "pp":
    case "ss":
      resultText.innerText = "Draw :S";
      var newUserSource = "../Images/"+userChoice+".png";
      var computerSource = "../Images/"+computerChoice[num]+".png";
      userResult.src = newUserSource;
      computerResult.src = computerSource;
      break;

  }

}
window.onload=function(){
rock.addEventListener("click",function(){
  game("r");
});

paper.addEventListener("click",function(){game("p");})
scissor.addEventListener("click",function(){game("s");})
};
