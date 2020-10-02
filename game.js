//working in a study group with Matt Hiatt, Erik Tomlinson, and Jake Wagner

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
        question: "Question 1?",
        choice1: "<option 1>",
        choice2: "<option 2>",
        choice3: "<option 3>",
        choice4: "<option 4>",
        answer: 1
      },
      {
        question: "Question 2?",
        choice1: "<option 1>",
        choice2: "<option 2>",
        choice3: "<option 3>",
        choice4: "<option 4>",
        answer: 2
      },
      {
        question: "Question 3?",
        choice1: "<option 1>",
        choice2: "<option 2>",
        choice3: "<option 3>",
        choice4: "<option 4>",
        answer: 3
      },
      {
        question: "Question 4?",
        choice1: "<option 1>",
        choice2: "<option 2>",
        choice3: "<option 3>",
        choice4: "<option 4>",
        answer: 4
      },

];

//declare the points structure
const CORRECT_BONUS = 10;
//this is going to be how many questions does a user get before they finish the test
const MAX_QUESTIONS = 3;

// First function to to start quiz and timer 
// Timer starts when quiz starts (set interval)  setInterval(someFunction, seconds*1000) 
startGame = () => {
    questionCounter = 0;
    score = 0;
    //point to the same thing, when we make changes to either one this needs to be a full copy of the questions array 
    availableQuestions = [...questions];
    // console.log(availableQuestions);
    getNewQuestion();

};
//need to create fx to pull a question from the question array that has not been used
getNewQuestion = () => {
    //add if statement that if the array of questions runs out, to end the game
    if (availableQuestions.length === 0) {
        localStorage.setItem("mostRecentScore",score);
        // this goes to end game window
        return window.location.assign("end.html");
    };
    questionCounter++;
    // add text dynamically to upper corner
    questionCounterText.innerText = questionCounter + "/" + MAX_QUESTIONS;
//create variable to pull questions from unused questions
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
//reference current question and pull from available questions
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;
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
            selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
            if (classToApply === 'correct'){
                incrementScore(CORRECT_BONUS);
            }
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