var startBtn = document.querySelector('#start');
var timerEl = document.getElementById('countdown');
var answerElements = ['answerAElement', 'answerBElement', 'answerCElement', 'answerDElement'];
var questions = [
    {
        q:'A ____ is a predefined action that can be called or used later in the code.',
        a: 'function', 
        b: 'alert', 
        c: 'prompt',
        d: 'loop',
        answer: 'a'
    },
    {
        q:'In "function win() {}", "win" is the ______',
        a: 'function keyword',
        b: 'function name',
        c: 'expression',
        d: 'argument',
        answer: 'b'
    },
    {
        q:'The code between _____ is called a code block.',
        a: 'parentheses',
        b: 'brackets',
        c: 'curly braces',
        d: 'quotations',
        answer: 'c'
    },
    {
        q:'Which are examples of a data type?',
        a:'string',
        b: 'boolean',
        c: 'integer',
        d: 'all of the above',
        answer: 'd'
    },
    {
        q:'" var win = function() {} " is an example of', 
        a:'function declaration',
        b: 'function expression',
        c: 'none of the above',
        d: 'all of the above',
        answer:'b'
    },
];

// function startTest() {
//     //when button is clicked, timer begins
//     var score = 0;
function startTest() {
        //when button is clicked, timer begins
    var score = 0;
    
    for (var i = 0; i < questions.length; i++) {
    var questionContainerElement = document.createElement("div")
    var answerContainerElement = document.createElement("ul")
    var questionElement = document.createElement("div")
    var answerAElement = document.createElement("BUTTON")
    var answerBElement = document.createElement("BUTTON")
    var answerCElement = document.createElement("BUTTON")
    var answerDElement = document.createElement("BUTTON")
    var buttonAElement = document.createElement("BUTTON");
    buttonAElement.innerHTML = questions[i].a;
    
    

    buttonAElement.addEventListener("click", function() {
        // textMessage("correct");
    });
    questionElement.textContent = questions[i].q
    answerAElement.textContent= questions[i].a
    answerBElement.textContent = questions[i].b
    answerCElement.textContent = questions[i].c
    answerDElement.textContent = questions [i].d

    questionContainerElement.appendChild(questionElement)
    questionContainerElement.appendChild(answerAElement)
    questionContainerElement.appendChild(answerBElement)
    questionContainerElement.appendChild(answerCElement)
    questionContainerElement.appendChild(answerDElement)
    
    // questionContainerElement.appendChild(button);

    document.querySelector("body").appendChild(questionContainerElement)
    document.querySelector("body").appendChild(answerContainerElement)
};   
};
//     function displayMessage() {
    
//     if (answer = true) {
//         displayMessage('Correct!');
//         score++;
//     }
//     else {
//         displayMessage('Wrong!');
//         score--;
//     }
// };
    //when button is clicked, ask questions one by one
//     for (var i = 0; i < questions.length; i++) {
//         var answer = confirm(questions[i].q);
//         if 
//             (answer === true) 
//         {
//             //score increases with correct answer
//             score++;
//         }else {
//             score--;
//         }
        
// };
// display question

// display answer
// var btn = document.createElement("button");
// btn.innerHTML = "a";


// timer function
function timerCount() {
    var timeLeft = 60;
        timerEl.textContent = timeLeft;
    // start time at 60 sec
    //set timer to decrease
    var timeInterval = setInterval(function() {
                timeLeft--;
                timerEl.textContent = timeLeft;
            // if incorrect answer, lose 10 sec
            
            // if timer is 0, stop interval
            if (timeLeft === 0) {
                clearInterval(timeInterval);
                timerEl.textContent = 'Quiz over';
                // diplayMessage()
                // highScore();
            }
        }, 1000);
    };  

// //display message for answers
// // function displayMessage(type, message) {

// }
//user input to high Score
// function highScore() {
//your score is
//input saved name
//save to local storage


//start function for quiz

//if answer correct, then told correct!
//if answer incorrect, then told wrong!
//if answer is incorrect, then 10 sec less on timer
//when timer hits 0, timer stops
//when questions are done, quiz over
//high score input
//store high score
// timerCount();
startBtn.addEventListener("click", timerCount);
startBtn.addEventListener("click", startTest);
// answerElements.addEventListener("click", displayMessage)

