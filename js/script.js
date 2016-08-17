$(document).ready(function(){
  console.log("banana");
  //fade speed
  var speed = 500;
  //auto slider options
  var autoswitch = true;
  //auto slider speed
  var autoswitch_speed = 4000;

  //add initial active class
  $('.slide').first().addClass('active');

  //HIde all slides
  $('.slide').hide();

  // Show first slide

  $('.active').show();

  $('#next').on('click',nextSlide);

  $('#prev').on('click',prevSlide);

  if(autoswitch==true){
    setInterval(nextSlide,autoswitch_speed);
  }

//switch to the next slide
function nextSlide(){
  $('.active').removeClass('active').addClass('oldActive');
  if($('.oldActive').is(':last-child')){
    $('.slide').first().addClass('active');
  }else{
    $('.oldActive').next().addClass('active');
    // $('#next').hide();
  }

  $('.oldActive').removeClass('oldActive');
  $('.slide').fadeOut(speed);
  $('.active').fadeIn(speed);
};

function prevSlide(){

    $('.active').removeClass('active').addClass('oldActive');

    if($('.oldActive').is(':first-child')){
      $('.slide').last().addClass('active');
    }else{
      $('.oldActive').prev().addClass('active');
    }
    $('.oldActive').removeClass('oldActive');
    $('.slide').fadeOut(speed);
    $('.active').fadeIn(speed);
}

});
