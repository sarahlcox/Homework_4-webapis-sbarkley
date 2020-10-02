//get element 
const highScoresList= document.getElementById('highScoresList');
//get scores out of local storage
const highScores= JSON.parse(localStorage.getItem("highScores")) || [];
//storing high scores in the html dynamically into a list
highScoresList.innerHTML = highScores
.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");