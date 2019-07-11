
$('document').ready(function() {
    $('#home').fullpage({
        //options here
        licenseKey: '65CF5AD2-DC6F4574-B7CBF278-BB170808',
        autoScrolling: true,
        scrollHorizontally: true,
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors: ['lp', 'campaigne', 'medien', 'wwd', 'case', 'works', 'platforms'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Landingpage', 'Campaigne', 'Medien', 'What we do', 'Cases', 'Work',
          'Platforms', ],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',
        parallax: true,
        parallaxOptions: {
          type: 'reveal',
          percentage: 62,
          property: 'translate'
        },
      });
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