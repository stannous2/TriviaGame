// create an array to hold all questions and answers
let myQuestions = [{
    question: "What is the population in millions of state Ohio?",
    answers: ["2", "10", "35"],
    correct: 1
}, {
    question: "What is the population in millions of state New Jersey?",
    answers: ["10", "25", "5"],
    correct: 0
}, {
    question: "What is the population in millions of state Texas?",
    answers: ["2", "10", "25", "40"],
    correct: 3
}];

let timeLeft = 30;
let clockElement = $('#clock');
let playButton = $('#playBtn');
let myTimer = 0;
let questionsDiv = $('#questions');
let answersDiv = $('.answers');
let correctAnswerDiv = $('#rightAnswers');
let incorrectAnswerDiv = $('#wrongAnswers');
let choiceButton = '';
let randomQuestion = '';
let rightCount = 0
let wrongCount = 0;;



startGame();
// correctAnswerDiv.append('Correct Answers: ' + rightCount);
// incorrectAnswerDiv.append('Incorrect Answers: ' + wrongCount);
evaluateAnswers();



function getRandomQuestion() {
    randomQuestion = myQuestions[Math.floor(Math.random() * myQuestions.length)];
    return randomQuestion;
}

function countDown() {
    if (timeLeft <= -1) {
        clearTimeout(myTimer);
        $('h3').html('GAME OVER...')
        resetBoard();
    } else {
        clockElement.html('Time Remaining: ' + timeLeft);
        timeLeft--;
    }
}

function resetBoard() {
    clockElement.html('');
    questionsDiv.html('');
    answersDiv.html('');
    //randomQuestion = '';
    getRandomQuestion();
}

function startGame() {
    playButton.click(function () {
        $(this).hide();
        clockElement.html('Time Remaining: ' + timeLeft)
        myTimer = setInterval(countDown, 1000);
        showQuestions();
    });
}

function showQuestions() {
    getRandomQuestion();
    questionsDiv.append(randomQuestion.question);
    console.log('question - ' + randomQuestion.question)
    for (i = 0; i < randomQuestion.answers.length; i++) {
        console.log('choices - ' + randomQuestion.answers[i])
        console.log('correct answer is - ' + randomQuestion.correct)
        choiceButton = $("<button>");
        choiceButton.text(randomQuestion.answers[i]);
        choiceButton.attr('data-id', i);
        choiceButton.attr('data-value', i);
        choiceButton.attr("type", "radio");
        choiceButton.addClass('choice-button');
        answersDiv.append(choiceButton);
    }
}

function evaluateAnswers() {
    $(answersDiv).on('click', 'button', function (e) {

        let userSelect = $(this).data('value');
        console.log('user pick: ' + userSelect);
        let correctChoice = randomQuestion.correct;
        console.log('correct answer is: ' + correctChoice);

        if (userSelect === correctChoice) {
            rightCount++;
            console.log('You got it correct...' + correctChoice);
            correctAnswerDiv.html('Correct Answers: ' + rightCount);
        } else {
            wrongCount++;
            console.log('wrong count...' + wrongCount);
            incorrectAnswerDiv.html('Incorrect Answers: ' + wrongCount);
        }
        questionsDiv.html('');
        answersDiv.html('');
        showQuestions();
        //resetBoard();

    })
}

function showResults() {

}