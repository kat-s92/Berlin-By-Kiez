const heroSectionEl = document.querySelector(".hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky-nav");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky-nav");
    }
  },
  {
    root: null, //in the viewport, null=viewport
    threshold: 0, //will fire one hero-section is 0% in the view port, ie none
    rootMargin: "-144px",
  }
);
obs.observe(heroSectionEl);

// LIKE BUTTON

const likeBtn = document.querySelector(".button-like");
let counter = 0;

likeBtn.addEventListener("click", function () {
  increaseCounter = counter++;
  document.querySelector(".count-number").textContent = increaseCounter;
});

// CAROUSEL
// The ul element ith all our imgs
const track = document.querySelector('.carousel-track-container');

// Select the slides as an array
const slides = Array.from(track.children);
console.log(track)

// When I click left btn, move slides to left
const leftButton = document.querySelector('.carousel-button--left');

// When I click right btn, move slides to right
const rightButton = document.querySelector('.carousel-button--right');

// When I click on nav btns, move to that slide
const dotsNav = document.querySelector('.carousel-nav');

// Select all nav dots
const dots = Array.from(dotsNav.children);
console.log(dotsNav.children)

// Working with the width of the carousel-track
const slideWidth = slides[0].getBoundingClientRect().width;
console.log(slideWidth)

// Arrange slides next to each other instead of being stacked
// slides[0].style.left = 0;
// slides[1].style.left = slideWidth + "px";
// ^^ this moved the second slide by the width of the slide

// Write loop for above and write function
const setSlidePosition = (slide, index) => {slide.style.left = slideWidth * index + 'px';};
slides.forEach(setSlidePosition);

//move slide to the right
// rightButton.addEventListener('click', e => {
//   const currentSlide = track.querySelector('.current-slide');
//   currentSlide.classList.remove('current-slide');
//   const nextSlide = currentSlide.nextElementSibling;
//   nextSlide.classList.add('current-slide')
//   const amountToMove = nextSlide.style.left;
//   track.style.transform = 'translateX(-'+amountToMove+')';
// })

// function for writing the code above for either left or right btns
const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  // the slide we click on will gain the class, doesn't have to be next or previous
  targetSlide.classList.add('current-slide')
}

rightButton.addEventListener('click', e => {
const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
moveToSlide(track, currentSlide, nextSlide);
});

leftButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
  moveToSlide(track, currentSlide, prevSlide);
  });

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove('current-slide');
  targetDot.classList.add('current-slide');
}


  dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');

    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides [targetIndex];
    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
  })
