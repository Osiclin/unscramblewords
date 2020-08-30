var elname = document.getElementById('playername');
var msg = document.getElementById('feedback');
var myform = document.getElementById('myform');
var next = document.getElementById('next');

function checkLength(minLength) {
    if(elname.value.length < minLength) {
        var rule = msg.setAttribute('class', 'rule');
        msg.innerHTML = '<i class="fas fa-exclamation-triangle"></i>';
        msg.innerHTML += '<span class="warning"> Player name should be more than ' + minLength + ' characters.</span>';
    } else{
        msg.textContent = '';
    }
}

function nameTip(minLength) {
    var tips = msg.setAttribute('class', 'tips');
    msg.textContent = 'Tips: Should be more than ' + minLength + ' characters.';
}

function checkName(event) {
    if(elname.value.length < 3) {
        msg.innerHTML = '<i class="fas fa-exclamation-triangle"></i>';
        msg.innerHTML += '<span class="warning"> Player name cannot be empty and must be more than ' + 2 + ' characters.</span>';
        event.preventDefault();
    } 
}

function storeName() {
    var playerName = elname.value;
    sessionStorage.setItem('pn', playerName);
    return false;
}

elname.addEventListener('blur', function() {checkLength(2);}, false);
elname.addEventListener('focus', function() {nameTip(2);}, false);
myform.addEventListener('submit', checkName, false);
next.addEventListener('click', storeName, false);

