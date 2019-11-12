$(document).ready(function(){
      $('.slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		draggable: false,
		responsive: [{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				draggable: true,
				arrows: false,
				centerMode: true,
			}
		}]
      });
    });
var popUpDiv = document.getElementsByClassName('popUpMenu');

function openPopUpMenu() {
	popUpDiv[0].style.display = "flex";
}
function closePopUpMenu() {
	popUpDiv[0].style.display = "none";
}
function openPopUpMenu1() {
	popUpDiv[1].style.display = "flex";
}
function closePopUpMenu1() {
	popUpDiv[1].style.display = "none";
}
function openPopUpMenu2() {
	popUpDiv[2].style.display = "flex";
}
function closePopUpMenu2() {
	popUpDiv[2].style.display = "none";
}
function openPopUpMenu3() {
	popUpDiv[3].style.display = "flex";
}
function closePopUpMenu3() {
	popUpDiv[3].style.display = "none";
}
function openPopUpMenu4() {
	popUpDiv[4].style.display = "flex";
}
function closePopUpMenu4() {
	popUpDiv[4].style.display = "none";
}
function openPopUpMenu5() {
	popUpDiv[5].style.display = "flex";
}
function closePopUpMenu5() {
	popUpDiv[5].style.display = "none";
}
function openPopUpMenu6() {
	popUpDiv[6].style.display = "flex";
}
function closePopUpMenu6() {
	popUpDiv[6].style.display = "none";
}
function openPopUpMenu7() {
	popUpDiv[7].style.display = "flex";
}
function closePopUpMenu7() {
	popUpDiv[7].style.display = "none";
};