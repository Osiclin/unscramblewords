var xhr = new XMLHttpRequest();                 // Create XMLHttpRequest object

xhr.onload = function() {                       // When response has loaded
  // The following conditional check will not work locally - only on a server
  if(xhr.status === 200) {                       // If server status was ok
    document.getElementById('content').innerHTML = xhr.responseText; // Update
  }
};

xhr.open('GET', 'data/result.html', true);        // Prepare the request
xhr.send(null);                                 // Send the request

var pname = document.getElementById('result');
pname.textContent = sessionStorage.getItem('pn');

var sc1, sc2, sc3, sc4, sc5, sc6, sc7, sc8, sc9, sc10;
sc1 = parseInt(sessionStorage.getItem('score1'));
sc2 = parseInt(sessionStorage.getItem('score2'));
sc3 = parseInt(sessionStorage.getItem('score3'));
sc4 = parseInt(sessionStorage.getItem('score4'));
sc5 = parseInt(sessionStorage.getItem('score5'));
sc6 = parseInt(sessionStorage.getItem('score6'));
sc7 = parseInt(sessionStorage.getItem('score7'));
sc8 = parseInt(sessionStorage.getItem('score8'));
sc9 = parseInt(sessionStorage.getItem('score9'));
sc10 = parseInt(sessionStorage.getItem('score10'));

var scoreCalc = sc1 + sc2 + sc3 + sc4 + sc5 + sc6 + sc7 + sc8 + sc9 + sc10;
var score = scoreCalc;

if (score == 10) {
    document.getElementById('greet').innerHTML = 'EXCELLENT JOB <span style="font-size: 30px;">&#127942</span>';
} else if (score > 6 && score < 10) {
    document.getElementById('greet').innerHTML = 'GOOD JOB <span style="font-size: 30px;">&#128578</span>';
} else if (score > 4 && score < 7) {
    document.getElementById('greet').innerHTML = 'SOLID EFFORT <span style="font-size: 30px;">&#129488</span>';
} else {
    document.getElementById('greet').innerHTML = 'POOR EFFORT <span style="font-size: 30px;">&#128580</span>';
}

var calc = document.getElementById('score');
calc.textContent = score;

sessionStorage.removeItem('score1');
sessionStorage.removeItem('score2');
sessionStorage.removeItem('score3');
sessionStorage.removeItem('score4');
sessionStorage.removeItem('score5');
sessionStorage.removeItem('score6');
sessionStorage.removeItem('score7');
sessionStorage.removeItem('score8');
sessionStorage.removeItem('score9');
sessionStorage.removeItem('score10');
sessionStorage.removeItem('pn');