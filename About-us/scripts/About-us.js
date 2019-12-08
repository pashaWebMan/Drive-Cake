var mobileNav = document.getElementsByClassName('mobile-nav');

function openMobileNav() {
	mobileNav[0].style.top = "0%"
}

function closeMobileNav() {
  mobileNav[0].style.top = "-60%"
}

let currentScreenOrientation = window.screen.orientation.type;
window.screen.orientation.lock(currentScreenOrientation);