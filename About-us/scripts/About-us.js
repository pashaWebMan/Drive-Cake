var mobileNav = document.getElementsByClassName('mobile-nav');

function openMobileNav() {
	mobileNav[0].style.top = "0%"
}

function closeMobileNav() {
  mobileNav[0].style.top = "-60%"
}

if (window.screen.orientation.type == 'portrait-primary') {
	window.screen.orientation.lock('portrait-primary')
};