var flag = 0;

function terminal(e, input) {

    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) {

        var terminalDiv = $('.terminal');
        var inputVal = $('.terminal-input').val();

        $('.console').last().remove();
        if(flag == 0) {
            terminalDiv.append('~ $ashish >> ' + inputVal);
        }
        else {
            terminalDiv.append('~/projects $ashish >> ' + inputVal);
        }
        if (inputVal == 'ls' && flag == 0) {
            terminalDiv.append('<p>projects &nbsp;&nbsp;resume.pdf &nbsp;&nbsp;game.app</p>');
        } else if (inputVal == 'ls' && flag == 1) {
            terminalDiv.append('<p>WikiSearch &nbsp;&nbsp;Clippy &nbsp;&nbsp;ink &nbsp;&nbsp;Erectus</p>');
        } else if (inputVal == 'open resume.pdf' && flag == 0) {
            window.location.hre = 'https://drive.google.com/file/d/0B3OeNoTC80mGaTBUbC1ESG5vN1k/view?usp=sharing';
        } else if (inputVal == 'cd projects') {
            terminalDiv.append('<p></p>');
            flag = 1;
        } else if ((inputVal == 'cd WikiSearch' ||  inputVal == 'cd ink') && flag == 1) {
            window.location.href = 'http://github.com/thinker3197/' + inputVal.slice(3, inputVal.length);
        } else if ((inputVal == 'cd Erectus' || inputVal == 'cd Clippy') && flag == 1) {
            window.location.href = 'http://github.com/The-Turing-Machine/' + inputVal.slice(3, inputVal.length);
        } else if (inputVal == 'cd ..' && flag == 1) {
            terminalDiv.append('<p></p>');
            flag = 0;
        } else {
            terminalDiv.append('<p>Enter something valid!</p>');
        }
        if(flag == 0) {
            terminalDiv.append('<p class="console"> ~ $ashish >> <input type = "text" class = "terminal-input" onKeyPress = "terminal(event, this)" autofocus></p>');
        }
        else {
            terminalDiv.append('<p class="console"> ~/projects $ashish >> <input type = "text" class = "terminal-input" onKeyPress = "terminal(event, this)" autofocus></p>');
        }
        $(".terminal-input").focus();
    }
}

$("#cover").delay(800).fadeOut(500);

$(document).ready(function() {
    $('.fa').on('click', function() {
        if ($('.intro').hasClass('clicked')) {
            $('.intro').removeClass('clicked');
        } else {
            $('.intro').addClass('clicked');
        }
    });
});