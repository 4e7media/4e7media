
$('document').ready(function(){
    $("#bgm-btn").click(function() {
      $("#brg-menu").removeClass("menu-close");
      $("#brg-menu").addClass("menu-open");
      $(".fas").addClass("closeslide");
      $(".bgm-txt").addClass("textslide");
    });
    $(".bgm-close").click(function(){
      $("#brg-menu").addClass("menu-close");
      $(".fas").removeClass("closeslide");
      $(".bgm-txt").removeClass("textslide");
    });
    function menuswitch() {
      var element = document.getElementById("#brg-menu");
      element.classList.add("menu-open");
    }
});
