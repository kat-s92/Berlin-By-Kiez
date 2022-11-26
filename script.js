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
