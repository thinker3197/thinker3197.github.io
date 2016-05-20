var terminal = function() {
    var requiredText = '>> ';
    $('.terminal-input').on('input', function() {
        if (String($(this).val()).indexOf(requiredText) == -1) {
            $(this).val(requiredText);
        }
    });
}

$(document).ready(function() {
    $('.fa').on('click', function() {
        if ($('.intro').hasClass('clicked')) {
            $('.intro').removeClass('clicked');
        } else {
            $('.intro').addClass('clicked');
        }
    });
    terminal();
});
