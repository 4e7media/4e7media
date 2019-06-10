
$('document').ready(function(){
    $("#bgm-btn").click(function() {
      $("#brg-menu").removeClass("menu-close");
      $("#brg-menu").addClass("menu-open");
      $(".fas").addClass("closeslide");
      $(".bgm-txt").addClass("textslide");
      $(".wrapper").addClass("click-tr");
      $(".social-icons").addClass("social-slide");
      $("#bgm-btn").removeClass("show");
    });
    $("#alex").hide()
    $("#about-title").hide()
    $(".textslide").click(function(){
      $("#brg-menu").addClass("menu-close");
      $(".fas").removeClass("closeslide");
      $(".bgm-txt").removeClass("textslide");
      console.log("hallo")
    });
    $(".close-trigger").click(function(){
      $("#brg-menu").addClass("menu-close");
      $(".fas").removeClass("closeslide");
      $(".bgm-txt").removeClass("textslide");
      $(".wrapper").removeClass("click-tr");
      $(".social-icons").removeClass("social-slide");
      $("#bgm-btn").addClass("show");
    });
    $(".more").click(function(){
      $(".work-cont").height("auto")
      $(".more").hide()
      $(".less").show()
    });
    $(".less").click(function(){
      if (window.screen.width >400) {
        $(".work-cont").height("60vw")
      }
      else{
        $(".work-cont").height("360vw")
      }
      $(".less").hide()
      $(".more").show()
      $('html, body').animate({
        scrollTop: $("#work").offset().top
      }, 100)
    });
    $(".case-more").click(function(){
      $(".cases-cont").height("auto")
      $(".case-more").hide()
      $(".case-less").show()
    });
    $(".case-less").click(function(){
      if (window.screen.width >400) {
        $(".cases-cont").height("60vw")
      }
      else{
        $(".cases-cont").height("360vw")
      }
      $(".case-less").hide()
      $(".case-more").show()
      $('html, body').animate({
        scrollTop: $("#cases").offset().top
      }, 100)
      console.log(window.screen.width)
    });
    var domain = "https://" + window.location.hostname;

    function close_view(){
      if(document.referrer == domain + "/index.html"){
        history.back();
      }else{
        location.href= domain + "/index.html";
      }
    }
    jQuery(function($) {

      var $nav = $('#bgm-btn');
      var $win = $(window);
      var winH = $win.height();   // Get the window height.
  
      $win.on("scroll", function () {
          if ($(this).scrollTop() > winH ) {
              $nav.addClass("show");
          } else {
              $nav.removeClass("show");
          }
      }).on("resize", function(){ // If the user resizes the window
         winH = $(this).height(); // you'll need the new height value
      });
  
  });
  jQuery(function($) {

    var $v = $('.about-fixed');
    var $w = $(window);
    var wH = $w.height();   // Get the window height.

    $w.on("scroll", function () {
        if ($(this).scrollTop() > wH*4) {
            $v.show();
        } else {
            $v.hide();
        }
    }).on("resize", function(){ // If the user resizes the window
       wH = $(this).height(); // you'll need the new height value
    });

});
    
    function menuswitch() {
      var element = document.getElementById("#brg-menu");
      element.classList.add("menu-open");
    }
});
