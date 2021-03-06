var startBtn = document.querySelector('#start');
var viewScoresBtn = document.querySelector('#view');
var nextBtn = document.querySelector('#next');
var timerEl = document.getElementById('countdown');
var choiceEl = document.getElementById('choices');
var user = document.getElementById('user');
var submitBtn = document.getElementById('submit');
var done = document.getElementById('test');
var messageEl = document.getElementById('message');
var choiceSelection = document.createElement("button");
var currentQuestionIndex = 0;
var timeLeft = 60;
var timeInterval; 
var scores = [];
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
    console.log(currentQuestionIndex);
    console.log(questions.length);
    console.log(currentQuestion)
    if (currentQuestionIndex === questions.length) {
        clearInterval(timeInterval);
        displayScore();
    return;
    }
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
};   
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
};

function startTest() {
    document.getElementById('start-screen').style.visibility = 'hidden';
    document.getElementById('next').style.visibility = "visible";
    timerEl.textContent = 60

    getQuestion();
};   

// timer function
function timerCount() {
    // start time at 60 sec
    timerEl.textContent = timeLeft;

    timeInterval = setInterval(function() {
        //set timer to decrease
        timeLeft--;
        timerEl.textContent = timeLeft;

        // if timer is 0, stop interval
        if (timeLeft === 0) {
            clearInterval(timeInterval);
            timerEl.textContent = 'Quiz over';
            }
        }, 1000);
    };  

// display message for answers
function displayScore() {
    document.querySelector('#submit').style.visibility = "visible";
    document.getElementById('user').style.visibility = 'visible';
    document.querySelector('#question-answer').style.visibility = 'hidden';
    document.querySelector('#next').style.visibility = 'hidden';
    
    //display score 
    done.textContent = "All done! Your score is " + timeLeft;
};

var saveScore = function() {
    var initials = user.value;
    timerEl.textContent = timeLeft;
    localStorage.setItem('initials', initials);
    var userScore = {
        score: timeLeft,
        initials: initials
    };

    scores.push(userScore);
    localStorage.setItem('score', JSON.stringify(userScore));
    viewScore();
    };

function viewScore() {
    location.href = "highscore.html";
}

 //when button is clicked, timer begins
nextBtn.addEventListener("click", getQuestion);
viewScoresBtn.addEventListener("click", viewScore);
startBtn.addEventListener("click", timerCount);
startBtn.addEventListener("click", startTest);
document.getElementById('next').style.visibility = 'hidden';
document.querySelector('#submit').style.visibility = "hidden";
document.getElementById('user').style.visibility = 'hidden';
submitBtn.addEventListener("click", saveScore);
