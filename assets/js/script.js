var startBtn = document.querySelector('#start');
var timerEl = document.getElementById('countdown');
var choiceEl = document.getElementById('choices');
// var answerElements = ['answerAElement', 'answerBElement', 'answerCElement', 'answerDElement'];
var currentQuestionIndex = 0;
var choiceSelection = document.createElement("button");
var messageEl = document.getElementById('message');
var viewScoresBtn = document.querySelector('#view');
var nextBtn = document.querySelector('#next');
var score = 0;
var timeLeft = 60;
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
    messageEl.textContent= '';
    var currentQuestion = questions[currentQuestionIndex]
    var titleEl = document.getElementById('question-title')
    titleEl.textContent = currentQuestion.q
    choiceEl.innerHTML = ''
    currentQuestion.choices.forEach(function(choice, i) {
        var isAnswer = false;
        if (currentQuestion.answer==choice) {
            isAnswer = true;
        }
        var choiceSelection = document.createElement("button")
        choiceSelection.setAttribute('class', 'choice')
        choiceSelection.setAttribute('data-value', isAnswer)
        choiceSelection.textContent = choice;
        choiceEl.appendChild(choiceSelection);

    });

 
}   
choiceEl.addEventListener("click", myFunction);
    function myFunction(event) {
    currentQuestionIndex++;
    var userA = event.target.getAttribute('data-value')
    console.log(userA);
    if (userA=='true') {
        messageEl.textContent = 'Correct';
        
    }
    else {
        messageEl.textContent = 'Wrong';
        timeLeft-=10;
    }
    }
    
// function displayMessage() {



// };

function startTest() {
    var score = 0;
    // var startScreenEl = document.getElementById('start-screen');
    // startScreenEl.setAttribute('class', 'hide');
    document.getElementById('start-screen').style.visibility = 'hidden';
    document.getElementById('next').style.visibility = "visible";
    timerEl.textContent = 60
    // document.querySelector("body").appendChild(answerContainerElement)
    getQuestion();
    // displayMessage();
};   

// message for correct or wrong answer


// timer function
function timerCount() {
    // start time at 60 sec
    // var timeLeft = 60;
    timerEl.textContent = timeLeft;

    var timeInterval = setInterval(function() {
        //set timer to decrease
        timeLeft--;
        timerEl.textContent = timeLeft;
            
        // if timer is 0, stop interval
        if (timeLeft === 0) {
            clearInterval(timeInterval);
            timerEl.textContent = 'Quiz over';
            // highScore();
            }
        }, 1000);
    };  

function viewScore() {

    location.href = "highscore.html";
}


// display message for answers
function displayMessage(type, message) {

}
//user input to high Score
function highScoreList() {
    var score = correctAnswers;
    var highscore = localStorage.getItem('highscore', highscore)
    var name = localStorage.getItem('name')
    var highScoreElement = document.createElement('div')
    var submitBtn = document.createElement('BUTTON')

   
   document.querySelector('body').appendChild(highScoreElement)
   submitBtn.textContent = 'submit';

   function highScore() {}
   submitBtn.addEventListener("click", function(event) {
        preventDefault();



        localStorage.setItem('highscore', highscore)
        localStorage.setItem('name')
   });
//your score is
//input saved name
//save to local storage
//high score input
//store high score

 //when button is clicked, timer begins
nextBtn.addEventListener("click", getQuestion);
viewScoresBtn.addEventListener("click", viewScore)
startBtn.addEventListener("click", timerCount);
startBtn.addEventListener("click", startTest);
document.getElementById('next').style.visibility = 'hidden';
// answerElements.addEventListener("click", displayMessage);