//Array of questions, clues, and answers
const wordClueAns = [
    ['ESTW', 'A red substance used in eating rice.', 'stew'],
    ['RODC', 'A small, flexible, insulated cable.', 'cord'],
    ['PTNAAIC', 'He is the leader a football team.', 'captain'],
    ['IOLEVTN', 'Intense force.', 'violent'],
    ['LALREMUB', 'The cloud cries.', 'umbrella'],
    ['VJEUELIN', 'Partaining to young people.', 'juvenile'],
    ['XEURCAICTE', 'Inflicting severe pain.', 'excruciate'],
    ['ORECDMU', 'Dignified propriety of behaviour, speech, dress.', 'decorum'],
    ['CERENTIT', 'Disposed to be silent.', 'reticent'],
    ['HKSSIRIM', 'A brisk conflict or encounter.', 'skirmish'],
    ['SCIMU', 'Dance to it.', 'music'],
    ['RWOBERS', 'Used to access the internet.', 'browser'],
    ['TVUDE', 'Keeps you warm at night.', 'duvet'],
    ['YLNUDRA', 'Get your clothes clean.', 'laundry']
];


var nextButtonQ = document.getElementById('next');
var content = document.getElementById('content');
var result = 0;
var questionNumber = 0;
var html;
var getAnswer = document.getElementById('answer');
var minute = 01;
var sec = 00;

//Generates random questions
function questionGenerate() {
    minute = 01;
    sec = 00;
    var sortq = Math.floor( Math.random() * wordClueAns.length );
    questionNumber++;
    html = '<h2>Question ' + questionNumber + ' of 10</h2>';
    html += '<h4 id="q"></h4>';
    html += '<p id="c"></p>';
    content.innerHTML = html;
    var q = document.getElementById('q');
    var c = document.getElementById('c');
    q.innerHTML = wordClueAns[sortq][0];
    c.innerHTML = '<b>Clue:</b> ' + wordClueAns[sortq][1];
    ans = wordClueAns[sortq][2];
    wordClueAns.splice(sortq, 1);
    console.log(wordClueAns)
}

//Checks if the user input is same as answer to question
function checkAnswer () {
    if (getAnswer.value.toLowerCase() == ans) {
        result += 1;
    } else if (getAnswer.value.toLowerCase() == "") {
        result += 0;
    } else {
        result += 0;
    }
    getAnswer.value = '';
}

//Generates result page
function resultPage () {
    if ( questionNumber > 10 ) {
        var playerName = sessionStorage.getItem('pn');
        html = '<h2>Result</h2>';
        html += '<div id="congrats"><span id="greet">nice try </span><span id="result">PLAYER</span></div>';
        html += '<div id="resultblock">';
        html += '<p class="result">' + result + '/10</div>';
        html += '<a href="index.html"><button id="next">END</button></a>';
        content.innerHTML = html;
        document.getElementById('result').textContent = playerName;
        congratsMsg();
        var removeForResult = document.getElementById('removeforresult');
        removeForResult.style.display = 'none';
        sessionStorage.clear();
    }
}


function congratsMsg() {
    if (result == 10) {
        document.getElementById('greet').innerHTML = 'EXCELLENT JOB <span style="font-size: 30px;">&#127942</span>';
    } else if (result > 6 && score < 10) {
        document.getElementById('greet').innerHTML = 'GOOD JOB <span style="font-size: 30px;">&#128578</span>';
    } else if (result > 4 && score < 7) {
        document.getElementById('greet').innerHTML = 'SOLID EFFORT <span style="font-size: 30px;">&#129488</span>';
    } else {
        document.getElementById('greet').innerHTML = 'POOR EFFORT <span style="font-size: 30px;">&#128580</span>';
    }
}

//sets timer for each question
setInterval(function() {
    document.getElementById("timer").innerHTML = minute + ":" + sec;
    sec--;
    if (minute == 01) {
        minute--;
        if (minute == 00) {
            sec = 59;
        }
    }
    if(minute <= 0 && sec < 0) {
        clearInterval(minute = 0);
        clearInterval(sec = 0);
        checkAnswer();
        questionGenerate();
        resultPage();
        minute = 01;
        sec = 00;
    }
}, 1000);


window.addEventListener('load', questionGenerate, false);
nextButtonQ.addEventListener('click', questionGenerate, false);
getAnswer.addEventListener('blur', checkAnswer, true);
nextButtonQ.addEventListener('click', resultPage, false);