jQuery( document ).ready(function($) {

 $('.bxslider_testimonial').bxSlider({
	auto: true,
	controls: false,
	pager: true,
 });

 
var maxSlides,
    width = $(window).width();

if (width < 550) {
    maxSlides = 1;
} else {
    maxSlides = 3;
}

var myslider = $('.bx_memberslide').bxSlider({
	auto:true,
	controls:false,
	pager: true,
  minSlides: 3,
  maxSlides: 3,
  moveSlides: 1,
slideWidth: 350,
slideMargin: 40,  
    maxSlides: maxSlides,
});



var maxSlides,
    width = $(window).width();

if (width < 550) {
    maxSlides = 1;
} else {
    maxSlides = 3;
}

var myslider = $('.bx_profile_slide_2').bxSlider({
	auto:true,
	controls:false,
	pager: true,
  minSlides: 3,
  maxSlides: 3,
  moveSlides: 1,
slideWidth: 350,
slideMargin: 40,  
    maxSlides: maxSlides,
});
 

$('#nivoslider').nivoSlider({
controlNav:false,
nextText:'<i class="fa fa-angle-right"></i>',
prevText:'<i class="fa fa-angle-left"></i>',
pauseTime:3000,
manualAdvance:true, //to on off slide auto 
});




$('a').nivoLightbox({ 
    effect: 'fade',                               // The effect to use when showing the lightbox 
    theme: 'default',                             // The lightbox theme to use 
});






});


$(document).ready(function(){

 
var maxSlides,
    width = $(window).width();

if (width < 550) {
    maxSlides = 1;
} else {
    maxSlides = 6;
}

var myslider = $('.bx_gallery_home').bxSlider({
	auto:true,
	controls:false,
	pager: false,
  minSlides: 6,
  moveSlides: 1,
slideWidth: 350,
slideMargin: 0,  
    maxSlides: maxSlides,
});
 
	
	
});

