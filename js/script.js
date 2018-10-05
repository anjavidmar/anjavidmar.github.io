var screenWidth = window.innerWidth;
var headerHero = document.getElementById('header-hero');
var footerHero = document.getElementById('footer-hero');

console.log(screenWidth);

if (screenWidth < 600) {
  headerHero.src = './img/header-hero-mobile.jpg';
  footerHero.src = './img/footer-hero-mobile.jpg';
} else if (screenWidth < 1000) {
  headerHero.src = './img/header-hero-tablet.jpg';
  footerHero.src = './img/footer-hero-tablet.jpg';
} else {
  headerHero.src = './img/header-hero-desktop.jpg';
  footerHero.src = './img/footer-hero-desktop.jpg';
}


function menuButton(x) {
  x.classList.toggle("change");
  $(".menu").slideToggle(1000);
}