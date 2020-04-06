jQuery(document).ready(function($){
  $(".show-more-btn").click(function(e){
    $(".show-more-item:hidden").slice(0,3).fadeIn();
    if ($(".show-more-item:hidden").length < 1) $(this).fadeOut();
  })
})