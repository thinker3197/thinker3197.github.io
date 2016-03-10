var trackingId='UA-74926903-1';

(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', trackingId, 'auto');

ga('send', 'pageview');

$(".btn").click(function(){
    ga('send', 'event', 'button', 'click', 'Download');
});

var image_variations = [
  'header.jpg',
  '56H.jpg'
]

var variation = cxApi.chooseVariation();

window.onload = function(){
exp_image = document.getElementById('img-responsive');
exp_image.src = image_variations[variation];
}