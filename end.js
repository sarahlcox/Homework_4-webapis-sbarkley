const username= document.getElementById('username');
// make save button disabled only if no username is entered
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
// get high scores from local storage or return empty array if game not yet played 
const highScores= JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);
finalScore.innerText = mostRecentScore;


username.addEventListener('keyup', () => {
    // console.log(username.value);
    saveScoreBtn.disabled = !username.value;
});
saveHighScore = (e) => {
    // console.log("clicked the save button")
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
        };
    highScores.push(score);
    };
