var timer = document.getElementById("time");
var startBtn = document.getElementById("start-btn");
var qIndex;
var timeLeft = 75;
// var mode = "hidden";
// var isVisible = document.getElementsByClassName("display");
var resultEl = document.querySelector(".display-result");

var scoreEl = document.getElementById("score");

var finalScoreEl = document.querySelector(".final-score");
var viewHS = document.getElementById("view-hs");
var highscorePage = document.querySelector(".highscore-page");
var highscoreList = document.querySelector(".highscore-list");

var question = document.getElementById("question");
var answerList = document.getElementById("answer-list");
var answers = document.getElementsByClassName(".answers");

var questionArray = [
    {q:"What is NOT a primitive value in JavaScript?",
        answers: [
            "numbers", 
            "boolean", 
            "objects", 
            "null"],
        correctAns: "objects"},

    {q: "A string is visually identified by the _____ around it.",
        answers: [
            "parentheses ()", 
            "quotations '' ", 
            "brackets []", 
            "nothing"],
        correctAns: "quotations '' ",},

    {q: "How do you call a function?",
        answers: [ 
            "functionName", 
            "(functionName);", 
            "functionName;()", 
            "functionName();"],
        correctAns: "functionName();",},

    {q: "What is the difference between a local and global variable?",
        answers: [
            "global variables can be accessed throughout the script, local variables can only be accessed within their function", 
            "local variables can be accessed throughout the script, global variables can only be accessed in their function", 
            "local variables can only be accessed by local files, global variables can be accessed globally", 
            "there is no difference"],
        correctAns: "global variables can be accessed throughout the script, local variables can only be accessed within their function",},

    {q: "What is the data type of 'functionalNonsense[]'?",
        answers: [
            "function",
            "variable",
            "array",
            "loop"],
        correctAns: "array",},
];

    
function countdown(){

        
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
        return;
    };
    
    function showQuestion() {
        var cardHeader = document.querySelector(".card-header");
        cardHeader.setAttribute("class", "display");
        return;
    };
    
    function showAnsList() {
        answerList.setAttribute("class", "display");
        return;
    };
    
    function hideDetails(){
        var details = document.querySelector(".details");
        details.setAttribute("class", "hidden");
        return;
    };

startBtn.addEventListener("click", function startQuiz(event) {
    event.preventDefault();
    hideHeader();
    hideDetails();
    showQuestion();
    showAnsList();
    countdown();

    startBtn.setAttribute("class", "hidden");
    qIndex = 0;
    setQuestion();
});


var mainPg = document.getElementById("main");
viewHS.addEventListener("click", function displayHighscores(){
    mainPg.setAttribute("class", "hidden");
    finalScoreEl.setAttribute("class", "hidden");
    highscorePage.setAttribute("class", "display");
});

function setQuestion(){
    var currentQ = questionArray[qIndex].q;
    question.innerText = currentQ; 
    
    var currentAnswers = questionArray[qIndex].answers;
    // answerList.innerHTML = "";
    
    for (let index = 0; index < currentAnswers.length; index++) {
            console.log(currentAnswers[index]);
            let btn = document.createElement("button");
            btn.innerText = currentAnswers[index];
            answerList.children[index].appendChild(btn);
            btn.setAttribute("class", "answer");
            console.log(btn);
        }
        console.log(answerList);
    

    //     var userSelect;
    //     console.log(answerList.children);
    // answerList.children.addEventListener("click", function select(event) {
    //     event.preventDefault();
    //     userSelect = event.innerText;
    //     console.log(event);
    //     console.log(userSelect);
};
    


var result = document.getElementById("result");
function checkAns(event){
    if (event.target.matches("button")) {
        var userSelect = event.target.innerText;
        
        resultEl.setAttribute("class", "display");
        if (userSelect === questionArray[qIndex].correctAns) {
            result.textContent = "Correct!";
        } else         
        result.textContent = "Incorrect!";
        timeLeft = timeLeft-15;
        }
        //function call next
}

function nextQuestion(){
    if (qIndex<questionArray.length) {
        qIndex++;
        setQuestion();
    } else {
        endQuiz():
    }
}

// function hide(event){
//     if (condition) {
        
//     }
//     event.target.class.toggle("hidden");
// }

var backBtn = document.getElementById("back-btn");
    
backBtn.addEventListener("click", function goBack(){
    mainPg.setAttribute("class", "display");
    highscorePage.setAttribute("class", "hidden");
});

var clearHS = document.getElementById("clear-btn");
clearHS.addEventListener("click", function clearScores(event) {
    
})