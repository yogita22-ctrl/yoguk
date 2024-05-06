const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});
document.addEventListener("DOMContentLoaded", function() {

	function isInViewport(element) {
	  var rect = element.getBoundingClientRect();
	  return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	  );
	}
  
	
	function showSkillTags() {
	  var skillTags = document.querySelectorAll('.skill-tag');
	  skillTags.forEach(function(tag) {
		if (isInViewport(tag)) {
		  tag.style.animation = 'fadeIn 1s ease forwards'; // Apply fadeIn animation
		}
	  });
	}
  
	
	window.addEventListener('scroll', showSkillTags);
  
	
	showSkillTags();
  });
  
  
