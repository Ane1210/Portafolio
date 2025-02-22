const text = document.querySelector(".text p");

text.innerHTML = text.innerHTML
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 10}deg)">${char}</span>`
  )
  .join("");

let num1 = document.querySelector(".num1");
let num2 = document.querySelector(".num2");
let num3 = document.querySelector(".num3");

const CounterUpAnimation = (number, start, end, duration) => {
  let startTimestamp = null;
  const step = (tiemstamp) => {
    if (!startTimestamp) {
      startTimestamp = tiemstamp;
    }

    let prograss = Math.min((tiemstamp - startTimestamp) / duration, 1);
    number.innerHTML = Math.floor(prograss * (end - start) + start) + "k+";

    if (prograss < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};

const navbar = document.querySelector(".nav-bar");

gsap.from(navbar.children, {
  duration: 1,
  delay: 0.5,
  opacity: 0,
  y: 50,
  stagger: {
    amount: 0.4,
  },
});

gsap.from(".side-one h1", {
  x: -200,
  skewX: 65,
  opacity: 0,
  duration: 1,
  delay: 1,
  stagger: {
    amount: 0.4,
  },
});

gsap.from(".skew", {
  duration: 1,
  delay: 0.5,
  opacity: 0,
  y: 50,
  stagger: {
    amount: 0.4,
  },
});

gsap.from(".statistic", {
  delay: 2,
  autoAlpha: 0,
  stagger: 0.1,
});

gsap.fromTo(
  ".circle-text",
  {
    opacity: 0,
    scale: 0,
    rotation: 500,
  },
  {
    duration: 1,
    delay: 2,
    opacity: 1,
    scale: 1,
    rotation: 20,
    onComplete: () => {
      // Call the repeat function after the initial animation
      gsap.to(".circle-text", {
        duration: 80, // Adjust duration for rotation speed
        rotation: -360 * 5 + 20, // Rotate multiple times (5 in this example) + initial rotation
        ease: "none", // Linear rotation for constant speed
        repeat: -1, // Infinite repeat
        repeatDelay: 0, // No delay between repeats
      });
    },
  }
);

setTimeout(() => {
  CounterUpAnimation(num1, 0, 100, 5000);
  CounterUpAnimation(num2, 0, 32, 2000);
  CounterUpAnimation(num3, 0, 50, 3000);
}, 1000);
