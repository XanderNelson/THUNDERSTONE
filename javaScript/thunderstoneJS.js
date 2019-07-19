// if(window.scrollY==0){
//   document.body.style.backgroundColor = "red";
// }
// $(window).scroll(function(){
// 	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
// });
// $(window).scroll(function(){
// 	$('a').toggleClass('scrolled', $(this).scrollTop() > 50);
// });
if (window.screen.width >= 1024) {
    $(window).scroll(function(){
      $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
    });
    $(window).scroll(function(){
      $('a').toggleClass('scrolled', $(this).scrollTop() > 50);
    });
  }
  // Need to fix this if-else- screen size
  else{
    $(window).scroll(function(){
      $('nav').toggleClass('scrolled', $(this).scrollTop() >= 0);
    });
    $(window).scroll(function(){
      $('a').toggleClass('scrolled', $(this).scrollTop() >= 0);
    });
  }
  $(function () {
  $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
  });
