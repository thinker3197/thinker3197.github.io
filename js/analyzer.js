var trackingId = 'UA-74926903-1';

(function(i, s, o, g, r, a, m) {
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', trackingId, 'auto');

var image_variations = [
    'header.jpg',
    '56H.jpg'
]

var variation = cxApi.chooseVariation();

window.onload = function() {
    exp_image = document.getElementById('img-responsive');
    exp_image.src = image_variations[variation];
}

ga('send', 'pageview');

$(".btn").click(function() {
    ga('send', 'event', 'button', 'click', 'Download');
});