# mod4-coding-quiz
Module 4 Challenge - Coding Quiz Game
## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
```
# Pseudo-code
```
HTML
    -Break down layout of webpage, wireframe div containers
    -Header:
        View high scores
        Timer
    -main pg:
        heading (quiz title)
        main content container
            quiz instructions
            start button

            quiz questions (heading)
            multiple answers list (buttons)
            after selection, small text (right/wrong)
        finish quiz pg
            your score
            input text box
            submit button
        highscores page
            two column list
                names
                scores
            go back button
            clear button
        
    total display pgs:
        start pg
        quiz pg
        finish pg
        highscore pg
JS
    -timer starts @75
        -wrong ans -15sec
        -timer dec 1 sec
        -inside header
        -hidden by view high score pg
        -quiz end if timer hit 0
        -time remain is score

    -question array
        -array>obj, sep by question & answer set
        -4 answers, 4 buttons, 1 correct
        -select correct answer, text appear "correct"
            -if select other, text appear "wrong"
                -time penalty
            -quiz end @time=0 or at end of questions

    -quiz end
        -timer stop if not 0
        -final score display
        -text input form, enter name
            if no text val, set placehold val
        -submit button event
            CAPTURE user input data
            SAVE to local storage
            DISPLAY on highscore page
                display highscore page
                append child (getitem, setitem)

    -start button click event:
        begin timer
        begin questions
    -view high score click event
        highscore page appear
        header, current pg hidden
            -back button click event
                go back to last pg (toggle display/class?)
            -clear button click event
                clears all saved data
    -restart quiz, possible to play again?
        clear timer and question array val
        start over funct?
```

# Description
```
    I first wrote out an HTML skeleton of div containers and essential elements and assigned classes and ids based on their intended function. 
    Larger containers used to group correlating elements based on their display/hidden behavior.  
    Though not as efficient as I like, used java to switch classes (reassigning) to have elements hide/display. 
    used java to create answer buttons dynamically, for loops to remove previous answer buttons at next question and if restarting quiz. 
    viewing high score page can happen at any time and back button returns user to the last view page or if quiz is done, start page. 
    user may restart quiz after finishing.
```

## Live Link
https://kumih0.github.io/mod4-coding-quiz/

# Screenshot

