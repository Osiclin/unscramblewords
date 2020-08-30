var msg = '<div id="loadtext"></div>';
var elNote = document.getElementById('loadpage');
elNote.innerHTML = msg;

var i = 0;
var txt = 'UNSCRAMBLE WORDS';
var speed = 200;
function typeWriter() {
    if (i < txt.length) {
        document.getElementById('loadtext').textContent += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();
