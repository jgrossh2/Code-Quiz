var startBtn = document.querySelector('#start');
var timerEl = document.getElementById('countdown');
var choiceEl = document.getElementById('choices');
// var answerElements = ['answerAElement', 'answerBElement', 'answerCElement', 'answerDElement'];
var currentQuestionIndex = 0;
var choiceSelection = document.createElement("button");
// var userA = this.getAttribute('data-value');
var questions = [
    {
        q:'A ____ is a predefined action that can be called or used later in the code.',
        choices: [ 
        'function', 
        'alert', 
        'prompt',
        'loop'],
        answer: 'function'
    },
    {
        q:'In "function win() {}", "win" is the ______',
        choices : [
        'function keyword',
        'function name',
        'expression',
        'argument'],
        answer: 'function name'
    },
    {
        q:'The code between _____ is called a code block.',
        choices : [
        'parentheses',
        'brackets',
        'curly braces',
        'quotations'],
        answer: 'curly braces'
    },
    {
        q:'Which are examples of a data type?',
        choices : [
        'string',
        'boolean',
        'integer',
        'all of the above'],
        answer: 'all of the above'
    },
    {
        q:'" var win = function() {} " is an example of', 
        choices : [
        'function declaration',
        'function expression',
        'none of the above',
        'all of the above'],
        answer:'function expression'
    },
];

function getQuestion() {
    var currentQuestion = questions[currentQuestionIndex]
    var titleEl = document.getElementById('question-title')
    titleEl.textContent = currentQuestion.q
    choiceEl.innerHTML = ''
    currentQuestion.choices.forEach(function(choice, i) {
        var choiceSelection = document.createElement("button")
        choiceSelection.setAttribute('class', 'choice')
        choiceSelection.setAttribute('value', choice)
        choiceSelection.setAttribute('data-value', choice)
        choiceSelection.textContent = choice;
        choiceEl.appendChild(choiceSelection);

    });
}   
choiceEl.addEventListener("click", myFunction);
    function myFunction() {
    var score = 0;
    var userA = this.getAttribute('data-value')
    if (userA === true && question[i].answer === true ) {
        alert('Correct!');
        score++;
    }
    else {
        alert('Wrong!');
        score--;
    }
    }
    
// function displayMessage() {



// };

function startTest() {
    var score = 0;
    // var startScreenEl = document.getElementById('start-screen');
    // startScreenEl.setAttribute('class', 'hide');
    document.getElementById('start-screen').style.visibility = 'hidden';
    timerEl.textContent = 60
    // document.querySelector("body").appendChild(answerContainerElement)
    getQuestion();
    // displayMessage();
};   

// message for correct or wrong answer


// timer function
function timerCount() {
    // start time at 60 sec
    var timeLeft = 60;
    timerEl.textContent = timeLeft;

    var timeInterval = setInterval(function() {
        //set timer to decrease
        timeLeft--;
        timerEl.textContent = timeLeft;
        // if incorrect answer, lose 10 sec
            
        // if timer is 0, stop interval
        if (timeLeft === 0) {
            clearInterval(timeInterval);
            timerEl.textContent = 'Quiz over';
            // highScore();
            }
        }, 1000);
    };  

// //display message for answers
// // function displayMessage(type, message) {

// }
//user input to high Score
// function highScoreList() {
//     var score = correctAnswers;
//     var highscore = localStorage.getItem('highscore', highscore)
//     var name = localStorage.getItem('name')
//     var highScoreElement = document.createElement('div')
//     var submitBtn = document.createElement('BUTTON')

   
//    document.querySelector('body').appendChild(highScoreElement)
//    submitBtn.textContent = 'submit';

//    function highScore() {}
//    submitBtn.addEventListener("click", function(event) {
//         preventDefault();



//         localStorage.setItem('highscore', highscore)
//         localStorage.setItem('name')
//    });
//your score is
//input saved name
//save to local storage
//high score input
//store high score

 //when button is clicked, timer begins
startBtn.addEventListener("click", timerCount);
startBtn.addEventListener("click", startTest);
// answerElements.addEventListener("click", displayMessage);