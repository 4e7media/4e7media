var wrap = $("#home");

wrap.on("scroll", function(e) {
    
  if (this.scrollTop > 147) {
    $("#").addClass("fix-search");
  } else {
    wrap.removeClass("fix-search");
  }
  
});