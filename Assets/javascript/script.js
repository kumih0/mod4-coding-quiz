// variables w correlating html element
var timer = document.getElementById("time");
var startBtn = document.getElementById("start-btn");
var qIndex; //the counter for question index 
var timeLeft;
var timeInterval; //declaring var timeint so can call to other funct

//variables relating to page contents for changing what's displayed
var h1El = document.getElementById("main-heading");
var details = document.getElementById("details");
var cardHeader = document.getElementById("card-header");
var mainPg = document.getElementById("main");

//result as in displays if selection was correct or incorrect answer
var resultEl = document.getElementById("display-result"); 
var result = document.getElementById("result");
var scoreEl = document.getElementById("score");
var finalScoreEl = document.getElementById("final-score");

//var relating to highscores, high score page, score form
var viewHS = document.getElementById("view-hs");
var highscorePage = document.getElementById("highscore-page");
var highscoreList = document.querySelector(".highscore-list");
var backBtn = document.getElementById("back-btn");
var clearHS = document.getElementById("clear-btn");
var nameInput = document.getElementById("name-input");
var newName;
var nameScoreList = document.getElementById("name-score-list");
var scoreList = document.getElementById("scores-list");
var submitBtn = document.getElementById("btn-submit")


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
 
//functions
function countdown(){       
    timeLeft = 75;
    timeInterval = setInterval(function countdown() {
            // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
                // Set the `textContent` of `timer` to show the remaining seconds
            timer.textContent = timeLeft + " seconds remaining";
                // Decrement `timeLeft` by 1
            timeLeft--;
        } else if (timeLeft === 1) {
            // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
            timer.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else if(timeLeft === 0){
            timer.textContent = "";
            clearInterval(timeInterval);
            // Call the function to end quiz and display final score
            endQuiz();
        }
    }, 1000);
};

function hideStartPg() {
    h1El.setAttribute("class", "hidden");
    details.setAttribute("class", "hidden");
};

function showQuiz() {
    cardHeader.setAttribute("class", "display");
    answerList.setAttribute("class", "display");
};

function displayHighscores(){
    mainPg.setAttribute("class", "hidden");
    finalScoreEl.setAttribute("class", "hidden");
    highscorePage.setAttribute("class", "display");
};

function setQuestion(){
    removeBtns();
    var currentQ = questionArray[qIndex].q;
    question.innerText = currentQ; 
    
    var currentAnswers = questionArray[qIndex].answers;

    for (let index = 0; index < currentAnswers.length; index++) {
        let btn = document.createElement("button");
        btn.innerText = currentAnswers[index];
        answerList.children[index].appendChild(btn);
        btn.setAttribute("class", "answer");
    }

    answerList.addEventListener("click", checkAns);
};

function checkAns(event){
    if (event.target.matches("button")) {
        var userSelect = event.target.innerText;
            
        resultEl.setAttribute("class", "display");
        if (userSelect === questionArray[qIndex].correctAns) {
            result.textContent = "Correct!";
            
        } else  {       
            result.textContent = "Incorrect!";
            timeLeft = timeLeft-15;
        }
    }
        nextQuestion();
};
   
function nextQuestion(){
    qIndex++;
    if (qIndex < questionArray.length) {
        removeBtns();
        setQuestion();
    } else {
        endQuiz();
    }
};

function removeBtns() {
    var ansBtns = answerList.getElementsByClassName("answer");
    // removes unnecessary buttons from persisting
    if (ansBtns.length > 0) {
        while (ansBtns[0]) {
            ansBtns[0].parentNode.removeChild(ansBtns[0]);
        }
    }
};

function endQuiz(){
//if timer drops below 0 then it will default to 0
    if (timeLeft > 0) {
        scoreEl.textContent = timeLeft;
    }
     if (timeLeft < 0) {
         timeLeft = 0;
         scoreEl.textContent = timeLeft;
    }    
    clearInterval(timeInterval);
    showFinalScore();
};
    
function showFinalScore(){
    mainPg.setAttribute("class", "hidden");
    finalScoreEl.setAttribute("class", "display");    
};

function submitScore(event) {
    event.preventDefault();
    newName = nameInput.value; //capture user input
    //new elements to load on highscore page
    var newNameLi = document.createElement("li");
    var newScoreLi = document.createElement("li");

    //add input to new li element
    if (newName) {
        newNameLi.textContent = newName;
    } else {
        newNameLi.textContent = "mysteryperson";
    }
    newScoreLi.textContent = scoreEl.textContent;
    console.log(scoreEl);
    nameScoreList.appendChild(newNameLi);
    scoreList.appendChild(newScoreLi);
    console.log(newNameLi, newScoreLi);

    //save to local storage
    localStorage.setItem("highscores-name", newNameLi.innerText);
    localStorage.setItem("highscores-score", newScoreLi.innerText);

    //function load high scores
    loadScores();
};

function loadScores(event) {
    var highscoresSaveNames = localStorage.getItem("highscores-name");
    var highscoresSaveScores = localStorage.getItem("highscores-score");
    console.log(highscoresSaveNames, highscoresSaveScores);
    if (highscoresSaveNames && highscoresSaveScores) {
        nameScoreList.innerText = highscoresSaveNames;
        scoreList.innerText = highscoresSaveScores;
    }
    displayHighscores();    hideHeader();
};

function showStartPg() {
    h1El.setAttribute("class", "display");
    details.setAttribute("class", "display");
    startBtn.setAttribute("class", "display");
    hideQuiz();
};

function hideQuiz() {
    cardHeader.setAttribute("class", "hidden");
    answerList.setAttribute("class", "hidden");
    resultEl.setAttribute("class", "hidden");
};

function hideHeader() {
    var header = document.getElementById("header");
    header.setAttribute("class", "hidden");
};

function showHeader() {
    var header = document.getElementById("header");
    header.setAttribute("class", "display");
};

//event listeners
startBtn.addEventListener("click", function startQuiz(event) {
    event.preventDefault();
    countdown();
    hideStartPg();
    showQuiz();

    startBtn.setAttribute("class", "hidden");
    qIndex = 0;
    setQuestion();
});

//if user clicks on view high score, ref load score funct
viewHS.addEventListener("click", loadScores);

submitBtn.addEventListener("click", submitScore);

backBtn.addEventListener("click", function goBack(){
    mainPg.setAttribute("class", "display");
    highscorePage.setAttribute("class", "hidden");
    //returns user to last page they were on if click on view high score during game, if on first page or viewing high score pg, return to first page
    if (qIndex < questionArray.length && cardHeader.className === "display" && answerList.className === "display") {
        showHeader();
    } else 
    showStartPg();        showHeader();
});

clearHS.addEventListener("click", function clearScores() {
    localStorage.removeItem("highscores");
    highscoreList.innerHTML = "";
});