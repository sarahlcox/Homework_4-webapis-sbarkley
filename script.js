//working in a study group with Matt Hiatt, Erik Tomlinson, and Jake Wagner
// declare function .timeEl - call jquery 
// declare global variables - user score, quiz container, high score
// First function to to start quiz and timer 
// Timer starts when quiz starts (set interval)  setInterval(someFunction, seconds*1000) 
// declare someFunction[Create array of questions as objects - questions, options, and/or [booleans]
var test = document.getElementById('test');
var timer = document.getElementById('timer');
var buttonContainer = document.getElementById('buttonContainer');
var questionContainer = document.getElementById('questionContainer');
var score = 0;
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('submit');
let questionEl = document.getElementById('question');
var questions = [
        {
            question: "Question 1?",
            choices: ["1", "2", "3", "4"],
            answer: 0
          },
          {
            question: "Question 2?",
            choices: ["1", "2", "3", "4"],
            answer: 1
          },
];
// this starts the timer
function begin(){
  // console.log("it works") 
  buttonContainer.setAttribute("class", "hide")
  var timerLogic = 60;
  var timerInterval = setInterval(function(){
      timerLogic--
      timer.textContent = timerLogic
      //if the timer reaches 0 alert pops up that time is up
      if(timerLogic <=0){
          clearInterval(timerInterval)
          alert("Time's Up!")
      }
  },1000)
}
//this is the behavior behind the begin button
test.addEventListener('click', begin)

for (var index = 0; index < questions.length; index++) {
  var element = questions[index].question;
  questionContainer.textContent=element;
  console.log(element);

  
}

// Rotation of questions for the quiz, within our question array, we need to pull the objects  from the array    // Loop through array --> for (var i=0; i<array.length; i++) {

// array starts for loop identigy the someFunction, i<x, i++ (doesnt have to be "<" symbol Use === to have a concrete true answer)

// adds points to score if correct
// adds points to score if incorrect
// *********
// function nextQuestion (){
//   //first question presented, if you get the question right, you get a point, if it matches 1 of the 3 wrong answers, move on with no point added, deduct time from clock
 
// function selectAnswer()


//create function for all right answers, and come up with code to give user 1 point, and have the question go on to next question


// function quiz {
//   var question1= questions.length
//   if (condition) {
    
//   } else {
    
//   }

// }


// Create for loop to ask questions to player .length use === to have a concrete true answer
//reference: https://stackoverflow.com/questions/37252041/storing-quiz-questions-in-array-of-objects
// for (let index = 0; index < questions.length; index++) {
//     var question = questions[index].question;
//     document.write ( question );
//     console.log(question);
    
// }


// alert("you got " + score + "/ + questions.length");

