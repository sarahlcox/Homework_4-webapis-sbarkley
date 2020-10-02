//working in a study group with Matt Hiatt, Erik Tomlinson, and Jake Wagner

// declare global variables - user score, quiz container, high score
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
console.log(choices);
let currentQuestion = {};
let acceptingAnswers = true; 
let score = 0;
let questionCounter=0;
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
    availableQuesions = [...questions];
    console.log(available questions);
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        //go to the end page
        return window.location.assign('/end.html');
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuesions.splice(questionIndex, 1);
    // console.log(availableQuestions);
    acceptingAnswers = true;
    // console.log(acceptingAnswers);
};

// Rotation of questions for the quiz, within our question array, we need to pull the objects  from the array  
choices.forEach(choice => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        // console.log(selectedAnswer);
        getNewQuestion();
    });
});

// function selectAnswer()
acceptingAnswers = false;
const selectedChoice = e.target;
const selectedAnswer = selectedChoice.dataset["number"];

const classToApply =
  selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

selectedChoice.parentElement.classList.add(classToApply);

setTimeout(() => {
  selectedChoice.parentElement.classList.remove(classToApply);
  getNewQuestion();
}, 1000);
});

startGame();