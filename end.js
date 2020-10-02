const username= document.getElementById('username');
// make save button disabled only if no username is entered
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
// get high scores from local storage or return empty array if game not yet played 
const highScores= JSON.parse(localStorage.getItem("highScores")) || [];
// console.log(highScores);
const MAX_HIGH_SCORES = 5;
finalScore.innerText = mostRecentScore;


username.addEventListener('keyup', () => {
    // console.log(username.value);
    saveScoreBtn.disabled = !username.value;
});
saveHighScore = (e) => {
    // console.log("clicked the save button")
    e.preventDefault();
// save scores to local storage
    const score = {
        score: Math.floor(Math.random() * 100),
        name: username.value
        };
    highScores.push(score);
    // this will take the higher score and put it on top of the array
    highScores.sort((a,b)=>b.score - a.score)
    // only store 5 high scores
    highScores.splice(5);
    // console.log(highScores);
    localStorage.setItem('highScores',JSON.stringify(highScores));
    window.location.assign("newindex.html");
    };
