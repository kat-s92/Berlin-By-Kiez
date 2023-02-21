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


// const next = document.getElementById('next');
// const prev = document.getElementById("prev");
// const images = document.querySelector(".carousel-container");

// let currentCard = 0;

// next.addEventListener("click", () => {
//   if (currentCard < images.children.length -1)
// {currentCard++;
//   images.style.transitionDuration = "0.9s";
// images.style.transform = `translate(-${currentCard * 640}px)`;
// }
// else {
//   return;
// }
// });

// prev.addEventListener("click", () => {
//   if (currentCard > 0)
// {currentCard--;
//   images.style.transitionDuration = "0.9s";
// images.style.transform = `translate(-${currentCard * 640}px)`;
// }
// else {
//   return;
// }
// });
var counterNav = 1;
    setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 6){
        counter = 1;
      }
    }, 5000);
