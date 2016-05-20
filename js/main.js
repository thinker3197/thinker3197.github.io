function terminal(e, input) {
    var code = (e.keyCode ? e.keyCode : e.which);
    if (code == 13) {
        var terminalDiv = $('.terminal');
        var inputVal = $('.terminal-input').val();
        if (inputVal == 'ls') {
            terminalDiv.append('<p>projects &nbsp;&nbsp;resume.pdf &nbsp;&nbsp;game.app</p>');
        }
        terminalDiv.append('<p class="console"> ~ $ashish>> <input type = "text" class = "terminal-input" onKeyPress = "terminal(event, this)" autofocus></p>');
        }
    }

    $(document).ready(function() {
        $('.fa').on('click', function() {
            if ($('.intro').hasClass('clicked')) {
                $('.intro').removeClass('clicked');
            } else {
                $('.intro').addClass('clicked');
            }
        });
    });
