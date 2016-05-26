function terminal(e, input) {

    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) {

        var terminalDiv = $('.terminal');
        var inputVal = $('.terminal-input').val();

        $('.console').last().remove();
        terminalDiv.append('~ $ashish >> ' + inputVal);
        if (inputVal == 'ls') {
            terminalDiv.append('<p>projects &nbsp;&nbsp;resume.pdf &nbsp;&nbsp;game.app</p>');
        } else if (inputVal == 'cat resume.pdf') {
            window.location.href='https://drive.google.com/file/d/0B3OeNoTC80mGaTBUbC1ESG5vN1k/view?usp=sharing';
        } else if (inputVal == 'cd projects') {
            terminalDiv.append('<p>WikiSearch &nbsp;&nbsp;Clippy &nbsp;&nbsp;Erectus</p>');
        } else if (inputVal == 'cat game.app' || inputVal == 'cd WikiSearch' || inputVal == 'cd Erectus' || inputVal == 'Clippy') {
            terminalDiv.append('<p>Will be added soon!</p>');
        } else {
            terminalDiv.append('<p>Enter something valid!</p>');
        }
        terminalDiv.append('<p class="console"> ~ $ashish >> <input type = "text" class = "terminal-input" onKeyPress = "terminal(event, this)" autofocus></p>');
        $(".terminal-input").focus();
    }
}

$(window).on('load', function() {
    $("#cover").delay(800).fadeOut(500);
});

$(document).ready(function() {
    $('.fa').on('click', function() {
        if ($('.intro').hasClass('clicked')) {
            $('.intro').removeClass('clicked');
        } else {
            $('.intro').addClass('clicked');
        }
    });
});
