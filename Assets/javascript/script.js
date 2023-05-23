var timer = document.getElementById("time");
var startBtn = document.getElementById("start-btn");


// var mode = "hidden";
// var isVisible = document.getElementsByClassName("display");
var resultEl = document.querySelector(".display-result");

var finalScoreEl = document.querySelector(".final-score");
var highscorePage = document.querySelector(".highscore-page");

var question = document.getElementById("question");
var answerList = document.getElementById("answer-list");

var questionArray = [
    "What is NOT a primitive value in JavaScript?",
    "A string is visually identified by the _____ around it.",
    "How do you call a function?",
    "What is the difference between a local and global variable?",
    "What is the data type of 'functionalNonsense[]'?"
];

var correctAns = [
        "objects",
        "quotations '' ",
        "functionName();",
        "global variables can be accessed throughout the script, local variables can only be accessed within their function",
        "array"
    ];
    
    var ans1 ={
        q:"What is NOT a primitive value in JavaScript?",
        ansA: "numbers",
        ansB: "boolean",
        ansC: "objects",
        ansD: "null"
        
    };
    var ans2 = {
        ansA: "parentheses ()",
        ansB: "quotations '' ",
        ansC: "brackets []",
        ansD: "nothing"
    };
    var ans3 = {
        ansA: "functionName",
        ansB: "(functionName);",
        ansC: "functionName;()",
        ansD: "functionName();"
    };
    var ans4 = {
        ansA: "global variables can be accessed throughout the script, local variables can only be accessed within their function",
        ansB: "local variables can be accessed throughout the script, global variables can only be accessed in their function",
        ansC: "local variables can only be accessed by local files, global variables can be accessed globally",
        ansD: "there is no difference"
    };
    var ans5 = {
        ansA: "function",
        ansB: "variable",
        ansC: "array",
        ansD: "loop"
    };
    
    function countdown(){
        var timeLeft = 75;
        
        var timeInterval = setInterval(function () {
            // As long as the `timeLeft` is greater than 1
            if (timeLeft > 1) {
                // Set the `textContent` of `timer` to show the remaining seconds
                timer.textContent = timeLeft + ' seconds remaining';
                // Decrement `timeLeft` by 1
                timeLeft--;
            } else if (timeLeft === 1) {
                // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
                timer.textContent = timeLeft + ' second remaining';
                timeLeft--;
            } else {
                // Once `timeLeft` gets to 0, set `timer` to an empty string
                timer.textContent = '';
                // Use `clearInterval()` to stop the timer
                clearInterval(timeInterval);
                // Call the function to display final score
                
            }
        }, 1000);
    };
    
    function hideHeader() {
        var h1El = document.getElementById("main-heading");
        h1El.setAttribute("class", "hidden");
    };
    
    function showQuestion() {
        var cardHeader = document.querySelector(".card-header");
        cardHeader.setAttribute("class", "display");

    };
    
    function showAnsList() {
        
        answerList.setAttribute("class", "display");
    };
    
    function hideDetails(){
    var details = document.querySelector(".details");
    details.setAttribute("class", "hidden");
};

startBtn.addEventListener("click", function start(event) {
    event.preventDefault();
    hideHeader();
    hideDetails();
    showQuestion();
    showAnsList();
    countdown();

    startBtn.setAttribute("class", "hidden");

    
});


