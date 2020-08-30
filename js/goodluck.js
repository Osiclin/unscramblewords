var msg = '<div id="goodluckblock" style="width: 100%; text-align: center;"><h2>GOODLUCK <span id="result" style="text-transform: uppercase;">PLAYER</span>!<br/>';
msg += '<i class="fas fa-thumbs-up"></i></h2></div>';

var elNote = document.createElement('div');
elNote.setAttribute('id', 'goodluck');
elNote.innerHTML = msg;
document.body.appendChild(elNote);

var result = document.getElementById('result');
result.textContent = sessionStorage.getItem('pn');


