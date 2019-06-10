
$('document').ready(function(){
    $("#bgm-btn").click(function() {
      $("#brg-menu").removeClass("menu-close");
      $("#brg-menu").addClass("menu-open");
      $(".fas").addClass("closeslide");
      $(".bgm-txt").addClass("textslide");
      $(".wrapper").addClass("click-tr");
      $(".social-icons").addClass("social-slide");
    });
    $(".textslide").click(function(){
      $("#brg-menu").addClass("menu-close");
      $(".fas").removeClass("closeslide");
      $(".bgm-txt").removeClass("textslide");
      console.log("hallo")
    });
    $(".bgm-close").click(function(){
      $("#brg-menu").addClass("menu-close");
      $(".fas").removeClass("closeslide");
      $(".bgm-txt").removeClass("textslide");
      $(".wrapper").removeClass("click-tr");
      $(".social-icons").removeClass("social-slide");
    });
    $(".more").click(function(){
      $(".work-cont").height("auto")
      $(".more").hide()
      $(".less").show()
    });
    $(".less").click(function(){
      $(".work-cont").height("60vw")
      $(".less").hide()
      $(".more").show()
      $('html, body').animate({
        scrollTop: $("#work").offset().top
      }, 100)
    });
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
    
    function menuswitch() {
      var element = document.getElementById("#brg-menu");
      element.classList.add("menu-open");
    }
});
