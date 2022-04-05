document.addEventListener('keydown', start);
document.addEventListener('keydown', delChar);

var output = '';

function start(){
    setInterval("print()", "400");
    this.removeEventListener('keydown',start);
}

function print() {
    var result = Math.floor(Math.random() * 26);
    var charOut = String.fromCharCode(result + 65);

    output = document.getElementById("OUTPUT");
    output.innerHTML = charOut + output.innerHTML;
}

function delChar(e) {
    var lastWord = output.innerHTML.substr(-1);
    var input = document.getElementById("INPUT");
    input.innerHTML = e.key;

    if (lastWord == e.key) {
        output.innerHTML = output.innerHTML.substr(0, output.innerHTML.length - 1);
    }
}