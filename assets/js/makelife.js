$('document').ready(function() {
    var $wh = $(window).height()
    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 150) {
            $('.lp').removeClass('active').addClass('not-active')
            $('#campaigns').removeClass('not-active').addClass('active')
        } else {
            $('.lp').css('top', '40vh')
        }
        console.log($(this).scrollTop())
    })
})