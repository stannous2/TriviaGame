// create an array to hold all questions and answers
const myQuestions = [
    {
      question: "What is the population in millions of state Ohio?",
      answers: {
        a: "2",
        b: "10",
        c: "35"
      },
      correctAnswer: "b"
    }
    // ,
    // {
    //   question: "What is the population in millions of state New Jersey?",
    //   answers: {
    //     a: "10",
    //     b: "25",
    //     c: "5"
    //   },
    //   correctAnswer: "c"
    // },
    // {
    //   question: "What is the population in millions of state Texas?",
    //   answers: {
    //     a: "2",
    //     b: "10",
    //     c: "25",
    //     d: "40"
    //   },
    //   correctAnswer: "d"
    // }
  ];








let timeLeft = 5;
let clockElement = $('#clock');
let playButton = $('#playBtn');
let myTimer = 0;
let questionsDiv = $('#questions')

startGame();

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
    (playButton.html('Play again')).show();
    timeLeft = 5;
    
}

function startGame() {
    playButton.click(function(){
        $(this).hide();
        clockElement.html('Time Remaining: ' + timeLeft)
        myTimer = setInterval(countDown, 1000);
        showQuestions();
    });
}

function showQuestions(){
    for(i = 0; i < myQuestions.length; i++){
        questionsDiv.append(myQuestions[i].question);
        
        questionsDiv.append(myQuestions[i].answers.a);
        questionsDiv.append(myQuestions[i].answers.b);
        questionsDiv.append(myQuestions[i].answers.c);
    }
    
    
}
