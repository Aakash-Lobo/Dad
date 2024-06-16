$(function() {
    if (!$('.envelope').hasClass('open')) {
        setTimeout(function() {
            $('.envelope').removeClass('new').addClass('open');
        }, 5000); // 3000 milliseconds = 3 seconds
    }
});
