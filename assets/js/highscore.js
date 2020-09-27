
function viewHighScore() {
    console.log("works");
    var savedScores = localStorage.getItem("score");
    console.log("names");
        var input = document.querySelector('.score');
        input.textContent = savedScores;
};

viewHighScore();