
$('document').ready(function() {
    var winw= $(window).width()
    var winh= $(window).height()
    if(winw > 450){
        console.log("epic")
        $("div").remove(".mfeat_cont");
    }else{
        $("div").remove(".feat_cont");
    }
    $('#home').fullpage({
        licenseKey: '65CF5AD2-DC6F4574-B7CBF278-BB170808',
        autoScrolling: false,
        scrollHorizontally: true,
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors: ['lp', 'campaigne', 'medien', 'wwd', 'case', 'works', 'platforms', 'ab-alex', 'ab-selma', 'presses', 'footers'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Landingpage', 'Campaigne', 'Medien', 'What we do', 'Cases', 'Work', 'Platforms', 'Alex', 'Selma', 'Press', 'Find Us' ],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',
        parallax: true,
        parallaxKey: 'NGU3bWVkaWEuY29tX2RBUWNHRnlZV3hzWVhnPTg3TQ==', //see https://goo.gl/xkUmHS
        parallaxOptions: {
            type: 'reveal',
            percentage: 100,
            property: 'transition'
        },
        onLeave: function(origin, destination, direction){
          if(origin.index == '7' && destination.index != '8'){
            $("#about-title").hide()
            $("#bgm-btn").css({"background" : "transparent"})
          }else if(origin.index == '8' && destination.index != '7'){
            $("#about-title").hide()
          }
        },
        afterLoad: function(origin, destination, direction){
            var nav= $("#fp-nav ul li a span")
            if(destination.index == '1'){
              nav.css('background', "black")
              $("#bgm-btn").css({'color':"black", "background" : "transparent"})
              $("#bgm-btn").addClass('show')
            }else if(destination.index == '2'){
              nav.css('background', "black")
              $("#bgm-btn").css({'color':"black", "background" : "transparent"})
              $("#bgm-btn").addClass('show')
            }else if(destination.index == '3'){
              nav.css('background', "white")
              $("#bgm-btn").css({'color':"white", "background" : "transparent"})
              $("#bgm-btn").addClass('show')
            }else if(destination.index == '4'){
              nav.css('background', "white")
              $("#bgm-btn").css({'color':"white", "background" : "transparent"})
              $("#bgm-btn").addClass('show')
            }else if(destination.index == '5'){
              nav.css('background', "white")
              $("#bgm-btn").css({'color':"white", "background" : "transparent"})
              $("#bgm-btn").addClass('show')
            }else if(destination.index == '6'){
              nav.css('background', "white")
              $("#bgm-btn").css({'color':"white", "background" : "transparent"})
              $("#bgm-btn").addClass('show')
            }else if(destination.index == '7'){
                $("#about-title").show()
                nav.css('background', "black")
                $("#bgm-btn").css({'color':"black","background" : "white"})
                $("#bgm-btn").addClass('black')
            }else if(destination.index == '8'){
              $("#about-title").show()
              nav.css('background', "black") 
              $("#bgm-btn").css({'color':"black","background" : "white"})
              $("#bgm-btn").addClass('black')
            }else if(destination.index == '9'){
              nav.css('background', "black")
              $("#bgm-btn").css({'color':"black", "background" : "transparent"})
              $("#bgm-btn").addClass('black')
            }else if(destination.index == '10'){
              nav.css('background', "white")
              $("#bgm-btn").css({'color':"white", "background" : "transparent"})
              $("#bgm-btn").addClass('show')
            }else if(destination.index == '0'){
              nav.css('background', "white")
              $("#bgm-btn").css({'color':"white", "background" : "transparent"})
              $("#bgm-btn").removeClass('show')
            }
        },
    });
   /* $('.owl-carousel').owlCarousel({
        items: 3,
        loop: true,
        autoplay: true,
        margin: 15,
        //slideBy: 3,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        autoplaySpeed: 2000,
        smartSpeed: 100,
        slideSpeed: 50,
        dots: true,
        dotsEach: 3,
        pagination:true,
        nav:true,
        responsiveBaseElement:"#home",
        responsive:{
            0:{
                items:1,
                center: true,
                dots: false,
            },
            600:{
                items:3,
            },
            1000:{
                items:3,
            }
        }
    });*/
    $('.work-cont').slick({
        infinite: true,
        row: 1,
        accessibility: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        cssEase: 'linear',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                row: 1,
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    })
    $('.cases-cont').slick({
        infinite: true,
        row: 1,
        accessibility: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay:true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                row: 1,
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    })
    $('.plattform-box').slick({
        infinite: true,
        row: 1,
        accessibility: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                row: 1,
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    })
});
$('.w-prev').click(function(){
    $('.work-cont').slick('slickPrev');
})
$('.w-next').click(function(){
    $('.work-cont').slick('slickNext');
})
$('.c-prev').click(function(){
    $('.cases-cont').slick('slickPrev');
})
$('.c-next').click(function(){
    $('.cases-cont').slick('slickNext');
})
$('.p-prev').click(function(){
    $('.plattform-box').slick('slickPrev');
})
$('.p-next').click(function(){
    $('.plattform-box').slick('slickNext');
})
$(".ab-btn").click(function(){
    $("#about-title").show()
    nav.css('background', "black")
    $("#bgm-btn").css({'color':"black", "background" : "transparent"})
    $("#bgm-btn").addClass('show')
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
    var $wp = $(window).width() * 0.7
    var $hp = $(window).height()

    $(window).on('load', function() {
        $(".wrapper").css("visibility", "visible")
        $(".load").hide()
        if ($hp >= $wp) {
            $('.bgvideo').css({ 'height': '100vh', 'width': 'auto' })
        } else {
            $('.bgvideo').css({ 'height': 'auto', 'width': '100vw' })
        }
    });
//open the menu
$("#bgm-btn").click(function() {
    $("#menu").removeClass("menu-close");
    $("#menu").addClass("menu-open");
    $(".fas").addClass("closeslide");
    $(".bgm-txt").addClass("textslide");
    $(".wrapper").addClass("click-tr");
    $(".social-icons").addClass("social-slide");
    $("#bgm-btn").hide();
});
//close the menu if u click text in the menu
$(".textslide").click(function() {
    $("#menu").addClass("menu-close");
    $(".fas").removeClass("closeslide");
    $(".bgm-txt").removeClass("textslide");
    console.log("hallo")
});
//close the menu on the X
$(".close-trigger").click(function() {
    $("#menu").addClass("menu-close");
    $(".fas").removeClass("closeslide");
    $(".bgm-txt").removeClass("textslide");
    $(".wrapper").removeClass("click-tr");
    $(".social-icons").removeClass("social-slide");
    $("#bgm-btn").show();
});
$(window).resize(function(){
    if(winw > 450){
        console.log("epic")
        $("div").remove(".mfeat_cont");
    }else{
        $("div").remove(".feat_cont");
    }
})