function respondido(){

  document.getElementById("congrats").style.visibility="visible";

var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var correct = 0;

  if (question1 == "Hyper Text Markup Language") {
    correct++;
  }

  if (question2 == "Cascading Style Sheets") {
    correct++;
  }

  if (question3 == "script") {
    correct++;
  }

   document.getElementById("resultado").innerHTML="{ Você acertou " + correct + " questões }";

}
