$('document').ready(function () {
  console.log("3");

  var z_i = 99
  var n_i = 0;
  var under = false;
  var length = $(".work-display > .inner-cont").length;
  console.log($(".work-display > .inner-cont").length);

  $(".inner-cont").each(function () {
    z_i--;
    $(this).css("z-index", z_i);
    $(this).addClass("box_" + n_i),
      n_i++;
  });
  $(".box_0").addClass("act")
  var active = false;
  var winw = $(window).width()
  var winh = $(window).height()
  if (winw > 450) {
    console.log("epic")
    $("div").remove(".mfeat_cont");
  } else {
    $("div").remove(".feat_cont");
  }

  $('#home').fullpage({
    licenseKey: '65CF5AD2-DC6F4574-B7CBF278-BB170808',
    autoScrolling: true,
    scrollHorizontally: true,
    //Navigation
    menu: '#menu',
    lockAnchors: false,
    anchors: ['lp', 'campaigne', 'medien', 'wwd', 'case', 'works', 'platforms', 'ab-alex', 'ab-selma', 'presses', 'footers'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Landingpage', 'Campaigne', 'Medien', 'What we do', 'Cases', 'Work', 'Platforms', 'Alex', 'Selma', 'Press', 'Find Us'],
    showActiveTooltip: false,
    slidesNavigation: false,
    slidesNavPosition: 'bottom',
    scrollOverflow: true,
    parallax: true,
    setScrollingSpeed: 1000,
    parallaxKey: 'NGU3bWVkaWEuY29tX2RBUWNHRnlZV3hzWVhnPTg3TQ==', //see https://goo.gl/xkUmHS
    parallaxOptions: {
      type: 'reveal',
      percentage: 100,
      property: 'transition'
    },
    onLeave: function (origin, destination, direction) {
      if (origin.index == '7' && destination.index != '8') {
        $("#about-title").hide()
        $("#bgm-btn").css({
          "background": "transparent"
        })
      } else if (origin.index == '8' && destination.index != '7') {
        $("#about-title").hide()
      } else if (origin.index == '5') {
        $.fn.fullpage.setAllowScrolling(true, 'down, up');
        console.log("allowScroll");
      }
    },

    afterLoad: function (origin, destination, direction) {
      var nav = $("#fp-nav ul li a span")
      console.log("after load indexÖ", destination.index)
      if (destination.index == '1') {
        nav.css('background', "black")
        $("#bgm-btn").css({
          'color': "black",
          "background": "transparent"
        })
        $("#bgm-btn").addClass('show')
        active = false;
        $.fn.fullpage.setAllowScrolling(true, 'down, up');
      } else if (destination.index == '2') {
        nav.css('background', "black")
        $("#bgm-btn").css({
          'color': "black",
          "background": "transparent"
        })
        $("#bgm-btn").addClass('show')
        active = false;
        $.fn.fullpage.setAllowScrolling(true, 'down, up');
      } else if (destination.index == '3') {
        nav.css('background', "white")
        $("#bgm-btn").css({
          'color': "white",
          "background": "transparent"
        })
        $("#bgm-btn").addClass('show')
        active = false;
      } else if (destination.index == '4') {
        nav.css('background', "white")
        $("#bgm-btn").css({
          'color': "white",
          "background": "transparent"
        })
        $("#bgm-btn").addClass('show')
        active = false;
      } else if (destination.index == '5') {
        nav.css('background', "white")
        $("#bgm-btn").css({
          'color': "white",
          "background": "transparent"
        })
        $("#bgm-btn").addClass('show')
        // fixit()
      } else if (destination.index == '6') {
        nav.css('background', "white")
        $("#bgm-btn").css({
          'color': "white",
          "background": "transparent"
        })
        $("#bgm-btn").addClass('show')
        under = true;
        active = false;
      } else if (destination.index == '7') {
        $("#about-title").show()
        nav.css('background', "black")
        $("#bgm-btn").css({
          'color': "black",
          "background": "white"
        })
        $("#bgm-btn").addClass('black')
        under = true;
        active = false;
      } else if (destination.index == '8') {
        $("#about-title").show()
        nav.css('background', "black")
        $("#bgm-btn").css({
          'color': "black",
          "background": "white"
        })
        $("#bgm-btn").addClass('black')
        under = true;
        active = false;
      } else if (destination.index == '9') {
        nav.css('background', "black")
        $("#bgm-btn").css({
          'color': "black",
          "background": "transparent"
        })
        $("#bgm-btn").addClass('black')
        under = true;
        active = false;
      } else if (destination.index == '10') {
        nav.css('background', "white")
        $("#bgm-btn").css({
          'color': "white",
          "background": "transparent"
        })
        $("#bgm-btn").addClass('show')
        under = true;
        active = false;
      } else if (destination.index == '0') {
        nav.css('background', "white")
        $("#bgm-btn").css({
          'color': "white",
          "background": "transparent"
        })
        $("#bgm-btn").removeClass('show')

      }
    },
  });
  $(".mfp-close").click(function () {
    Location.reload()

  });
  var l_i = 0;
  var run = false;

  function rundelay(params) {
    run = true;
    setTimeout(() => {
      run = false;
    }, 500);
  }
  var win_w = $(window).width();

  function fixit() {
    if (win_w > 900) {

      if ($(".box_3").hasClass("act") == true) {
        $.fn.fullpage.setAllowScrolling(false, 'up');
        console.log("START BLOCKING! )up=");
        active = true;
      } else {
        $.fn.fullpage.setAllowScrolling(false, 'down');
        console.log("START BLOCKING! down");
        active = true;
      }

    }
  }
  var up_endz = false;
  var down_endz = false;

  function setz_up() {
    if (up_endz == false) {
      $(".act").addClass("semi")
      $(".act").prev().addClass("act")
      $(".semi").removeClass("act")
      $(".semi").removeClass("semi")
      $(".act").animate({
        "top": "0vw"
      }, 300)
    }
  }

  function setz_down() {
    if (down_endz == false) {
      $(".act").addClass("semi")
      $(".act").next().addClass("act")
      $(".semi").animate({
        "top": "-40vw"
      }, 300)
      $(".semi").removeClass("act")
      $(".semi").removeClass("semi")
    }
  }

  function movezdown() {
    if ($(".box_0").hasClass("act")) {
      $.fn.fullpage.setAllowScrolling(false, 'up');
      console.log("START BLOCKING! )up1");
      setz_down()
    } else if ($(".box_2").hasClass("act")) {
      setz_down()
      $.fn.fullpage.setAllowScrolling(true, 'down');
      console.log("free down");
      down_endz = true
    } else {
      setz_down()
    }
    rundelay()
  }

  function movezup() {
    if ($(".box_1").hasClass("act") == true) {
      setz_up()
      $.fn.fullpage.setAllowScrolling(true, 'up');
      console.log("free up");
      up_endz = true

    } else if ($(".box_3").hasClass("act") == true) {
      $.fn.fullpage.setAllowScrolling(false, 'down');
      console.log("look down");
      setz_up()
    } else {
      setz_up()
    }
    rundelay()
  }
  jQuery("#press-gallery").unitegallery({
    gallery_theme: "tiles",
    tiles_type: "justified",
    tiles_min_columns: 7,
  }); 
  $(window).bind('mousewheel', function (event) {
    if (active == true) {
      if (run == false) {
        if (event.originalEvent.wheelDelta > 0) {
          console.log("up");
          if (run == false) {
            movezup()
            down_endz = false;
          }
        } else {
          console.log("down");

          if (run == false) {
            movezdown()
            up_endz = false;
          }

        }
      }
    }
  });
  $(".worklink").click(function (e) {
    e.preventDefault()
    data= $(this).attr("href");
    console.log(data);
    $(".gallery").css("display" , "flex");
    $(".gallery").load(data + ".html")
    $.fn.fullpage.setAllowScrolling(false, 'up, down')
  })
  $(".gal-close").click(function (e) { 
    e.preventDefault();
    $(".gallery").css("display" , "none");
    $.fn.fullpage.setAllowScrolling(true, 'up, down')
    $(".gallery").empty();
  });

  //open the menu
console.log("nice1");
$("#bgm-btn").on('click touchstart', function() {
  console.log("nice");
  
  $("#menu").removeClass("menu-close");
  $("#menu").addClass("menu-open");
  $(".fas").addClass("closeslide");
  $(".bgm-txt").addClass("textslide");
  $(".wrapper").addClass("click-tr");
  $(".social-icons").addClass("social-slide");
  $("#bgm-btn").hide();
});
//close the menu if u click text in the menu
$(".textslide").click(function () {
  $("#menu").addClass("menu-close");
  $(".fas").removeClass("closeslide");
  $(".bgm-txt").removeClass("textslide");
  console.log("hallo")
});
//close the menu on the X
$(".close-trigger").click(function () {
  $("#menu").addClass("menu-close");
  $(".fas").removeClass("closeslide");
  $(".bgm-txt").removeClass("textslide");
  $(".wrapper").removeClass("click-tr");
  $(".social-icons").removeClass("social-slide");
  $("#bgm-btn").show();
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

  $('.cases-cont').slick({
    infinite: true,
    row: 1,
    accessibility: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    nextArrow: '.next_caro',
    prevArrow: '.previous_caro',
    responsive: [{
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
    responsive: [{
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
  $('.w-prev').click(function () {
    $('.work-cont').slick('slickPrev');
  })
  $('.w-next').click(function () {
    $('.work-cont').slick('slickNext');
  })
  $('.c-prev').click(function () {
    $('.cases-cont').slick('slickPrev');
  })
  $('.c-next').click(function () {
    $('.cases-cont').slick('slickNext');
  })
  $('.p-prev').click(function () {
    $('.plattform-box').slick('slickPrev');
  })
  $('.p-next').click(function () {
    $('.plattform-box').slick('slickNext');
  })
});

$(".ab-btn").click(function () {
  $("#about-title").show()
  nav.css('background', "black")
  $("#bgm-btn").css({
    'color': "black",
    "background": "transparent"
  })
  $("#bgm-btn").addClass('show')
})
$(window).on("load", function () {
  $.each($(".gridimg"), function (k, v) {
    if ($(this).width() > 200) {
      $(this).parent().addClass("big");
    }
  });
  $.each($(".press-img"), function (k, v) {
    if ($(this).width() > 200) {
      $(this).parent().addClass("big");
    }
  });

});
var $wp = $(window).width() * 0.7
var $hp = $(window).height()
$(window).on('load', function () {
  $(".wrapper").css("visibility", "visible")
  $(".load").hide()
  if ($hp >= $wp) {
    $('.bgvideo').css({
      'height': '100vh',
      'width': 'auto'
    })
  } else {
    $('.bgvideo').css({
      'height': 'auto',
      'width': '100vw'
    })
  }
});
