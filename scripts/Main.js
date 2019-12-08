$(document).ready(function(){
  	$('.bg-slider').slick({
      	slidesToScroll: 1,
  		autoplay: true,
  		autoplaySpeed: 5000,
  		arrows: false,
  		draggable: false,
  		pauseOnHover: false,
  		accessibility: false,
  	});
});
var mobileNav = document.getElementsByClassName('mobile-nav');

function openMobileNav() {
  mobileNav[0].style.top = "0%"
};

function closeMobileNav() {
  mobileNav[0].style.top = "-60%"
};

screen.orientation.lock('landscape');