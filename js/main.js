$(document).ready(function() {
    $('.fa').on('click', function() {
    	if($('.intro').hasClass('clicked')){
        	$('.intro').removeClass('clicked');
    	}
    	else
    	{
    		$('.intro').addClass('clicked');
    	}
    });
});
