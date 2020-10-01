//declare global variables
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = true; 
let score = 0;
let questionCounter=0;
let availableQuestions=[];

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
const MAX_QUESTIONS = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
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

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuesions.splice(questionIndex, 1);
    console.log(availableQuestions);
    acceptingAnswers = true;
    console.log(acceptingAnswers);
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        console.log(selectedAnswer);
        getNewQuestion();
    });
});

startGame();