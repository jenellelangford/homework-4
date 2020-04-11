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

// variable for time container
var timerCountdown = document.getElementById("timer-container");

// variable for the timer
var timeSlot = document.getElementById("time");

// variable for the score
var score = document.getElementById("score-container");

// variables for inital score and times 
var initalScore = 0;
var intialTime = 60;

// Set all questions and answers in arrays
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

// Add event listener for the "Start quiz" button
startButton.addEventListener("click", function(event) {
  event.preventDefault();

  // Timer function and displaying question one begin upon clicking start button 
  startTimer();
  displayQuestionOne();
});

// Create function for timer to begin when "Start quiz" button is clicked
function startTimer() {
  // Set timer to start countdown from 60
  var timeLeft = intialTime;

  var timeInterval = setInterval(function() {
    timeSlot.textContent = timeLeft;
    timeLeft--;

    // When time expires, alert appears 
    if (timeLeft === 0) {
      timeSlot.textContent = "";
      alert("TIME HAS EXPIRED!");
      clearInterval(timeInterval);
    }

  }, 1000);
}

// This function displays question 1
function displayQuestionOne() {
  // Fill in question from array 
  questionsAll.textContent = myQuestions[0].question;

  // Create a button for choice A
  var choiceOne = document.createElement("button");
    choiceOne.textContent = myQuestions[0].answers.a;
    divChoice1_1.appendChild(choiceOne);

  // Create a button for choice B
  var choiceTwo = document.createElement("button");
    choiceTwo.textContent = myQuestions[0].answers.b;
    divChoice1_2.appendChild(choiceTwo);

  // Create a button for choice C
  var choiceThree = document.createElement("button");
    choiceThree.textContent = myQuestions[0].answers.c;
    divChoice1_3.appendChild(choiceThree);
}

// When the variable for the button is clicked, run the function to display question 2
divChoice1_1.addEventListener("click", displayQuestionTwo);
divChoice1_2.addEventListener("click", displayQuestionTwo);
divChoice1_3.addEventListener("click", displayQuestionTwo);

// This function displays question 2
function displayQuestionTwo() {

  // Remove previously answer choices 
  divChoice1_1.remove();
  divChoice1_2.remove();
  divChoice1_3.remove();
 
  // Calling second quesiton in array 
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

// The rest of the code is repeating itself. I just kept removing the old answers after clicked and appended new answer choices that lined up with the questions from the array. 

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

// Alert quiz is over with a prompt 
function quizOver() {
  alert("You just completed the Parks and Rec quiz! Your score is xxxxx")

}
