let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navigation").style.top = "-15px";
  } else {
    document.getElementById("navigation").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let callToActionText1 = document.getElementById("callToActionText1");
let callToActionText2 = document.getElementById("callToActionText2");
let callToActionText3 = document.getElementById("callToActionText3");

function textWarp(text) {
  let iterations = 0;
  const interval = setInterval(() => {
    text.textContent = text.textContent
      .split("")
      .map((letter, index) => {
        if (index < iterations) {
          return text.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iterations >= text.dataset.value.length) clearInterval(interval);

    iterations += 1 / 4;
  }, 30);
}

function textWarpHero() {
  setTimeout(function () {
    textWarp(callToActionText1);
  }, 3000);
  setTimeout(function () {
    textWarp(callToActionText2);
  }, 6000);
  setTimeout(function () {
    textWarp(callToActionText3);
  }, 9000);
}

textWarpHero();
setInterval(textWarpHero, 10000);

const animation_elementsOne = document.querySelectorAll(".CTA");
const observerOne = makeObserver("CTA-animation", 0.65);
setObserve(animation_elementsOne, observerOne);

const animation_elementsTwo = document.querySelectorAll(".dot-container");
const observerTwo = makeObserver("dot-container-visible", 0.45);
setObserve(animation_elementsTwo, observerTwo);

function makeObserver(classname, threshold) {
  return new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(classname);
        } else {
          entry.target.classList.remove(classname);
        }
      });
    },
    {
      threshold: threshold,
    }
  );
}

function setObserve(elements, observer) {
  for (let i = 0; i < elements.length; i++) {
    const el = elements[i];
    observer.observe(el);
  }
}
