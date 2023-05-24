// variables w correlating html element
var timer = document.getElementById("time");
var startBtn = document.getElementById("start-btn");
var qIndex; //the counter for question index 
var timeLeft = 75;

var resultEl = document.querySelector(".display-result"); 
//result as in displays if selection was correct or incorrect answer
var result = document.getElementById("result");
var scoreEl = document.getElementById("score");
var finalScoreEl = document.querySelector(".final-score");

//var relating to highscores, high score page, score form
var viewHS = document.getElementById("view-hs");
var highscorePage = document.querySelector(".highscore-page");
var highscoreList = document.querySelector(".highscore-list");
var backBtn = document.getElementById("back-btn");
var nameInput = document.getElementById("name-input");
var newName;
var nameScoreList = document.getElementById("name-score-list");
var scoreList = document.getElementById("scores-list");


//Question/answer global variables
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
            "quotations", 
            "brackets []", 
            "nothing"],
        correctAns: "quotations",},

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
            timer.textContent = "0";
            clearInterval(timeInterval);
            // Call the function to end quiz and display final score
            endQuiz();
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
    // answerList.children.innerHTML = "";
    for (let index = 0; index < currentAnswers.length; index++) {
        console.log(currentAnswers[index]);
        let btn = document.createElement("button");
        btn.innerText = currentAnswers[index];
        answerList.children[index].appendChild(btn);
        btn.setAttribute("class", "answer");
        console.log(btn);
    }

    answerList.addEventListener("click", checkAns);
};

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
        nextQuestion();
}

    
function nextQuestion(){
    qIndex++;
    if (qIndex<questionArray.length) {
        var ansBtns = answerList.getElementsByClassName("answer");
        console.log(ansBtns);
        // removes unnecessary buttons from persisting
        if (ansBtns.length > 0) {
            while (ansBtns[0]) {
                ansBtns[0].parentNode.removeChild(ansBtns[0]);
            }
        }
        setQuestion();
    } else {

        endQuiz();
    }
}
    
function endQuiz(){
//if timer drops below 0 then it will default to 0
    if (timeLeft < 0) {
         timeLeft = 0;
         scoreEl.textContent = timeLeft;
    }
    if (timeLeft > 0) {
        scoreEl.textContent = timeLeft;
    }
    showFinalScore();
}
    
function showFinalScore(){
    mainPg.setAttribute("class", "hidden");
    finalScoreEl.setAttribute("class", "display");
}
// function hide(event){
//     if (condition) {
        
//     }
//     event.target.class.toggle("hidden");
// }

function submitScore(event) {
    event.preventDefault();
    newName = nameInput.textContent;
    //new elements to load on highscore page
    var newNameLi = document.createElement("li");
    var newScoreLi = document.createElement("li");

    //entered name input
    if (newName) {
        newNameLi.textContent = newName;
    } else {
        newNameLi.textContent = "mysteryperson";
    }
    newScoreLi.textContent = scoreEl;
    nameScoreList.appendChild(newNameLi);
    scoreList.appendChild(newScoreLi);
    //save to local storage
    localStorage.setItem("highscores", highscoreList.innerHTML);
    
    //function load high scores
}
    
backBtn.addEventListener("click", function goBack(){
    mainPg.setAttribute("class", "display");
    highscorePage.setAttribute("class", "hidden");
});

var clearHS = document.getElementById("clear-btn");
clearHS.addEventListener("click", function clearScores(event) {
    
})