
$('document').ready(function() {
    $ww = $(window).width()
    $ic = "-" + $ww/5*6 + "px"
    console.log($ic)
    $('.slidebtn-c').on('click', function(){
        console.log($(".c-img:first").css("marginLeft"))
        if($('.c-img:first').css('marginLeft') == '0px'){
            $('.c-img:first').removeClass('img-slide lesser-slide less-slide')
            $('.c-img:first').animate({'margin-left':'-60vw'})
            $('.slidebtn-o').show()
        }else{
            $('.c-img:first').animate({'margin-left':'-120vw'})
            $('.slidebtn-c').hide()
        }
    })
    $('.slidebtn-o').on('click', function(){
        console.log($('.c-img:first').css('margin'))
        if($('.c-img:first').css('marginLeft') > $ic){
            $('.c-img:first').animate({'margin-left':'-60vw'})
            $('.slidebtn-c').show()
        }else{
            $('.c-img:first').animate({'margin-left':'0'})
            $('.slidebtn-o').hide()
        }
    })
    $(window).on("load", function() {
        console.log($('#landingpage').hasClass('active'))
        $.each($(".gridimg"), function(k, v) {
            if ($(this).width() > 200) { $(this).parent().addClass("big"); }
        });
        $.each($(".press-img"), function(k, v) {
            if ($(this).width() > 200) { $(this).parent().addClass("big"); }
        });
        
    });
    $(window).on('DOMMouseScroll mousewheel', function(){
        console.log('hallo')
     if($('#cases').hasClass('active')){
            $('.c-img:first').animate({'margin-left' : '0'}, 3000)
            console.log('hallo')
        }else{
            $('.c-img:first').removeClass('img-slide')
        }
    if($('#work').hasClass('active')){
            $('.w-img:first').addClass('img-slide')
            console.log('hallo')
        }else{
            $('.w-img:first').removeClass('img-slide')
        }
    });
});