//working in a study group with Matt Hiatt, Erik Tomlinson, and Jake Wagner
var timerContainer = document.getElementById('timer');

// declare global variables - user score, quiz container, high score
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');
// console.log(choices);
let currentQuestion = {};
//set var to false and have switch to truevia fx on line 85
let acceptingAnswers = false; 
let score = 0;
//what question you are on
let questionCounter=0;
//take questions out of the array as they are used to present new question each time
let availableQuestions=[];
// declare someFunction[Create array of questions as objects - questions, options, and/or [booleans]//declare global variables
let questions = [
    {
        question: "What is an anchor tag?",
        choice1: "Beginning and/or end of a hypertext link",
        choice2: "An emoji of an anchor",
        choice3: "It is the root directory",
        choice4: "It is a heading tag",
        answer: 1
      },
      {
        question: "What is string concatenation?",
        choice1: "To encase a string in parentheses",
        choice2: "The operation of joining charachter strings end-to-end",
        choice3: "To host your website locally",
        choice4: "A term used in coding to determine a variable",
        answer: 2
      },
      {
        question: "What are media queries?",
        choice1: "Storing your data on an off-site server",
        choice2: "The suffix to a website .com, .edu, .net",
        choice3: "Allows content to render and adapt to different screen resolutions",
        choice4: "PC, Mac, Linux",
        answer: 3
      },
      {
        question: "What does CSS stand for?",
        choice1: "Concatentation string standard",
        choice2: "Color style sheet",
        choice3: "Citing source samples",
        choice4: "Cascading style sheet",
        answer: 4
      },

];

//declare the points structure
const CORRECT_BONUS = 10;
//this is going to be how many questions does a user get before they finish the test
const MAX_QUESTIONS = 3;
var timeLeft = 60;

      
// First function to to start quiz and timer 
// Timer starts when quiz starts (set interval)  setInterval(someFunction, seconds*1000) 
startGame = () => {
    var timeInterval = setInterval(function() {
        console.log("hello")
      timerContainer.textContent = timeLeft + " seconds remaining";
      timeLeft--;
        }, 1000);
    questionCounter = 0;
    score = 0;
    timeLeft = 60;
    //point to the same thing, when we make changes to either one this needs to be a full copy of the questions array 
    availableQuestions = [...questions];
    // console.log(availableQuestions);
    getNewQuestion();

};
//need to create fx to pull a question from the question array that has not been used
getNewQuestion = () => {
    console.log("functionrunning")
    //add if statement that if the array of questions runs out, to end the game
    if (availableQuestions.length === 0 || timeLeft === 0) {
        localStorage.setItem("mostRecentScore",score);
        // this goes to end game window
        return window.location.assign("end.html");
    };
    questionCounter++;
    // add text dynamically to upper corner
    questionCounterText.innerText = questionCounter + "/" + 4;
//create variable to pull questions from unused questions
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
//reference current question and pull from available questions
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;
    console.log(question)
    console.log(currentQuestion)
//references each answer choice using data set from html file
    choices.forEach(choice => {
        const number = choice.dataset["number"];
    //out of the current question, we use the number to get the answer from the data attribute number
        choice.innerText = currentQuestion["choice" + number];
    });
    //cut out the question that we just used from the array
    availableQuestions.splice(questionIndex, 1);
    //after question is loaded the question, and THEN the user can answer
    acceptingAnswers = true;
};

//set fx that allows click and pick answer
choices.forEach(choice => {
    choice.addEventListener("click", e => {
        // console.log(e.target);
        //not ready for them to answer
        if(!acceptingAnswers) return;
        //create a delay so they can't choose right away, and then when answer is selected it gets new question
        acceptingAnswers= false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        //set classes for correct or incorrect answers 
        const classToApply= 
            selectedAnswer == currentQuestion.answer ? incrementScore(CORRECT_BONUS):timeLeft-=5;
            // if (classToApply === 'correct'){
                // incrementScore(CORRECT_BONUS);
    
            // if (classToApply === 'incorrect'){
                // timeLeft-=5;
            
//changes color effect on answer picked by user and set timeout or prevent default before the class is removed, and delay for 1 second
            selectedChoice.parentElement.classList.add(classToApply);
            setTimeout( () => {
            selectedChoice.parentElement.classList.remove(classToApply);
        // console.log(selectedAnswer == currentQuestion.answer);
            getNewQuestion();
            }, 1000);

    });
});

// increment score fx and add to text in upper corner 
incrementScore = num => {
    score +=num;
    scoreText.innerText= score;
}

startGame();