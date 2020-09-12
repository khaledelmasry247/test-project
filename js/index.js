// Start js by Ahmed Salah

$(document).ready(function () {
  
  // Change NavBar BackgroundColor
  $(window).scroll(()=>{

  let aboutOffset = $('#about').offset().top;

  let wScroll = $(window).scrollTop();

  if (wScroll > aboutOffset) {

    
    $('#main-nav').css('backgroundColor', 'rgba(0,0,0,0.5)');
  } else {
    $('#main-nav').css('backgroundColor', 'transparent');
  }
});


 // Show Back to Top Button
 $(window).scroll(function () { 
  let wScroll = $(window).scrollTop();

  if (wScroll > 100) {
    $('#btnUp').fadeIn(500);
  }
  else{
    $('#btnUp').fadeOut(500);
  }

});

 // click on Back to Top
 $('#btnUp').click(function () { 
    
  $('html,body').animate( {scrollTop:'0'}, 2000)

});

});
