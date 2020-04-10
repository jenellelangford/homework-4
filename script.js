// 2. List all variables(HTML tags) needed to work
var startButton = document.getElementById("startbutton");
var questions = document.getElementById("questions");
var answerChoices = document.getElementById("answers");
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
  answers: ["A. Tina Fey", "B. Kristin Wig", "C. Amy Poehler"],
  correctAnswer: "C. Amy Phohler"
  },

  {
  question: "What year did year did Parks and Rec begin showing?",
  answers: ["A. 2009", "B. 2006", "C. 2012"],
  correctAnswer: "A. 2009"
  },
  {
  question: "What is the name of Ron Swanson's alis when performing jazz?",
  answers: ["A. Andy Dwyer", "B. Duke Silver", "C. Prince"],
  correctAnswer: "B. Duke Silver"
  },
  {
  question: "Who does Leslie Knope end up marrying in season 5?",
  answers: ["A. Ben Wyatt", "B. Ron Swanson", "C. Perd Hapley "],
  correctAnswer: "A. Ben Wyatt"
  },
  {
  question: "How many seasons did Parks and Rec run for?",
  answers: ["A. Five", "B. Nine", "C. Seven"],
  correctAnswer: "C. Seven"
  }]

// 4. Add event listener for the "Start quiz" button
startButton.addEventListener("click", function(event) {
  event.preventDefault();
  startTimer();
  loopThroughQuestions();
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

// 6. Creat function to run questions 
function loopThroughQuestions () {
  for (var i = 0; i < myQuestions.length; i ++) {
    var questionIndex = myQuestions.length
    var initalQuestionIndex = 0; 
    


  }

}

function runQuestions () {
  var runThrough 
  for( i =0; i <myQuestions.length; i++);


}


// 6. Create loop that will run through 4 different questions and prompt "Right" or "Wrong" when answered. (If/Else statments)
// 7. Call out all functions 