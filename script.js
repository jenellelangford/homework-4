// List all variables(HTML tags) needed to work

// variable for the start button
var startButton = document.getElementById("startbutton");

// variable for question div
var questionsAll = document.getElementById("question");

// variable for answers div
var answersOne = document.getElementById("answersOne");
var answersTwo = document.getElementById("answersTwo");
var answersThree = document.getElementById("answersThree");
var answersFour = document.getElementById("answersFour");
var answersFive = document.getElementById("answersFive");

// variable for choices inside which is inside the answer div
var divChoice1_1 = document.getElementById("answerOne-choiceOne");
var divChoice1_2 = document.getElementById("answerOne-choiceTwo");
var divChoice1_3 = document.getElementById("answerOne-choiceThree");

// variable for choices inside which is inside the answer div
var divChoice2_1 = document.getElementById("answerTwo-choiceOne");
var divChoice2_2 = document.getElementById("answerTwo-choiceTwo");
var divChoice2_3 = document.getElementById("answerTwo-choiceThree");

// variable for choices inside which is inside the answer div
var divChoice3_1 = document.getElementById("answerThree-choiceOne");
var divChoice3_2 = document.getElementById("answerThree-choiceTwo");
var divChoice3_3 = document.getElementById("answerThree-choiceThree");

// variable for choices inside which is inside the answer div
var divChoice4_1 = document.getElementById("answerFour-choiceOne");
var divChoice4_2 = document.getElementById("answerFour-choiceTwo");
var divChoice4_3 = document.getElementById("answerFour-choiceThree");

// variable for choices inside which is inside the answer div
var divChoice5_1 = document.getElementById("answerFive-choiceOne");
var divChoice5_2 = document.getElementById("answerFive-choiceTwo");
var divChoice5_3 = document.getElementById("answerFive-choiceThree");


var timerCountdown = document.getElementById("timer-container");
var timeSlot = document.getElementById("time");
var score = document.getElementById("score-container");
// var highscorePrompt = document.getElementById("highscore-container");
var initalScore = 0;
var intialTime = 60;

// 3. Set all questions and answers in arrays
var myQuestions = [

  {
  question: "Who plays the role of Leslie Knope?",
  answers: {
    a: "A. Tina Fey", 
    b: "B. Kristin Wig", 
    c: "C. Amy Poehler",
  },
  correctAnswer: "C. Amy Phohler"
  },
  
  {
  question: "What year did year did Parks and Rec begin showing?",
  answers: {
    a: "A. 2009", 
    b: "B. 2006", 
    c: "C. 2012",
  },
  correctAnswer: "A. 2009"
  },

  {
  question: "What is the name of Ron Swanson's alis when performing jazz?",
  answers: {
    a: "A. Andy Dwyer",
    b: "B. Duke Silver",
    c: "C. Prince",
  },
  correctAnswer: "B. Duke Silver"
  },

  {
  question: "Who does Leslie Knope end up marrying in season 5?",
  answers: {
    a: "A. Ben Wyatt",
    b: "B. Ron Swanson",
    c: "C. Perd Hapley ",
  },
  correctAnswer: "A. Ben Wyatt"
  },

  {
  question: "How many seasons did Parks and Rec run for?",
  answers: {
    a: "A. Five",
    b: "B. Nine",
    c: "C. Seven",
  },
  correctAnswer: "C. Seven"
  }
]

// 4. Add event listener for the "Start quiz" button
startButton.addEventListener("click", function(event) {
  event.preventDefault();
  startTimer();
  displayQuestionOne();
});

// 5. Create function for timer to begin when "Start quiz" button is clicked
function startTimer() {
  var timeLeft = intialTime;

  var timeInterval = setInterval(function() {
    timeSlot.textContent = timeLeft;
    timeLeft--;

    if (timeLeft === 0) {
      timeSlot.textContent = "";
      alert("TIME HAS EXPIRED!");
      clearInterval(timeInterval);
    }

  }, 1000);
}

function displayQuestionOne() {
  questionsAll.textContent = myQuestions[0].question;

  var choiceOne = document.createElement("button");
    choiceOne.textContent = myQuestions[0].answers.a;
    divChoice1_1.appendChild(choiceOne);

  var choiceTwo = document.createElement("button");
    choiceTwo.textContent = myQuestions[0].answers.b;
    divChoice1_2.appendChild(choiceTwo);

  var choiceThree = document.createElement("button");
    choiceThree.textContent = myQuestions[0].answers.c;
    divChoice1_3.appendChild(choiceThree);
}

divChoice1_1.addEventListener("click", displayQuestionTwo);
divChoice1_2.addEventListener("click", displayQuestionTwo);
divChoice1_3.addEventListener("click", displayQuestionTwo);

function displayQuestionTwo() {

  divChoice1_1.remove();
  divChoice1_2.remove();
  divChoice1_3.remove();
 
questionsAll.textContent = myQuestions[1].question;

 var choiceOne = document.createElement("button");
   choiceOne.textContent = myQuestions[1].answers.a;
   divChoice2_1.appendChild(choiceOne);

 var choiceTwo = document.createElement("button");
   choiceTwo.textContent = myQuestions[1].answers.b;
   divChoice2_2.appendChild(choiceTwo);

 var choiceThree = document.createElement("button");
   choiceThree.textContent = myQuestions[1].answers.c;
   divChoice2_3.appendChild(choiceThree);
}

divChoice2_1.addEventListener("click", displayQuestionThree);
divChoice2_2.addEventListener("click", displayQuestionThree);
divChoice2_3.addEventListener("click", displayQuestionThree);

function displayQuestionThree() {

  divChoice1_1.remove();
  divChoice1_2.remove();
  divChoice1_3.remove();
  divChoice2_1.remove();
  divChoice2_2.remove();
  divChoice2_3.remove();
 
questionsAll.textContent = myQuestions[2].question;

 var choiceOne = document.createElement("button");
   choiceOne.textContent = myQuestions[2].answers.a;
   divChoice3_1.appendChild(choiceOne);

 var choiceTwo = document.createElement("button");
   choiceTwo.textContent = myQuestions[2].answers.b;
   divChoice3_2.appendChild(choiceTwo);

 var choiceThree = document.createElement("button");
   choiceThree.textContent = myQuestions[3].answers.c;
   divChoice3_3.appendChild(choiceThree);
}

divChoice3_1.addEventListener("click", displayQuestionFour);
divChoice3_2.addEventListener("click", displayQuestionFour);
divChoice3_3.addEventListener("click", displayQuestionFour);

function displayQuestionFour() {

  divChoice1_1.remove();
  divChoice1_2.remove();
  divChoice1_3.remove();
  divChoice2_1.remove();
  divChoice2_2.remove();
  divChoice2_3.remove();
  divChoice3_1.remove();
  divChoice3_2.remove();
  divChoice3_3.remove();
 
questionsAll.textContent = myQuestions[3].question;

 var choiceOne = document.createElement("button");
   choiceOne.textContent = myQuestions[3].answers.a;
   divChoice4_1.appendChild(choiceOne);

 var choiceTwo = document.createElement("button");
   choiceTwo.textContent = myQuestions[3].answers.b;
   divChoice4_2.appendChild(choiceTwo);

 var choiceThree = document.createElement("button");
   choiceThree.textContent = myQuestions[3].answers.c;
   divChoice4_3.appendChild(choiceThree);
}

divChoice4_1.addEventListener("click", displayQuestionFive);
divChoice4_2.addEventListener("click", displayQuestionFive);
divChoice4_3.addEventListener("click", displayQuestionFive);

function displayQuestionFive() {

  divChoice1_1.remove();
  divChoice1_2.remove();
  divChoice1_3.remove();
  divChoice2_1.remove();
  divChoice2_2.remove();
  divChoice2_3.remove();
  divChoice3_1.remove();
  divChoice3_2.remove();
  divChoice3_3.remove();
  divChoice4_1.remove();
  divChoice4_2.remove();
  divChoice4_3.remove();
 
questionsAll.textContent = myQuestions[4].question;

 var choiceOne = document.createElement("button");
   choiceOne.textContent = myQuestions[4].answers.a;
   divChoice5_1.appendChild(choiceOne);

 var choiceTwo = document.createElement("button");
   choiceTwo.textContent = myQuestions[4].answers.b;
   divChoice5_2.appendChild(choiceTwo);

 var choiceThree = document.createElement("button");
   choiceThree.textContent = myQuestions[4].answers.c;
   divChoice5_3.appendChild(choiceThree);
}

divChoice5_1.addEventListener("click", quizOver);
divChoice5_2.addEventListener("click", quizOver);
divChoice5_3.addEventListener("click", quizOver);

function quizOver() {
  alert("You just completed the Parks and Rec quiz by Jenelle Langford! Your score is xxxxx")

}




// event listener for answer selection
  // on user answer selection, currentQuestion++, rerun displayCurrentQuestion function
  // When the user answers the question correct, user will get message saying "Correct".
  // If user answers the question wrong, user will get message saying "Wrong".
  // Once message appears, the next question will display 
  // Once message appears, the next question will display 





// function displayCurrentQuestion
// Function will display each individual question and display three different answer choices.
// Create a button for each answer option. var question1 = document.createElement("button"); answers.appendChild("button");




// 7. Call out all functions 



