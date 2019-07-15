
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
        parallaxKey: 'INSERT YOUR EXTENSION KEY HERE', //see https://goo.gl/xkUmHS
        parallaxOptions: {
            type: 'reveal',
            percentage: 100,
            property: 'transition'
        },
    });
    $('.owl-carousel').owlCarousel({
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
        pagination:false,
        navigation:true,
        responsiveBaseElement:"#home",
        responsive:{
            0:{
                items:1,
                center: true,
            },
            600:{
                items:3,
            },
            1000:{
                items:3,
            }
        }
    });

});

$(window).on("load", function() {
        console.log($('#landingpage').hasClass('active'))
        $.each($(".gridimg"), function(k, v) {
            if ($(this).width() > 200) { $(this).parent().addClass("big"); }
        });
        $.each($(".press-img"), function(k, v) {
            if ($(this).width() > 200) { $(this).parent().addClass("big"); }
        });
        
    });
//open the menu
$("#bgm-btn").click(function() {
    $("#menu").removeClass("menu-close");
    $("#menu").addClass("menu-open");
    $(".fas").addClass("closeslide");
    $(".bgm-txt").addClass("textslide");
    $(".wrapper").addClass("click-tr");
    $(".social-icons").addClass("social-slide");
    $("#bgm-btn").removeClass("show");
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
    $("#bgm-btn").addClass("show");
});
$(window).resize(function(){
    if(winw > 450){
        console.log("epic")
        $("div").remove(".mfeat_cont");
    }else{
        $("div").remove(".feat_cont");
    }
})