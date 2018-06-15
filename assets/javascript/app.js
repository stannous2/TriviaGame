// create an array to hold all questions and answers
const myQuestions = [{
    question: "What is the population in millions of state Ohio?",
    answers: ["2", "10", "35"],
    correct: 1
}
// , {
//     question: "What is the population in millions of state New Jersey?",
//     answers: ["10", "25", "5"],
//     correct: 0
// }, {
//     question: "What is the population in millions of state Texas?",
//     answers: ["2", "10", "25", "40"],
//     correct: 3
// }
];

let timeLeft = 5;
let clockElement = $('#clock');
let playButton = $('#playBtn');
let myTimer = 0;
let questionsDiv = $('#questions');
let answersDiv = $('#answers');
let correctAnswer;
let choiceButton = '';


startGame();
//evaluateAnswers();
$('answersDiv').on('click', '.choice-button', function(e) {
    let userSelect = $(this).data('id');
    console.log('user pick: ' + userSelect)
})

// $('choice-button').click(function(){
//     let fired_button = $(this).attr('id');
//     console.log('value - ' + fired_button);
// })

function countDown() {
    if (timeLeft <= -1) {
        clearTimeout(myTimer);
        resetGame();
    } else {
        clockElement.html('Time Remaining: ' + timeLeft);
        timeLeft--;
    }
}

function resetGame() {
    clockElement.html('');
    questionsDiv.html('');
    answersDiv.html('');
    (playButton.html('Play again')).show();
    timeLeft = 5;
}

function startGame() {
    playButton.click(function() {
        $(this).hide();
        clockElement.html('Time Remaining: ' + timeLeft)
        myTimer = setInterval(countDown, 1000);
        showQuestions();
        
    });
}

function showQuestions() {
    for (i = 0; i < myQuestions.length; i++) {
        questionsDiv.append(myQuestions[i].question);
        console.log('question - ' + myQuestions[i].question)
        for (j = 0; j < myQuestions[i].answers.length; j++) {
            console.log('answers - ' + myQuestions[i].answers[j])
            choiceButton = $("<button>");
            choiceButton.text(myQuestions[i].answers[j]);
            choiceButton.attr('data-id', j);
            choiceButton.attr("type", "radio");
            choiceButton.addClass('choice-button');
            answersDiv.append(choiceButton);
        }
    }
}

function evaluateAnswers() {
    $('answersDiv').on('click', 'button', function(e) {
        let userSelect = $(this).data('id');
        console.log('user pick: ' + userSelect)
    })
}