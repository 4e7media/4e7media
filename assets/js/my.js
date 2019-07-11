
$('document').ready(function() {
   /* $ww = $('.c-img').width()
    $ic = "-" + $ww*6 + "px"
    $hic = "-" + $ww*2 + "px"
    $hdic = "-" + $ww*8 + "px"
    $dic = "-" + $ww*12 + "px"
    $htic = "-" + $ww*15 + "px"
    $tic = "-" + $ww*18 + "px"
    $hqic = "-" + $ww*21 + "px"
    $qic = "-" + $ww*24 + "px"
    console.log($ic)
    $(window).on('resize', function(){
        $ww = $(window).width()
    })
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
        if($('.c-img:first').css('marginLeft') > $hic){
            $('.c-img:first').animate({'margin-left':'0'})
            $('.slidebtn-o').hide() 
        }else if($('.c-img:first').css('marginLeft') > $ic){
            $('.c-img:first').animate({'margin-left':'-60vw'})
            $('.slidebtn-c').show()
        }
    })
    $('.w-slidebtn-c').on('click', function(){
        console.log($(".w-img:first").css("marginLeft"))
        if($('.w-img:first').css('marginLeft') == '0px'){
            $('.w-img:first').removeClass('img-slide lesser-slide less-slide')
            $('.w-img:first').animate({'margin-left':'-60vw'})
            $('.w-slidebtn-o').show()
        }else if($('.w-img:first').css('marginLeft') >= $hic){
            $('.w-img:first').animate({'margin-left':'-120vw'})
        }else if($('.w-img:first').css('marginLeft') >= $ic){
            $('.w-img:first').animate({'margin-left':'-180vw'})
        }else if($('.w-img:first').css('marginLeft') >= $hdic){
            $('.w-img:first').animate({'margin-left':'-240vw'})
        }else if($('.w-img:first').css('marginLeft') >= $dic){
            $('.w-img:first').animate({'margin-left':'-300vw'})
        }else if($('.w-img:first').css('marginLeft') >= $htic){
            $('.w-img:first').animate({'margin-left':'-360vw'})
        }else if($('.w-img:first').css('marginLeft') >= $tic){
            $('.w-img:first').animate({'margin-left':'-420vw'})
        }else if($('.w-img:first').css('marginLeft') >= $hqic){
            $('.w-img:first').animate({'margin-left':'-480vw'})
            $('.w-slidebtn-c').hide()
        }
    })
    $('.w-slidebtn-o').on('click', function(){
        console.log($(".w-img:first").css("marginLeft"))
        if($('.w-img:first').css('marginLeft') >= $qic){
            $('.w-img:first').animate({'margin-left':'-420vw'})
            $('.w-slidebtn-c').show()
        }else if($('.w-img:first').css('marginLeft') >= $hqic){
            $('.w-img:first').animate({'margin-left':'-360vw'})
        }else if($('.w-img:first').css('marginLeft') >= $tic){
            $('.w-img:first').animate({'margin-left':'-300vw'})
        }else if($('.w-img:first').css('marginLeft') >= $htic){
            $('.w-img:first').animate({'margin-left':'-240vw'})
        }else if($('.w-img:first').css('marginLeft') >= $dic){
            $('.w-img:first').animate({'margin-left':'-180vw'})
        }else if($('.w-img:first').css('marginLeft') >= $hdic){
            $('.w-img:first').animate({'margin-left':'-120vw'})
        }else if($('.w-img:first').css('marginLeft') >= $ic){
            $('.w-img:first').animate({'margin-left':'-60vw'})
        }else if($('.w-img:first').css('marginLeft') >= $hic){
            $('.w-img:first').animate({'margin-left':'0'})
            $('.w-slidebtn-o').hide()
        }
    })*/
    $('.owl-carousel').owlCarousel({
        items: 3,
        loop: true,
        Center: true,
        autoplay: true,
        //slideBy: 3,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        autoplaySpeed: 2000,
        smartSpeed: 100,
        slideSpeed: 50,
        dots: true,
        pagination:false,
        navigation:true,
        responsiveBaseElement:"#home",
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:3,
            }
        }
    }),
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