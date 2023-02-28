//$('header').hide();
$('.menu-button').click(function(){
    $('nav').fadeToggle();
});

//initalizes 
AOS.init();

//initializes jarallax
$('.jarallax').jarallax({
  speed: 0.2,
  type: 'scale'
});

var rellax = new Rellax('.rellax', {
  speed: -2,
  center: false,
  wrapper: null,
  round: true,
  vertical: true,
  horizontal: false
});