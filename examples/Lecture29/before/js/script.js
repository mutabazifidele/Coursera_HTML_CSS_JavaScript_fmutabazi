$(function(){
  // find the hamburger button

  $(".collapsed").blur(function(){ // when it loses focus and it's open closed collapse(hide) it. The button is visible for innerWidth<768px
    if(window.innerWidth < 768){
      $("#collapsable-nav").collapse('hide');
    }
  });
});
