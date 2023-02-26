var imgs = document.querySelectorAll('.carousel-track-container img');
console.log(imgs)
var dots = document.querySelectorAll('.carousel-nav-btn');
console.log(dots)
var currentImg = 0;
const interval = 5000;
var timer = setInterval(changeSlide, interval);

// Select the slides as an array


// When I click left btn, move slides to left
// const leftButton = document.querySelector('.carousel-button--left');

// When I click right btn, move slides to right
// const rightButton = document.querySelector('.carousel-button--right');

// When I click on nav btns, move to that slide

function changeSlide(n) {
  for (var i = 0; i < imgs.length; i++) { // reset
    imgs[i].style.opacity = 0;
    dots[i].className = dots[i].className.replace(' current-dot', '');
  }

  currentImg = (currentImg + 1) % imgs.length; // update the index number

  if (n != undefined) {
      clearInterval(timer);
      timer = setInterval(changeSlide, interval);
      currentImg = n;
  }

  imgs[currentImg].style.opacity = 1;
  dots[currentImg].className += ' current-dot';
}
