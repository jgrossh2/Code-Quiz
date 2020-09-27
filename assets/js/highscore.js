
function viewHighScore() {
    console.log('works');
    savedScores = JSON.parse(scores);
    for (var i = 0; i < savedScores.length; i++) {
        var savedScores = localStorage.getItem(scores);
        var input = document.querySelector('score');
        input.textContent = savedScores;
    }
};

viewHighScore();